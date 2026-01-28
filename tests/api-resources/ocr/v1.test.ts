// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ocr.v1.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('download: only required params', async () => {
    const responsePromise = client.ocr.v1.download('text', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('download: required and optional params', async () => {
    const response = await client.ocr.v1.download('text', { id: 'id' });
  });

  // Prism tests are disabled
  test.skip('process: only required params', async () => {
    const responsePromise = client.ocr.v1.process({ document_url: 'https://example.com/contract.pdf' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('process: required and optional params', async () => {
    const response = await client.ocr.v1.process({
      document_url: 'https://example.com/contract.pdf',
      callback_url: 'https://your-app.com/webhooks/ocr-complete',
      document_id: 'contract-2024-001',
      engine: 'doctr',
      features: {
        embed: {},
        forms: { foo: 'bar' },
        tables: { format: 'csv' },
      },
      result_bucket: 'my-ocr-results',
      result_prefix: 'ocr/2024/',
    });
  });
});
