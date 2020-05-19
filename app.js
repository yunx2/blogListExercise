const config = require('./utils/config');
const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const blogsRouter = require('./controllers/blogs');
const usersRouter = require('./controllers/users')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to mongodb'))
.catch(() => console.log('there was a problem connection to mongodb'))

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter)

module.exports = app;