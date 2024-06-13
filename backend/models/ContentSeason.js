const knex = require('../config/db')

const table = 'content_seasons';

module.exports = () => knex(table);