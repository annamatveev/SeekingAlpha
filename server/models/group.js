var bookshelf  = require('../db/connection');

module.exports = bookshelf.Model.extend({
  
  tableName: 'groups'
  
});
