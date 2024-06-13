const knex = require('../config/db')

const table = 'categories';

module.exports = () => knex(table);