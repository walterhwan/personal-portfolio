const express = require('express');
const app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
