const mongoose = require('mongoose');
const config = require('../config');

const connectMongoLocal = async () => {
    const { host, port, dbname, username, password } = config.db.mongo;
    const connectionString = `mongodb://${host}:${port}/${dbname}`;
    mongoose
        .connect(connectionString, {
            user: username,
            password,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => console.log('DB Connected to Local MongoDB!'))
        .catch((err) => console.error('App starting error:', err.stack));
};

const connectMongoAtlas = async () => {
    const DB = process.env.DATABASE_ATLAS.replace(
        '<PASSWORD>',
        process.env.DATABASE_ATLAS_PASSWORD
    );
    mongoose
        .connect(DB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log('DB Connected to MongoDB Atlas!');
        });
};

const connectMongoDO = async () => {
    const DB = process.env.DATABASE_DIGITAL_OCEAN.replace(
        'PASSWORD',
        process.env.DATABASE_DIGITAL_OCEAN_PASSWORD
    );
    mongoose
        .connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            tls: true,
            tlsCAFile: './ca-certificate.crt',
        })
        .then(() => {
            console.log('DB Connected to Digital Ocean MongoDB!');
        });
};

module.exports = {
    connectMongoLocal,
    connectMongoAtlas,
    connectMongoDO,
};
