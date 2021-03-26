var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile('/index.html');
});

app.get('*', function(req, res){
  res.sendFile('/404.html');
});
