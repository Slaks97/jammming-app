import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';


const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {
    return (
        <div className="Tracklist">
            {tracks.map((track) => (
                <Track 
                    key={track.id}
                    track={track}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    isRemoval={isRemoval}
                />
            ))}
        </div>
    );
};

export default React.memo(TrackList);