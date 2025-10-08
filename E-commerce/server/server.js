// Import necessary modules
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import Supabase client setup
const supabase = require('./config/supabaseClient');

// Import routes
const productRoutes = require('./routes/productRoutes');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies

// Basic Route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the FreshCart E-commerce API!');
});

// API Routes
app.use('/api/products', productRoutes);
// We will add other routes (auth, orders, reviews) here later

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
