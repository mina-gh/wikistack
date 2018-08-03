const express = require('express');
const {userList, userPages} = require('../views');
const {User, Page} = require('../models');

const user = express.Router();

// GET /users
user.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();

    if (users.length > 0){
      res.send(userList(users));
    } else {
      res.status(404).send("Warning: Couldn't find any authors");
    }
  } catch (err){
    next(err);
  }
});

// GET /users/:id
user.get('/:id', async (req, res) => {
  try{
    const author = await User.findById(req.params.id);
    const pages = await Page.findAll({
     where:{
       authorId: Number(req.params.id)
     }
    });

    res.send(userPages(author, pages));
  }catch(err){
    next(err);
  }
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
