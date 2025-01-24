import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Robert Heberly. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
