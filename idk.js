const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let playlist = [];

app.get('/playlist', (req, res) => {
res.json(playlist);
});

app.post('/playlist', (req, res) => {
const newSong = req.body;
playlist.push(newSong);
res.json(newSong);
});

app.put('/playlist/:id', (req, res) => {
const songIndex = playlist.findIndex(song => song.id === parseInt(req.params.id));
if (songIndex !== -1) {
    const updatedSong = req.body;
    playlist[songIndex] = updatedSong;
    res.json(updatedSong);
} else {
    res.status(404).json({ message: 'Song not found' });
}
});

app.delete('/playlist/:id', (req, res) => {
const songIndex = playlist.findIndex(song => song.id === parseInt(req.params.id));
if (songIndex !== -1) {
    const deletedSong = playlist.splice(songIndex, 1);
    res.json(deletedSong);
} else {
    res.status(404).json({ message: 'Song not found' });
}
});

app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});
