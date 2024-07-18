import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Header = () => {
    const [scrollDirection, setScrollDirection] = useState('up');

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;

            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={
                scrollDirection === 'down' ? 'header-hidden' : 'header-visible'
            }
        >
            <Navbar />
            <SearchBar />
        </header>
    );
};

export default Header;
