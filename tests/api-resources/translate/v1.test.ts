// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  test('detect: only required params', async () => {
    const responsePromise = client.translate.v1.detect({ q: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('detect: required and optional params', async () => {
    const response = await client.translate.v1.detect({ q: 'string' });
  });

  test('listLanguages', async () => {
    const responsePromise = client.translate.v1.listLanguages();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listLanguages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.translate.v1.listLanguages(
        { model: 'nmt', target: 'target' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  test('translate: only required params', async () => {
    const responsePromise = client.translate.v1.translate({ q: 'string', target: 'es' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('translate: required and optional params', async () => {
    const response = await client.translate.v1.translate({
      q: 'string',
      target: 'es',
      format: 'text',
      model: 'nmt',
      source: 'en',
    });
  });
});
