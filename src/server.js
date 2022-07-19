'use strict';

const yml = require('read-yaml-file');
const Hapi = require('@hapi/hapi');
const Mongo = require('mongoose');

const init = async function () {

    const env = await yml('./config.yaml');
    const srvData = env.server;

    const server = Hapi.server({
        host: srvData.host,
        port: srvData.port
    });

    await server.start();

    const db_options = env.db.options;
    await Mongo.connect(env.db.url, db_options);

    await server.register([
        {
            plugin: require('./plugins/route-plugin')
        }
    ]);

    console.log('Successfully connected to the database: %s', Mongo.connection.db.databaseName);

    return server;
}

process.on('unhandledRejection', function (error) {
    console.error(`Unexpected error occurred! Error: %s`, error);
    process.exit(1);
});

init().then(
    function (server) {
        console.log('Server successfully started on: %s', server.info.uri);
    },
    function (error) {
        console.error(`Unable to start the server! Error: %s`, error);
    }).catch(
    function (err) {
        console.error(`Unexpected error occurred! Error: %s`, err);
    });
