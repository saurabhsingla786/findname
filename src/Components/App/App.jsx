import React, { useState } from 'react';
import Header from '../Header/Header';
import Name from '../Name/Name';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

const App = () => {
    const [inputExist, setInputExist] = useState(false);
    const [input, setInput] = useState('');

    const handleInput = (inputText) => {
        setInputExist(inputText);
        setInput(inputText);
    };

    return (
        <div>
            <Header input={inputExist} />
            <SearchBar onInput={handleInput} />
            <Name input={input} />
        </div>
    );
};

export default App;
