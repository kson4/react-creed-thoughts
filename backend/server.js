require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Home = require('./routes/HomeRoutes')

app.use(express.json())

app.use('/apiv1/home', Home)

mongoose.set('strictQuery', true)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 4000, () =>
      console.log('Connected to database and server...')
    )
  })
  .catch(err => {
    console.log(err, 'asd')
  })
