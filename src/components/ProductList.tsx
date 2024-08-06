"use client";  
import React from 'react';
import ProductItem from './ProductItem';

interface Product {
    id: number;
    name: string;
    description: string;
    votes: number;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = React.useState<Product[]>([
        { id: 1, name: 'Upmetrics AI', description: 'Business plan & financial forecast using AI', votes: 475 },
        { id: 2, name: 'Me.bot', description: 'Turn your ideas into an AI life coach', votes: 366 },
        { id: 3, name: 'Frontend AI', description: 'Your UI code generated from prompts or images', votes: 198 },
        { id: 4, name: 'Codei AI', description: 'Land your dream software job', votes: 104 },
        { id: 5, name: 'Minvo 2.0', description: 'All-in-one AI video shorts platform for podcasts & more', votes: 92 },
        { id: 6, name: 'TaskFlow', description: 'Organize and track your tasks efficiently', votes: 89 },
        { id: 7, name: 'EduTech', description: 'Online learning platform for modern education', votes: 150 },
        { id: 8, name: 'FitTrack', description: 'AI-powered fitness and health tracking', votes: 135 },
        { id: 9, name: 'TravelMate', description: 'Personal AI travel assistant', votes: 112 },
        { id: 10, name: 'EcoShop', description: 'Sustainable shopping made easy', votes: 105 },
        { id: 11, name: 'RecipeMaster', description: 'AI-driven recipe recommendations', votes: 98 },
        { id: 12, name: 'FinanceGuru', description: 'Your AI financial advisor', votes: 170 },
    ]);

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
