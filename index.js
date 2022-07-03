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
// configure routes
const router = express.router();
router.get('/', (req, res) => {
  '${package.description} - v${package.version}'); 
});
