const UserDao = require('../dao/user-dao');

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
            }
        ]);
    }

}
