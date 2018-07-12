const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const MUSIC_FOLDER_PATH = path.join(__dirname, '../media');
const musicList = require('../data/musicList');

router.get('/', (req, res) => {
  res
    .status(200)
    .json(musicList);
});

router.get('/:id', (req, res) => {
  const musicId = req.params.id - 1;
  const musicPath = path.join(MUSIC_FOLDER_PATH, musicList[musicId].link);
  const musicStat = fs.statSync(musicPath);
  const musicTotalSize = musicStat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : musicTotalSize - 1;
    const musicStreamFile = fs.createReadStream(musicPath, {start, end})
    const musicChunkSize = (end - start) + 1;
    res
      .status(206)
      .header({
        'Content-Range': `bytes ${start}-${end}/${musicTotalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': musicChunkSize,
        'Content-Type': 'video/mp4',
      });
      musicStreamFile.pipe(res);
  } else {
    res
      .status(200)
      .header({
        'Content-length': musicTotalSize,
        'Content-type': 'audio/mpeg' 
      });
    fs.createReadStream(musicPath).pipe(res);
  }
});

module.exports = router;