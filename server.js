'use strict';

const http = require('http');
const exec = require('child_process').exec;
const express = require('express');

const app = express();

app.post('/hook', (req, res) => {
  console.log('req', req);
  res.send({ msg: 'success' });
});

app.listen(80, () => {
  console.log('hook server listen in 80');
});