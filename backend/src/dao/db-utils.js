const Mongo = require('mongoose');

module.exports = {
    isConnected: () => checkConn(),
    dbName: () => getDbName(),
    dbHost: () => getDbHost()
}

const checkConn = () => Mongo.connection.readyState;

const getDbName = () => Mongo.connection.db.databaseName;

const getDbHost = () => Mongo.connection.host;