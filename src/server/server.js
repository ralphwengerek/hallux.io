/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';
import errorHandler from 'errorhandler';
import mongoose from 'mongoose';
import morgan from 'morgan';
import chalk from 'chalk';
import config from '../shared/config';
import './models';
import configureRoutes from './routes';

mongoose.Promise = global.Promise;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false,
}));

configureRoutes(app);

if (config.isProduction) {
  app.use(express.static(path.join(__dirname, 'public')));
} else {
  app.get('*', (req, res) => {
    res.redirect(config.baseUrl);
  });
  app.use(errorHandler());
}

mongoose.connect(`mongodb://${config.mongoHost}:${config.mongoPort}/hallux`, {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log(chalk.blue.bold('Database Server connected'));

  app.listen(config.serverPort, config.serverHost, () => {
    console.log(chalk.blue.bold('Server started: ') + chalk.blue.underline.bold(`http://${config.serverHost}:${config.serverPort}`));
    console.log(chalk.blue.bold(`Serving site from: ${__dirname}/public/index.html`));
    console.log(chalk.green.bold('CONFIGURATION:\n'), config);
  });
}).catch(err => console.log(err));
