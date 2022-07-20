const User = require('../models/user');
const Encrypt = require('../security/bcrypt-utils');

module.exports = {
    find: async (criteria) => await find(criteria),
    save: async (user) => await save(user),
    deleteByEmail: async (email) => await deleteByEmail(email),
    findOne: async (criteria) => await findOne(criteria),
    aggregationTime: async () => await createAggregation()
}

async function find(criteria) {
    return User.find(criteria);
}

async function findOne(criteria) {
    return User.findOne(criteria);
}

function deleteByEmail(email) {
    console.log('----------------Trying to delete user by email with param: email = %s', email);

    return User.deleteOne({email: {$eq: email}});
}

async function save(user) {
    user.password = await Encrypt.hashPassword(user.password);
    const dbUser = new User(user);
    return await dbUser.save();
}

async function createAggregation() {
    const date = new Date();
    date.setHours(date.getHours() + 3)
    return User.aggregate(
        [
            {
                $match: {email: {$exists: true}},
            },
            {
                $limit: 1
            },

            {
                $project: {
                    fullDate: date,
                    _id: 0,
                    email: 1,
                    fullName: {$concat: ["$fName", " ", "$lName"]}
                }
            },

        ]
    );
}
