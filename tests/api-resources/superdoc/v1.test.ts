// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Mock server doesn't support application/pdf responses
  test.skip('annotate: required and optional params', async () => {
    const response = await client.superdoc.v1.annotate({
      document: { base64: 'base64', url: 'url' },
      fields: [
        {
          type: 'text',
          value: 'string',
          id: 'id',
          group: 'group',
          options: { height: 0, width: 0 },
        },
      ],
      output_format: 'docx',
    });
  });

  // Mock server doesn't support application/pdf responses
  test.skip('convert: required and optional params', async () => {
    const response = await client.superdoc.v1.convert({
      from: 'docx',
      document_base64: 'document_base64',
      document_url: 'document_url',
      to: 'pdf',
    });
  });
});
