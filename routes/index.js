var express = require('express');
var router = express.Router();



const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toDateString()
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date().toDateString()
  }
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});


/*GET new form */
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini Messageboard', messages: messages });
});







router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.authorName, added: new Date().toDateString()});
  res.redirect('/');
});

module.exports = router;
