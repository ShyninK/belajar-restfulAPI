const PostModel = require('../models/modelPosts');

const index = async (req, res) => {
    try {
        const posts = await PostModel.getAllPosts();
        res.status(200).json({
            status: true,
            message: 'List Data Posts',
            data: posts
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        });
    }
};

const store = async (req, res) => {
    try {
        let formData = {
            title: req.body.title,
            content: req.body.content
        };

        const result = await PostModel.createPosts(formData);

        res.status(201).json({
            status: true,
            message: 'Insert Data Successfully',
            data: { id: result.insertId, ...formData }
        });
    } catch (err) {
        console.error("❌ ERROR SQL:", err); // debug ke terminal
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
};


module.exports = { index, store };
