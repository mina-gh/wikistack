const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const { db } = require('./models')
const wiki = require('./routes/wiki');
const user  = require('./routes/user');

app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/stylesheets')))


app.use('/wiki', wiki);
app.use('/users', user);

app.get('/', (req, res) => {
 res.redirect('/wiki');
});

const PORT = 3000
const init = async () => {
  await db.sync();//{force: true})
  app.listen(PORT, async () => {
  db.authenticate().
  then(() => {
    console.log("db is all good")
  })
  console.log("It is all good")
})}

init()
