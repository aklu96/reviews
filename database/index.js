
const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/patagonia';

const db = mongoose.connect(mongoUri, ({ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}))
  .then((r) => { console.log (`connected to DB @ ${mongoUri}`); } )
  .catch(console.log);

module.exports = db;
