import React, { useCallback } from 'react';
import './Track.css';

const Track = ({ track, onAdd, onRemove, isRemoval }) => {

    const addTrack = useCallback(() => {
        onAdd(track);
    }, [onAdd, track]);

    const removeTrack = useCallback(() => {
        onRemove(track);
    }, [onRemove, track]);

    return (
        <div className="track">
            <div className='track-container'>
                <h3>{track.name}</h3>
                <p className="paragraph">{track.artist} | {track.album}</p>
            </div>
            {isRemoval ? (
                <button className="track-action" onClick={removeTrack}>-</button>
            ) : (
                <button className="track-action" onClick={addTrack}>+</button>
            )}
        </div>
    );
};

export default React.memo(Track);

