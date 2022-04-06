import React from "react";
import { useTheme } from '../../contexts/ThemeContext/ThemeContext'
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    console.log(theme);

    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
            <a className="navbar-brand mx-3" href="/">Context-Hooks</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
                
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <button onClick={toggleTheme} className="nav-link change-theme-button">Change Theme</button>
                </li>
              </ul>
            </div>
        </nav>
    );
};

export default Navbar;
