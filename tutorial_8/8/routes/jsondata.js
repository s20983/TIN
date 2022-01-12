// d) Handle /jsondata route by accepting data in json format (use curl or some other tool to test it) and displaying the data in some reasonably formatted HTML using chosen template engine. Structure of the data is up to you, but have at least 3 fields in your JSON
var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  res.render('json', req.body);
});

module.exports = router;
