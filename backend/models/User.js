const knex = require('../config/db')

const table = 'users';

module.exports = knex(table);