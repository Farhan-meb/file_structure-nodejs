const express = require('express');
const db = require('./database');
const middlewares = require('./middlewares');
const router = require('./routes');
const globalErrorHandler = require('./controllers/handlers/errorController');
const _delete = require('./helpers/deleteFolderFiles');

const app = express();

require('dotenv').config({ silent: true });

app.use(...middlewares);

router.registerApplicationRoutes(app);

db.connectMongoLocal();

app.use(globalErrorHandler);

_delete.deleteImages();

module.exports = app;
