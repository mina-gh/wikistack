const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/stylesheets')))

app.get('/', (req, res) => {
  res.send("Does it work?")
})




const PORT = 3000
app.listen(PORT, () => {
  console.log("It is all good")
})
