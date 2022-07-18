'use strict';

const Hapi = require('@hapi/hapi');

const init = async function () {

    const server = Hapi.server({
        host: '0.0.0.0',
        port: '8000'
    });

    await server.start();

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
