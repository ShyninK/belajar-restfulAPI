const connection = require('../../config/database');

// ambil semua posts
const getAllPosts = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM posts ORDER BY id DESC', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// tambah data posts
const createPosts = (formData) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO posts SET ?', formData, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = { getAllPosts, createPosts };
