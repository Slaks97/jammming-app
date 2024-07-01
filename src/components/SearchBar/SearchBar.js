import React, { useState, useCallback } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) =>{ 
    const [term, setTerm] = useState('');

    const handleTermChange = useCallback((e) => {
        // e.preventDefault()
        setTerm(e.target.value);
    }, []);  
    
    const search = useCallback(() => {
        onSearch(term);
    }, [onSearch, term]);

    return (
        <div className="SearchBar">
            <input 
                type="text" 
                // value={term}
                onChange={handleTermChange}
                placeholder="Enter A Song, Album, or Artist"
                />
            <button 
                className="SearchButton" 
                onClick={search}
                type="submit">SEARCH</button>
        </div>
    );
};

export default React.memo(SearchBar);
