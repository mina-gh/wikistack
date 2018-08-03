const express = require('express');
const { Page, User } = require('../models');
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
  try {
    let body = req.body;

    // need to save the author(name and email) of given page
    const [user, wasCreated] = await User.findOrCreate({
       where: {
         name: body.name,
         email: body.email
       }
      });

    const page = await Page.create(body);

    page.setAuthor(user);

    res.redirect(`/wiki/${page.slug}`);
  } catch (err){
    next(err);
  }
});





module.exports  = wiki;
