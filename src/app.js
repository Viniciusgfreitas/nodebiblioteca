// Dependencies
require('dotenv').config();
const express   = require('express');
const bookRoute = require('./routes/bookRoute');

// MODULES initialization
const app  = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());

// Routes
app.use('/api/book', bookRoute);

// App initialization
app.listen(port, () => {
  console.log(`nodeBiblioteca application initializing, application listening on port ${port}`)
})