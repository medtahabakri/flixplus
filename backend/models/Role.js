const knex = require('../config/db')

const table = 'roles';

module.exports = () => knex(table);