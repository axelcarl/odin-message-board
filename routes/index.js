var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('new')
});

router.post('/new', function(req, res, next) {
  const newMessage = {};
  newMessage.text = req.body.message;
  newMessage.user = req.body.user;
  newMessage.added = new Date();
  console.log(newMessage)
  messages.push(newMessage)
  res.redirect('/')
})

module.exports = router;
