const UserDao = require('../dao/user-dao');
const DbUtils = require('../dao/db-utils');
const Boom = require('@hapi/boom');

module.exports = {
    name: 'myPlugin',
    version: '1.0.0',
    register: async function (server) {

        server.route([
            {
                method: 'GET',
                path: '/api/user/list',
                handler: async function () {

                    return await UserDao.find();
                }
            },
            {
                method: 'POST',
                path: `/api/user/save`,
                handler: async function (req) {
                    const userBody = req.payload
                    return UserDao.save(userBody)
                        .then(function (data) {
                            return data
                        }).catch(function (err) {
                            return {message: 'Cannot save user!', error: err.errors}
                        });
                }
            },
            {
                method: 'DELETE',
                path: '/api/user/delete/{email}',
                handler: async function (req) {

                    const email = req.params['email'];

                    return await UserDao.deleteByEmail(email);

                }
            },
            {
                method: 'GET',
                path: '/api/db/connection',
                handler: function (req, h) {

                    const dbCon = DbUtils.isConnected();

                    if (dbCon !== 1) {
                        throw Boom.internal('Database is not connected!');
                    }

                    return h.response({
                        dbState: dbCon,
                        dbName: DbUtils.dbName(),
                        dbHost: DbUtils.dbHost()
                    }).code(200);
                }
            }
        ]);
    }

}
