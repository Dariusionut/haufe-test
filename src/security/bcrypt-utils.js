const Bcrypt = require("bcrypt");

module.exports = Encrypt = {

    cryptPassword: (password) =>
        Bcrypt.genSalt(10)
            .then((salt => Bcrypt.hash(password, salt)))
            .then(hash => hash),

    comparePassword: (password, hashPassword) =>
        Bcrypt.compare(password, hashPassword)
            .then(resp => resp)

}
