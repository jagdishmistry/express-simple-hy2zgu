const express = require('express');
const app = express();
const port = 3012;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/server.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
