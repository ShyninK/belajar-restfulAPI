const express = require('express');
const app = express();

app.use(express.json());

// biar bisa baca x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const postRoutes = require('../belajar-api/src/routes/routePosts');

app.use(express.json());
app.use('/posts', postRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
