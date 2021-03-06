const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

require('dotenv').config();

mongoose.connect(process.env.REACT_APP_MongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(cors())

server.use(express.json());

server.use(routes);

server.listen(process.env.PORT || 3333);