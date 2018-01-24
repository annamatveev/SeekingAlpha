var User = require('../models/user');

var getUsersInfo = function (req, res) {
  new User().fetchAll({
    withRelated: ['following', 'followers', 'groups']
  })
    .then(function (users) {
      var normalizedUsers = JSON.parse(JSON.stringify(users));
      normalizedUsers = normalizedUsers.map(function(user) {
        let group = user.groups.name;
        let followers = user.followers.map(item => item.id_one);
        let following = user.following.id_two;
        
        return {
          id: user.id,
          name: user.name,
          group,
          followers,
          following
        }
      });

      res.json(normalizedUsers);
    }).catch(function (error) {
    console.log(error);
    res.send('An error occurred');
  });
};

module.exports = {
  getUsersInfo: getUsersInfo,
};
