
import React from 'react'

const Nav = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="/search" class="brand-logo center">Google Books</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="/search">Search</a></li>
                    <li><a href="/saved">Saved</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
