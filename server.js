'use strict';

const http = require('http');
const exec = require('child_process').exec;

http.createServer((req, res) => {
  if (req.method === 'POST') {
    console.log('POST received!', req);
  }
});