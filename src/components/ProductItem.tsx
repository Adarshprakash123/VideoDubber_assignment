"use client";  

import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    votes: number;
}

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const [votes, setVotes] = useState(product.votes);

    const handleUpvote = () => {
        setVotes(votes + 1);
    };

    return (
        <div className="product-item">
            <div className="details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
            <div className="votes" onClick={handleUpvote}>
                ▲ {votes}
            </div>
        </div>
    );
};

export default ProductItem;
