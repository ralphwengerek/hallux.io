/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';
import errorHandler from 'errorhandler';
import mongoose from 'mongoose';
import chalk from 'chalk';
import config from '../shared/config';
import './models';
import routes from './routes';

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

routes(app);

if (!config.isProduction) {
  app.use(errorHandler());
}

mongoose.connect(`mongodb://${config.mongoHost}:${config.mongoPort}/hallux`, {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log(chalk.blue.bold('Database Server connected'));

  app.listen(config.serverPort, config.serverHost, () => {
    console.log(chalk.blue.bold('Server started: ') + chalk.blue.underline.bold(`http://${config.serverHost}:${config.serverPort}`));
    console.log(chalk.green.bold('CONFIGURATION:\n'), config);
  });
}).catch(err => console.log(err));
