var express = require('express');
var app = express();


app.get('/test', function (req, res) {
  res.header('content-type', 'text/plain');
  res.header('test',1);
  res.send('Ciao');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});