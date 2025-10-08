import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const placeholderImage = 'https://placehold.co/400x300/a3e635/ffffff?text=Fresh';

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <Link to={`/products/${product.id}`}>
                <img 
                    className="w-full h-48 object-cover" 
                    src={product.image_url || placeholderImage} 
                    alt={product.name} 
                    onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
                />
            </Link>
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.category}</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">${product.price_per_kg}/kg</span>
                    <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
