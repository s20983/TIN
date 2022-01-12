// a) Handle route /hello by returning a simple “hello world” message
var express = require('express');
var router = express.Router();

router.get('/', function(req, rest) {
  res.send('hello world');
});

module.exports = router;
