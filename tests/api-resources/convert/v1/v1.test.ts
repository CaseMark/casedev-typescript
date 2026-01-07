// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Prism tests are disabled
  test.skip('process: only required params', async () => {
    const responsePromise = client.convert.v1.process({ input_url: 'https://example.com' });
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
    const response = await client.convert.v1.process({
      input_url: 'https://example.com',
      callback_url: 'https://example.com',
    });
  });

  // Prism tests are disabled
  test.skip('webhook: only required params', async () => {
    const responsePromise = client.convert.v1.webhook({ job_id: 'job_id', status: 'completed' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('webhook: required and optional params', async () => {
    const response = await client.convert.v1.webhook({
      job_id: 'job_id',
      status: 'completed',
      error: 'error',
      result: {
        duration_seconds: 0,
        file_size_bytes: 0,
        stored_filename: 'stored_filename',
      },
    });
  });
});
