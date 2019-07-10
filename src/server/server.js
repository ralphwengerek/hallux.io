/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';
import errorHandler from 'errorhandler';
// import mongoose from 'mongoose';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

// const Task = require('./api/models/todoListModel')
// created model loading here
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://root:root@mongo:27017/TodoDB', { auth: { authdb: 'admin' }, useNewUrlParser: true });

const app = express();

app.use(cors());
// app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false,
}));

if (!isProduction) {
  app.use(errorHandler());
}

app.listen(port);

console.log(`Node.js + MongoDB RESTful API server started on: ${port}`);
