const supabase = require('../config/supabaseClient');

// Controller to get all products
const getAllProducts = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*');

        if (error) {
            throw error;
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a single product by its ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single(); // .single() expects one row, returns error if not found

        if (error) {
            throw error;
        }

        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
};
