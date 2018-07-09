const express = require("express");
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;
const MUSIC_FOLDER_PATH = path.join(__dirname, 'media');
app.use(cors());

const musicList = {
  1: 'Dun.mp3',
  2: 'Grand_Theft_Auto_4.mp3',
  3: 'GTA_San_Andreas.mp3',
  4: 'Super_Mario_Bros.mp3',
  5: 'Tetris_theme.mp3'
};

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Ressources server !');
});

// Music Ressources
app.get('/music', (req, res) => {
  res
    .status(200)
    .json(musicList);
});

app.get('/music/:id', (req, res) => {
  const musicId = req.params.id;
  const musicPath = path.join(MUSIC_FOLDER_PATH, musicList[musicId]);
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

app.get('*', (req, res) => {
  res.status(404).send('Ooops no issues... try to escape from desert !');
});

app.listen(PORT, 'localhost', () => console.log(`Server is running on ${PORT}...`));