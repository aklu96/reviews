/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3003;

const productDB = require('../database/Product.js');

const productRoutes = require('./routes/productRoutes');

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/productreviews', productRoutes);

app.listen(PORT, () => {
  console.log(`Reviews server running on ${PORT}...`);
});
