const express = require('express');
//"Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts." -Carnes, Beau
const cors = require('cors');
const mongoose = require('mongoose');

// Environment variables
require('dotenv').config();

// Following for creating the express server
const app = express();
const port = process.env.port || 5000;

// Middleware (cors)
app.use(cors());
// Allows to parse json
app.use(express.json());

const uri = process.env.MONGODB_URI;
console.log(uri);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  dbName: 'spisested-advisor'
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connected...');
});

const companiesRouter = require('./routes/companies');
app.use('/companies', companiesRouter);

// Starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
