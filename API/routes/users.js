var express = require('express');
var router = express.Router();
const users = require("../controllers/user.controller.js")
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("TEST 2")
  res.setHeader('Content-Type','application/json')
  console.log(users.findAll(req, res))
  //res.send(person);
});


module.exports = router;
