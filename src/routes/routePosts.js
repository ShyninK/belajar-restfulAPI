const express = require('express');
const router = express.Router();

const PostController = require('../controllers/controllerPosts');

// route GET /posts
router.get('/', PostController.index);
router.post('/store', PostController.store);

module.exports = router;
