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
                    return await UserDao.save(userBody);
                }
            },
            {
                method: 'DELETE',
                path: '/api/user/delete/{email}',
                handler: async function (req, h) {

                    const email = req.params['email'];
                    const foundUser = await UserDao.findOne({email: {$eq: email}});

                    if (foundUser !== null) {
                        await UserDao.deleteByEmail(email);
                        return h.response(`Successfully removed user with email = ` + email).code(200);
                    } else {
                        return h.response(`Unable to remove user with email = ` + email).code(500);
                    }
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
