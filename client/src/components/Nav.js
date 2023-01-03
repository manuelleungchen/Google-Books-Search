
import React, { useEffect } from 'react';
import M from "materialize-css";


const Nav = () => {
    useEffect(() => {
        var sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, {});
    }, [])
    
    return (
        <>
            <nav>
                <div className="nav-wrapper blue-grey darken-3">
                    <a href="/search" className="brand-logo center">Google Books</a>
                    <a href="#mobile-nav" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="left hide-on-med-and-down">
                        <li><a href="/search">Search</a></li>
                        <li><a href="/saved">Saved</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav blue-grey lighten-3" id="mobile-nav">
                <li><a href="/search">Search</a></li>
                <li><a href="/saved">Saved</a></li>
            </ul></>
    )
}

export default Nav
