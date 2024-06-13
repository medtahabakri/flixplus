const knex = require('../config/db')

const table = 'content_medias';

module.exports = () => knex(table);