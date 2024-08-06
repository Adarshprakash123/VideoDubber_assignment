"use client";  

import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Searching for: ${searchQuery}`);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo">
                    <img src="/Product.jpg" alt="Product Hunt Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="#">Launches</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Advertise</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <form onSubmit={handleSearchSubmit} className="search-form">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
                <button className="submit-button">Submit</button>
                <div className="profile">
                    <img src="/Product.jpg" alt="Profile" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
