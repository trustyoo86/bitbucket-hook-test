'use strict';

// dependencies
const { IncomingWebhook } = require('ms-teams-webhook');

// modules
const urls = require('./urls');

class Development {
  constructor() {
    this.webhook = new IncomingWebhook(urls['development']);
  }

  async send(body) {
    const { title, destination, state } = body;

    const { repository } = destination;

    await this.webhook.send(JSON.stringify({
      '@type': 'Test',
      '@context': 'https://schema.org/extensions',
      'summary': 'test!!!',
      'themeColor': '0078D7',
      title: `${state}`,
      'sections': [
        {
          'activityTitle': title,
          'activitySubtitle': new Date(body.update_on),
          'text': 'test text!!!',
        },
      ],
    }));
  }
}

module.exports = Development;
