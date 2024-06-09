// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Import the CSS file for styling

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/page1">Sushi Mouse</Link>
                </li>
                <li>
                    <Link to="/page2">Mario Background</Link>
                </li>
                <li>
                    <Link to="/page3">Page 3</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
