/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');
const chalk = require('chalk');
const config = require('../shared/config');

mongoose.Promise = global.Promise;

const app = express();

app.use(cors());
// app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false,
}));
// app.use(require('./routes'));

if (!config.isProduction) {
  app.use(errorHandler());
}

mongoose.connect(`mongodb://${config.mongoHost}:${config.mongoPort}/hallux`, {
  useNewUrlParser: true,
}).then(() => {
  console.log(chalk.blue.bold('Database Server connected'));
  app.listen(config.serverPort, config.serverHost, () => {
    console.log(chalk.blue.bold('Server started: ') + chalk.blue.underline.bold(`http://${config.serverHost}:${config.serverPort}`));
    console.log(chalk.green.bold('CONFIGURATION:\n'), config);
  });
}).catch(err => console.log(err));
