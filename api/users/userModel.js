const db = require('../../data/dbConfig');

module.exports = {
    addUser,
    getById,
    getByUsername,
    getUsers
}

function getUsers() {
    return db('users');
}

function addUser(user) {
    return db('users')
        .insert(user, 'id')
        .then(id => {
            return getById(id[0]);
        })
}

function getById(id) {
    return db('users')
        .where({ id })
        .first();
}

function getByUsername(username) {
    return db('users')
        .where({ username })
        .first();
}