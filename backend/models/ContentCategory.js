const knex = require('../config/db')

const table = 'content_categories';

module.exports = knex(table);