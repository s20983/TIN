// c) Handle / formdata route by accepting form data and display the form contents in some reasonably formatted HTML using chosen template engine
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('formdata', req.body);
});

module.exports = router;
