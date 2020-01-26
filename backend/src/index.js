const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./route/index.js')(app);

app.use('*', (req, res) => {
  res.status(404);
  res.send();
});

app.listen(80);
