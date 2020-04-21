const db = require('../../data/dbConfig');

module.exports = {
    addUser,
    getById,
    getUsers
}

const getUsers = () => {
    return db('users');
}

const addUser = user => {
    return db('users')
        .insert(user, 'id')
        .then(id => {
            return getById(id[0]);
        })
}

const getById = id => {
    return db('users')
        .where({ id })
        .first();
}