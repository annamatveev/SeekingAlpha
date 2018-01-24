var user = require('../controller/user');
var relationship = require('../controller/relationship');
var group = require('../controller/group');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', user.getUsersInfo);
router.get('/relationships', relationship.getAllRelationships);
router.get('/groups', group.getAllGroups);

module.exports = router;
