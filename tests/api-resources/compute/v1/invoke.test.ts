// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoke', () => {
  // Prism tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.compute.v1.invoke.run('func_abc123 or document-analyzer', {
      input: { foo: 'bar' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('run: required and optional params', async () => {
    const response = await client.compute.v1.invoke.run('func_abc123 or document-analyzer', {
      input: { foo: 'bar' },
      async: true,
      functionSuffix: '_modal',
    });
  });
});
