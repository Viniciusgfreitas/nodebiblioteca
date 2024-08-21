// initialization functions
const app = {}
const bookModel = require('../models/bookModel')


// Function - CREATE Book
app.createBook = async (req, res) => {
    try {
      response = await bookModel.createBook(req, res);
      res.status(200).json(response);
    } catch (error) { res.status(500).json(err); }
}

// Function - READ Book
app.readBook = async (req, res) => {
    try {
      response = await bookModel.readBook(req, res);
      res.status(200).json(response);
    } catch (error) { res.status(500).json(error); }
}

// Function - UPDATE Book
app.updateBook = async (req, res) => {
    try {
      response = await bookModel.updateBook(req, res);
      res.status(200).json(response);
    } catch (error) { res.status(500).json(error); }
}

// Function - DELETE Book
app.deleteBook = async (req, res) => {
    try {
      response = await bookModel.deleteBook(req, res);
      res.status(200).json(response);
    } catch (error) { res.status(500).json(error); }
}

// Function - GET ALL Book
app.getAllBook = async (req, res, next) => {
    try {
			response = await bookModel.getAllBook(req, res);
			res.status(200).json(response);
    } catch (error) { res.status(500).json(error); }
}

// Module exports
module.exports = app;