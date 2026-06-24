// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource multipart', () => {
  test('abort: only required params', async () => {
    const responsePromise = client.vault.multipart.abort('id', {
      objectId: 'objectId',
      uploadId: 'uploadId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('abort: required and optional params', async () => {
    const response = await client.vault.multipart.abort('id', { objectId: 'objectId', uploadId: 'uploadId' });
  });

  test('complete: only required params', async () => {
    const responsePromise = client.vault.multipart.complete('id', {
      objectId: 'objectId',
      parts: [{ etag: 'etag', partNumber: 1 }],
      sizeBytes: 1,
      uploadId: 'uploadId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete: required and optional params', async () => {
    const response = await client.vault.multipart.complete('id', {
      objectId: 'objectId',
      parts: [{ etag: 'etag', partNumber: 1 }],
      sizeBytes: 1,
      uploadId: 'uploadId',
    });
  });

  test('getPartURLs: only required params', async () => {
    const responsePromise = client.vault.multipart.getPartURLs('id', {
      objectId: 'objectId',
      parts: [{ partNumber: 1, sizeBytes: 1 }],
      uploadId: 'uploadId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPartURLs: required and optional params', async () => {
    const response = await client.vault.multipart.getPartURLs('id', {
      objectId: 'objectId',
      parts: [{ partNumber: 1, sizeBytes: 1 }],
      uploadId: 'uploadId',
    });
  });

  test('init: only required params', async () => {
    const responsePromise = client.vault.multipart.init('id', {
      contentType: 'contentType',
      filename: 'filename',
      sizeBytes: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('init: required and optional params', async () => {
    const response = await client.vault.multipart.init('id', {
      contentType: 'contentType',
      filename: 'filename',
      sizeBytes: 1,
      auto_index: true,
      is_ai_generated: true,
      metadata: {},
      partSizeBytes: 5242880,
      path: 'path',
    });
  });
});
