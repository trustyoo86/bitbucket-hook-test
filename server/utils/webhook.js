'use strict';

const axios = require('axios');

function sendWebhook(webhookUrl) {
  axios({
    type: 'post',
    url: webhookUrl,
  });
}

function makeContext(contextId) {
  return {
    context: contextId,
  };
}

module.exports = {
  makeContext,
  sendWebhook,
}
