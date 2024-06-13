const knex = require('../config/db')

const table = 'contents';

module.exports = () => knex(table);