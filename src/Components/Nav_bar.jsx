import React from 'react';
import "./Nav_bar.css";
import { Link } from "react-router-dom";

export const Nav_bar = () => {
    return (
        <div id='mainDiv'>
            <div>
                <ul id='leftNav'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/base">Base</Link></li>
                    <li><Link to="/props">Props</Link></li>
                    <li><Link to="/multiple">Multiple</Link></li>
                </ul>
            </div>
            <div>
                <ul id='rightNav'>
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </div>
        </div>
    );
};
