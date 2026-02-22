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

  // Mock server doesn't support application/octet-stream responses
  test.skip('download: required and optional params', async () => {
    const response = await client.vault.objects.download('objectId', { id: 'id' });
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

  test('getSummarizeJob: only required params', async () => {
    const responsePromise = client.vault.objects.getSummarizeJob('jobId', { id: 'id', objectId: 'objectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSummarizeJob: required and optional params', async () => {
    const response = await client.vault.objects.getSummarizeJob('jobId', { id: 'id', objectId: 'objectId' });
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
});
