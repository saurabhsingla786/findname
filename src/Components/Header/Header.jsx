import React from 'react';
import './Header.css';

const Header = ({ input }) => {
    return (
        <div className="header-container">
            <img
                src={require('./../../Img/Thinking.png')}
                className={`header-img ${
                    input ? 'header-img-contract' : 'header-img-expand'
                }`}
                alt="headerImage"
            />
            <h1
                className={`header-content ${
                    input ? 'header-content-contract' : 'header-content-expand'
                }`}>
                Find Name !
            </h1>
        </div>
    );
};

export default Header;
