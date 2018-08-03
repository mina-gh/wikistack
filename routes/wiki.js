const express = require('express');
const { Page } = require('../models');
const {addPage, wikiPage, main} = require('../views');
const wiki = express.Router();




// GET /
wiki.get('/', async (req, res) => {
  const posts = await Page.findAll()
  res.send(main(posts));
});

wiki.get('/add', async(req, res) => {
  res.send(addPage());
});

wiki.get('/:slug', async (req, res, next) => {
  try{
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    })
    res.send(wikiPage(page))
    } catch (err){next(err)}
})

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
    res.redirect(`/wiki/${page.slug}`);
  } catch (err){
    next(err);
  }

  //res.send('got to POST /wiki/');
});





module.exports  = wiki;
