// Dependencies
const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// Router BOOK
router.post('/create', bookController.createBook); // Create Book
router.post('/read'  , bookController.readBook  ); // Read Book
router.post('/update', bookController.updateBook); // Update Book
router.post('/delete', bookController.deleteBook); // Delete Book
router.post('/all'   , bookController.getAllBook); // Get All Book


// Module exports
module.exports = router;