var express = require('express');
var router = express.Router();

var tweets = [];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Twitter', tweets : tweets });
});

router.post('/', function(req, res, next) {
   tweets.unshift({body: req.body.tweet, timestamp: new Date().getTime()});
   res.redirect('/')
   
});



module.exports = router;




