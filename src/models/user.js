const Mongo = require('mongoose');
const mongoose = require("mongoose");

const userSchema = new Mongo.Schema({
    fName: {
        type: String,
        maxlength: [45, 'The last name cannot exceed the length of 45 characters!']
    },
    lName: {
        type: String,
        maxlength: [45, 'The last name cannot exceed the length of 45 characters!']
    },
    email: {
        type: String,
        required: [true, 'The email address is mandatory!'],
        unique: [true, `The chosen email already exists! Please select another one!`]
    },
    password: {
        type: String,
        required: [true, 'The password is mandatory!']
    }
});

module.exports = mongoose.model("Users", userSchema);
