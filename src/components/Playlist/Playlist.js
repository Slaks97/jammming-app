import React, { useCallback } from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';


const Playlist = ({ playlistName, playlistTracks, onRemove, onNameChange, onSave}) => {

    const handleNameChange = useCallback((e) => {
        onNameChange(e.target.value);
    }, [onNameChange]);

    return (
        <div className="Playlist">
            <input type="text" value={playlistName} onChange={handleNameChange} />
            <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
};

export default React.memo(Playlist);