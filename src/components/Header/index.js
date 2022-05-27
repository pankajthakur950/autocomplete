import React from 'react';

import classes from './Header.module.scss';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <nav className={classes.navigation}>
                    <ul>
                        <li className={classes.logo}><a href="/">Github Users</a></li>
                        <li className={classes.links}>
                            <a href="/about">About</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/login">Login</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;