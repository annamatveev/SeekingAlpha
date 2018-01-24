var bookshelf  = require('../db/connection');
var Relationship = require('../models/relationship');
var Group = require('../models/group');

module.exports = bookshelf.Model.extend({
  tableName: 'users',
  groups: function() {
    return this.belongsTo(Group,'group_id', 'id');
  },
  followers: function() {
    return this.hasMany(Relationship, 'id_two', 'id');
  },
  following: function() {
  return this.hasOne(Relationship, 'id_one', 'id');
}
});
