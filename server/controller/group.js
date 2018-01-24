var Group = require('../models/Group');

var getAllGroups = function (req, res) {
  new Group().fetchAll()
    .then(function (groups) {
      res.json(groups);
    }).catch(function (error) {
    console.log(error);
    res.send('An error occured');
  });
};

var getUserGroups = function (req, res) {
  new Group().fetchAll()
    .then(function (groups) {
      res.json(groups);
    }).catch(function (error) {
    console.log(error);
    res.send('An error occured');
  });
};

module.exports = {
  getAllGroups: getAllGroups,
};
