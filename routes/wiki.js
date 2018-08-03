const express = require('express');
const { Page } = require('../models');
const {addPage} = require('../views');
const wiki = express.Router();



// GET /
wiki.get('/', async (req, res) => {
  res.send('got to GET /wiki/');
});

// POST /
wiki.post('/', async (req, res, next) => {
  let body = req.body;

  const page = new Page({
    title: body.title,
    content: body.content,
    status: body.status
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (err){
    next(err);
  }

  //res.send('got to POST /wiki/');
});

// GET /add
wiki.get('/add', async(req, res) => {
  res.send(addPage());
});



module.exports  = wiki;
