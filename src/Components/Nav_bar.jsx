import React from 'react'
import "./Nav_bar.css"
import {Link} from "react-router-dom"
export const Nav_bar = () => {
    return (
        <div id='mainDiv'>
            <div>
                <ul id='leftNav'>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Updates">Updates</a></li>
                    <li><a href="/More">More info</a></li>
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
