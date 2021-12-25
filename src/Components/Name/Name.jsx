import React from 'react';
import './Name.css';

const findName = require('@rstacruz/startup-name-generator');

const Name = ({ input }) => {
    const suggestedNames = findName(input).map((suggestedName) => {
        return (
            <div className="name-value-container">
                <p>{suggestedName}</p>
            </div>
        );
    });

    return (
        <div className="name-container">{input ? suggestedNames : null}</div>
    );
};

export default Name;
