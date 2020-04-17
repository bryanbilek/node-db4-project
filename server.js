const express = require('express');
const server = express();
const helmet = require('helmet');
const recipesRouter = require('./recipes/recipesRouter');

server.use(express.json());
server.use(helmet());
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
    res.send('<h2>Welcome To The DB4 Project API!</h2>');
});

module.exports = server;