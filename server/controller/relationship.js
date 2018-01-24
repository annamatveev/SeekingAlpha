var Relationship = require('../models/relationship');

var getAllRelationships = function (req, res) {
  new Relationship().fetchAll()
    .then(function (relationships) {
      res.json(relationships);
    }).catch(function (error) {
    console.log(error);
    res.send('An error occured');
  });
};

module.exports = {
  getAllRelationships: getAllRelationships,
};
