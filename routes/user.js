const express = require('express');

const user = express.Router();


// GET /users
user.get('/', async (req, res) => {

});
// GET /users/:id
user.get('/:id', async (req, res) => {

});

// POST /users
user.post('/', async (req, res) => {

});

// PUT /users/:id
user.put('/:id', async (req, res) => {

});

// DELETE /users/:id
user.delete('/:id', async (req, res) => {

});


module.exports  = user;
