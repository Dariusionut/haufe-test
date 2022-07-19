const User = require('../models/user');
const Encrypt = require('../security/bcrypt-utils');

module.exports = {
    find: async (criteria) => await find(criteria),
    save: async (user) => await save(user)
}

async function find(criteria) {
    return User.find(criteria);
}

async function save(user) {
    user.password = await Encrypt.hashPassword(user.password);
    const dbUser = new User(user);
    return await dbUser.save();
}
