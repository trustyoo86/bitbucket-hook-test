'use strict';

const http = require('http');
const exec = require('child_process').exec;
const express = require('express');

const app = express();

http.createServer(app, (req, res) => {
  if (req.method === 'POST') {
    console.log('POST received!', req);
  }
});