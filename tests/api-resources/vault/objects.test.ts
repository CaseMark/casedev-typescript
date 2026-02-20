// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource objects', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.vault.objects.retrieve('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.vault.objects.retrieve('objectId', { id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.vault.objects.update('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.vault.objects.update('objectId', {
      id: 'id',
      filename: 'deposition-smith-2024.pdf',
      metadata: {},
      path: '/Discovery/Depositions',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.vault.objects.list('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.vault.objects.delete('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.vault.objects.delete('objectId', { id: 'id', force: 'true' });
  });

  // Mock server tests are disabled
  test.skip('createPresignedURL: only required params', async () => {
    const responsePromise = client.vault.objects.createPresignedURL('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createPresignedURL: required and optional params', async () => {
    const response = await client.vault.objects.createPresignedURL('objectId', {
      id: 'id',
      contentType: 'contentType',
      expiresIn: 60,
      operation: 'GET',
      sizeBytes: 1,
    });
  });

  // Mock server tests are disabled
  test.skip('download: only required params', async () => {
    const responsePromise = client.vault.objects.download('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('download: required and optional params', async () => {
    const response = await client.vault.objects.download('objectId', { id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('getOcrWords: only required params', async () => {
    const responsePromise = client.vault.objects.getOcrWords('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getOcrWords: required and optional params', async () => {
    const response = await client.vault.objects.getOcrWords('objectId', {
      id: 'id',
      page: 0,
      wordEnd: 0,
      wordStart: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getSummarizeJob: only required params', async () => {
    const responsePromise = client.vault.objects.getSummarizeJob('jobId', { id: 'id', objectId: 'objectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSummarizeJob: required and optional params', async () => {
    const response = await client.vault.objects.getSummarizeJob('jobId', { id: 'id', objectId: 'objectId' });
  });

  // Mock server tests are disabled
  test.skip('getText: only required params', async () => {
    const responsePromise = client.vault.objects.getText('objectId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getText: required and optional params', async () => {
    const response = await client.vault.objects.getText('objectId', { id: 'id' });
  });
});
