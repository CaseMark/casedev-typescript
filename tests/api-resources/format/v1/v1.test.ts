// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  test('createDocument: required and optional params', async () => {
    const response = await client.format.v1.createDocument({
      content: 'content',
      output_format: 'pdf',
      input_format: 'md',
      options: {
        components: [
          {
            content: 'content',
            styles: {},
            templateId: 'templateId',
            variables: {},
          },
        ],
      },
    });
  });
});
