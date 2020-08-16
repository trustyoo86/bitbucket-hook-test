'use strict';

// dependencies
const { IncomingWebhook } = require('ms-teams-webhook');

// modules
const urls = require('./urls');

class Development() {
  constructor() {
    this.webhook = new IncomingWebhook(urls['development']);
  }

  async send() {
    await this.webhook.send(JSON.stringify({
      '@type': 'Test',
      '@context': 'https://schema.org/extensions',
      'summary': 'test!!!',
      'themeColor': '0078D7',
      'title': 'PR Open!!',
      'sections': [
        {
          'activityTitle': '테스트',
          'activitySubtitle': '2020-08-11 11:46pm',
          'text': 'test text!!!',
        },
      ],
    }));
  }
}
