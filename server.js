var express = require('express');
var app = express();

app.get('/', function(req, res){
  console.log('GET request received')
  res.send('Hello World');
});

app.post('/', function(req, res){
  console.log('POST request received');
  res.send('Hello POST');
});

app.delete('/del_user', function(req, res){
  cosole.log('delete request received');
  res.send('Hello DELETE');
});

app.get('/list_user', function(req, res){
  console.log('GET request to /list_user site received')
  res.send('User list site');
});

app.get('/ab*cd', function(req, res){
  console.log('GET request to /ab*cd site received')
  res.send('pattern fits');
});

app.listen(3000);

app.use(function(req, res, next){
  res.status(404).send("Sorry we couldn't find what you are looking for");
});
