const express = require('express');
const {addPage} = require('../views');
const wiki = express.Router();


// GET /
wiki.get('/', async (req, res) => {
  res.send('got to GET /wiki/');
});

// POST /
wiki.post('/', async (req, res) => {
  res.send('got to POST /wiki/');
});

// GET /add
wiki.get('/add', async(req, res) => {
  res.send(addPage());
});


module.exports  = wiki;
