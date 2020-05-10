import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div id="main-header">
                <h1>e-shop</h1>
                <ul>
                    <li>Collections</li>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
        )
    }
}

export default Header
