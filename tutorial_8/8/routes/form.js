// b) Handle route /form by displaying a HTML form containing at least 3 fields, this form should submit its contents using post method to the /formdata route
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  //send html as response
  res.render('form', {title: 'Form', message: 'This is a form'});
});

router.post('/formdata', function(req, res) {
  res.send('form');
});

module.exports = router;
