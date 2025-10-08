import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    // State to hold the list of products fetched from the backend
    const [products, setProducts] = useState([]);
    // State to manage the loading status while fetching data
    const [loading, setLoading] = useState(true);
    // State to hold any potential error messages
    const [error, setError] = useState(null);

    // useEffect hook runs after the component mounts to fetch data
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Make a GET request to your backend API endpoint for products
                const response = await axios.get('http://localhost:8000/api/products');
                // We only want to show a few featured products on the homepage.
                // .slice(0, 4) gets the first 4 items from the returned array.
                setProducts(response.data.slice(0, 4));
            } catch (err) {
                // If the request fails, update the error state
                setError('Failed to fetch products. Please try again later.');
                console.error(err); // Log the actual error to the console for debugging
            } finally {
                // This runs whether the request succeeded or failed.
                // Set loading to false so the UI knows to stop showing a loading message.
                setLoading(false);
            }
        };

        // Call the function to execute the fetch operation
        fetchProducts();
    }, []); // The empty dependency array [] means this effect runs only once when the component is first rendered.

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center bg-lime-500 text-white py-20 px-6 rounded-lg shadow-xl">
                
                <h1 className="text-5xl font-bold mb-4">Welcome to FreshCart</h1>
                <p className="text-xl max-w-3xl mx-auto mb-8">Your one-stop shop for the freshest fruits and vegetables, delivered right to your doorstep.</p>
                <Link 
                    to="/products" 
                    className="bg-white text-lime-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300"
                >
                    Shop All Products
                </Link>
            </section>
            
            {/* Featured Products Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Featured Products</h2>
                
                {/* Conditional Rendering based on state */}
                {loading && <p className="text-center text-gray-500">Loading fresh products...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                
                {/* Product Grid */}
                {!loading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default HomePage;

