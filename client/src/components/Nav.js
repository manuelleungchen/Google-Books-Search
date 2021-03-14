
import React from 'react'

const Nav = () => {
    return (
        <nav className="blue-grey darken-3">
            <div className="nav-wrapper">
                <a href="/search" className="brand-logo center">Google Books</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="/search">Search</a></li>
                    <li><a href="/saved">Saved</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
