require('dotenv').config();
var express = require('express');

var port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {
      name: 'AAA'
    });
  });

  app.listen(port, '0.0.0.0', function() {
    console.log('Server listening on port ' + port);
  });