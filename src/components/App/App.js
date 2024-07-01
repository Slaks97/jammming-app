import React, { useState, useCallback } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import SpinnerLoader from '../../SpinnerLoader/SpinnerLoader';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);


  const addTrack = useCallback((track) => {
    if (!playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    }
  }, [playlistTracks]);


  const removeTrack = useCallback((track) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(savedTrack => savedTrack.id !== track.id));
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);


  const savePlaylist = useCallback(() => {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });    
  }, [playlistName, playlistTracks]);

  const search = useCallback((term) => {
    Spotify.search(term).then(results => setSearchResults(results));
  }, []);

  return (
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>

      <div className="App">
        <SpinnerLoader className="spin-icon" style={{border: '1px solid yellow'}} />
        <SearchBar onSearch={search} />
        
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

// export default App;
export default React.memo(App);
