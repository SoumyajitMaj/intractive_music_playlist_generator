import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
const [playlist, setPlaylist] = useState([]);
const [song, setSong] = useState('');
const [id, setId] = useState('');
const [title, setTitle] = useState('');
firebase.auth().createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
})
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
});
firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
})
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
});
firebase.database().ref('users/' + user.uid).set({
    email: user.email,
    photoURL: user.photoURL,
    // ... other user details
});

useEffect(() => {
    getPlaylist();
}, []);

const getPlaylist = async () => {
    const response = await axios.get('http://localhost:5000/playlist');
    setPlaylist(response.data);
};

const addSong = async () => {
    const newSong = { title: song, id: Date.now() };
    const response = await axios.post('http://localhost:5000/playlist', newSong);
    setPlaylist([...playlist, response.data]);
    setSong('');
};

const updateSong = async () => {
    const updatedSong = { title: title, id: id };
    await axios.put(`http://localhost:5000/playlist/${id}`, updatedSong);
    const updatedPlaylist = playlist.map(song => song.id === id ? updatedSong : song);
    setPlaylist(updatedPlaylist);
};

const deleteSong = async id => {
    await axios.delete(`http://localhost:5000/playlist/${id}`);
    const updatedPlaylist = playlist.filter(song => song.id !== id);
    setPlaylist(updatedPlaylist);
};

return (
    <div className="App">
    <h2>Playlist</h2>
    <ul>
        {playlist.map(song => (
        <li key={song.id}>{song.title}</li>
        ))}
    </ul>

    <h2>Add Song</h2>
    <form onSubmit={e => { e.preventDefault(); addSong(); }}>
        <input type="text" placeholder="Song Title" value={song} onChange={e => setSong(e.target.value)} />
        <button type="submit">Add</button>
    </form>

    <h2>Update Song</h2>
    <form onSubmit={e => { e.preventDefault(); updateSong(); }}>
        <input type="text" placeholder="Song Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Song ID" value={id} onChange={e => setId(e.target.value)} />
        <button type="submit">Update</button>
    </form>

    <h2>Delete Song</h2>
    <form onSubmit={e => { e.preventDefault(); deleteSong(id); setId(''); }}>
        <input type="text" placeholder="Song ID" value={id} onChange={e => setId(e.target.value)} />
        <button type="submit">Delete</button>
    </form>
    </div>
 );
}

export default App;
