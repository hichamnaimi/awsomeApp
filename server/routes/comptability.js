const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

const COMPTABILITY_FOLDER_PATH = path.join(__dirname, '../data');
const csvStreamData = [];

const formatCsvResult = (csvResult) => {
  const formatedData = csvResult.reduce((current, next) => {
    current.date.push(next.date);
    current.debit.push(next.debit);
    current.credit.push(next.credit);
    current.balance.push(next.balance);
    return current;
  }, { date: [], debit: [], credit: [], balance: [] });

  return formatedData;
}

router.get('/', (req, res) => {
  const comptabilityFilePath = path.join(COMPTABILITY_FOLDER_PATH, 'comptability.csv');
  const comptabilityFileStat = fs.statSync(comptabilityFilePath);
  const comptabilityTotalFileSize = comptabilityFileStat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : comptabilityTotalFileSize - 1;
    const comptabilityStreamFile = fs.createReadStream(comptabilityFilePath, {start, end})
    const comptabilityChunkSize = (end - start) + 1;
    res
      .status(206)
      .header({
        'Content-Range': `bytes ${start}-${end}/${comptabilityTotalFileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': comptabilityChunkSize,
        'Content-Type': 'json/application',
      });
      comptabilityStreamFile
        .pipe(csvParser())
        .on('data', (data) => {
          csvStreamData.push(data);
        })
        .on('end', (_) => {
          const result = formatCsvResult(csvStreamData);
          res.json(result);
        });
  } else {
    res
      .status(206)
      .header({
        'Content-length': comptabilityTotalFileSize,
        'Content-type': 'json/application' 
      });
    fs.createReadStream(comptabilityFilePath)
      .pipe(csvParser())
      .on('data', (data) => {
        csvStreamData.push(data);
      })
      .on('end', (_) => {
        const result = formatCsvResult(csvStreamData);
        res.json(result);
      });
  }
});

module.exports = router;