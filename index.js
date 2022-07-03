const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const package = require('./package.json');
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// setup client
//var Client = require('node-rest-client').Client;
//var client = new Client();

var fs = require('fs');
var arrayPath = './database/db.json';

function fsReadFileSynchToArray("/database") {
  var data = JSON.parse(fs.readFileSync("/database"));
  console.log(data);
  return data;
}

var test  = arr.loadFile(arrayPath);
console.log(test);

// client.get
