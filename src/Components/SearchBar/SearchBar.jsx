import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onInput }) => {
    return (
        <div className="search-container">
            <input
                placeholder="Type Keywords"
                className="search-input"
                onChange={(event) => {
                    onInput(event.target.value);
                }}></input>
        </div>
    );
};

export default SearchBar;
