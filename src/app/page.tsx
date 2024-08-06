"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import ProductList from '@/components/ProductList';
import Sidebar from '@/components/Sidebar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="main-content">
                    <header className="header">
                        <h1>Top Products Launching Today</h1>
                    </header>
                    <ProductList />
                </div>
                <Sidebar />
            </div>
        </div>
    );
}
