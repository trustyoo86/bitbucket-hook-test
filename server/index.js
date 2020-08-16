'use strict';

const http = require('http');
const exec = require('child_process').exec;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/hook', (req, res) => {
  const { body } = req;
  console.log('request body =>', body);
  const { pullrequest } = body;
  res.send({ msg: 'success' });
});

app.listen(3000, () => {
  console.log('hook server listen in 80');
});
