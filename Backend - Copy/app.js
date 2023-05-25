const express = require('express')
const mongoose = require('mongoose')
const router = require('./routers/router')
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/MeanStack?directConnection=true')
  .then(() => console.log('DB Connected!'));
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(4000, ()=>console.log('The Server is running'))
