const secrets = require('../config/secrets');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : secrets.host,
    user     : secrets.user,
    password : secrets.password,
    database : secrets.db,
    charset  : secrets.charset
  }
});

module.exports = require('bookshelf')(knex);
