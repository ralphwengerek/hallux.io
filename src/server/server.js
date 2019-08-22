/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
// import session from 'express-session';
import cors from 'cors';
import errorHandler from 'errorhandler';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import chalk from 'chalk';
import config from './config';
import './models';
import configureRoutes from './routes';
import seedDatabase from './utils/seedDatabase';

mongoose.Promise = global.Promise;

console.log(chalk.green.bold('CONFIGURATION:\n'), config);

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(session({
//   secret: 'hallux.io', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false,
// }));

// API ROUTES
configureRoutes(app);

// STATIC ROUTES
if (config.isProduction || config.isStaging) {
  console.log('Serving from: ', path.join(__dirname, 'public'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'public/index.html'));
  });
} else {
  // Redirect to local dev server
  app.get('*', (req, res) => {
    res.redirect(config.baseUrl);
  });
  app.use(errorHandler());
}

const connectionString = config.isProduction
  ? `mongodb+srv://${config.mongoUser}:${config.mongoPassword}@hallux-2uzsf.mongodb.net/test?retryWrites=true&w=majority`
  : `mongodb://${config.mongoHost}:${config.mongoPort}/hallux`;

console.log('Connecting to database...');
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log(chalk.blue.bold('Database Server connected'));

  if (!config.isProduction) {
    seedDatabase();
  }

  console.log('Starting express...');
  app.listen(config.serverPort, () => {
    console.log(chalk.blue.bold('Server started: ') + chalk.blue.underline.bold(`http://${config.serverHost}:${config.serverPort}`));
    console.log(chalk.blue.bold(`Serving site from: ${__dirname}/public/index.html`));
  });
}).catch((err) => console.log(err));
