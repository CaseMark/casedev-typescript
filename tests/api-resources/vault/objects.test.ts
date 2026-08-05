// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource objects', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.vault.objects.retrieve('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.vault.objects.retrieve('objectId', { id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.vault.objects.update('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.vault.objects.update('objectId', {
      id: 'id',
      filename: 'deposition-smith-2024.pdf',
      metadata: {},
      path: '/Discovery/Depositions',
    });
  });

  test('list', async () => {
    const responsePromise = client.vault.objects.list('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vault.objects.list('id', { includeUnconfirmed: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.vault.objects.delete('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.vault.objects.delete('objectId', { id: 'id', force: 'true' });
  });

  test('append: only required params', async () => {
    const responsePromise = client.vault.objects.append('objectId', {
      id: 'id',
      appendObjectIds: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('append: required and optional params', async () => {
    const response = await client.vault.objects.append('objectId', {
      id: 'id',
      appendObjectIds: ['string'],
      backLinks: true,
      backLinksText: 'backLinksText',
      bates: {
        enabled: true,
        padTo: 0,
        prefix: 'prefix',
        start: 1,
        suffix: 'suffix',
      },
      rewriteLinks: true,
    });
  });

  test('createPresignedURL: only required params', async () => {
    const responsePromise = client.vault.objects.createPresignedURL('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createPresignedURL: required and optional params', async () => {
    const response = await client.vault.objects.createPresignedURL('objectId', {
      id: 'id',
      contentType: 'contentType',
      expiresIn: 60,
      operation: 'GET',
      sizeBytes: 1,
    });
  });

  test('download: required and optional params', async () => {
    const response = await client.vault.objects.download('objectId', { id: 'id' });
  });

  test('getChunks: only required params', async () => {
    const responsePromise = client.vault.objects.getChunks('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getChunks: required and optional params', async () => {
    const response = await client.vault.objects.getChunks('objectId', {
      id: 'id',
      end: 0,
      start: 0,
    });
  });

  test('getOcrWords: only required params', async () => {
    const responsePromise = client.vault.objects.getOcrWords('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getOcrWords: required and optional params', async () => {
    const response = await client.vault.objects.getOcrWords('objectId', {
      id: 'id',
      page: 0,
      wordEnd: 0,
      wordStart: 0,
    });
  });

  test('getPages: only required params', async () => {
    const responsePromise = client.vault.objects.getPages('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPages: required and optional params', async () => {
    const response = await client.vault.objects.getPages('objectId', {
      id: 'id',
      end: 0,
      start: 0,
    });
  });

  test('getText: only required params', async () => {
    const responsePromise = client.vault.objects.getText('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getText: required and optional params', async () => {
    const response = await client.vault.objects.getText('objectId', { id: 'id' });
  });

  test('merge: only required params', async () => {
    const responsePromise = client.vault.objects.merge('id', {
      filename: 'filename',
      sourceObjectIds: ['string'],
      sourceRendition: 'original',
      'Idempotency-Key': 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('merge: required and optional params', async () => {
    const response = await client.vault.objects.merge('id', {
      filename: 'filename',
      sourceObjectIds: ['string'],
      sourceRendition: 'original',
      'Idempotency-Key': 'x',
      bates: {
        padTo: 0,
        prefix: 'prefix',
        start: 1,
        suffix: 'suffix',
      },
      clientReference: 'clientReference',
    });
  });
});
