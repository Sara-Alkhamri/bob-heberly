import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

function Header() {
    const location = useLocation();

    // Determine the links to display based on the current route
    const getNavLinks = () => {
        switch (location.pathname) {
            case '/gallery':
                return (
                    <>
                        <li>
                            <Link to="/pets">Pet Portraits</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </>
                );
            case '/pets':
                return (
                    <>
                        <li>
                            <Link to="/gallery">Pastel & Oil</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </>
                );
            case '/about':
                return (
                    <>
                        <li>
                            <Link to="/gallery">Pastel & Oil</Link>
                        </li>
                        <li>
                            <Link to="/pets">Pet Portraits</Link>
                        </li>
                    </>
                );
            default:
                return (
                    <>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            {/* <Link to="/pets">Pet Portraits</Link> */}
                        </li>
                    </>
                );
        }
    };

    return (
        <header className="header">
            {/* Logo links to home */}
            <Link to="/" className="logo roboto-bold">
                Robert Heberly
            </Link>
            <nav className="nav">
                <ul>{getNavLinks()}</ul>
            </nav>
        </header>
    );
}

export default Header;
