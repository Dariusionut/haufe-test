const User = require('../models/user');

module.exports = {
    find: async (criteria) => await find(criteria),
    save: async (user) =>  save(user)
}

async function find(criteria) {
    return User.find(criteria);
}

async function save(user) {
    const dbUser = new User(user);
    return dbUser.save();
}

