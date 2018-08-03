const express = require('express');

const user = express.Router();


// GET /users
user.get('/', async (req, res) => {

});
// GET /users/:id
user.get('/:id', async (req, res) => {

});

// POST /users
user.POST('/', async (req, res) => {

});

// PUT /users/:id
user.PUT('/:id', async (req, res) => {

});

// DELETE /users/:id
user.DELETE('/:id', async (req, res) => {

});


module.exports  = user;
