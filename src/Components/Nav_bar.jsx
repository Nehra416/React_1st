import React from 'react'
import "./Nav_bar.css"
import {Link} from "react-router-dom"
export const Nav_bar = () => {
    return (
        <div id='mainDiv'>
            <div>
                <ul id='leftNav'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Updates">Updates</Link></li>
                    <li><Link to="/More">More info</Link></li>
                </ul>
            </div>
            <div>
                <ul id='rightNav'>
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </div>
        </div>
    )
}
