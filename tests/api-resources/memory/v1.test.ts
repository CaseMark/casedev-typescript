// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  test('create: only required params', async () => {
    const responsePromise = client.memory.v1.create({ messages: [{ content: 'content', role: 'user' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.memory.v1.create({
      messages: [{ content: 'content', role: 'user' }],
      category: 'category',
      extraction_prompt: 'extraction_prompt',
      infer: true,
      metadata: { foo: 'bar' },
      tag_1: 'tag_1',
      tag_10: 'tag_10',
      tag_11: 'tag_11',
      tag_12: 'tag_12',
      tag_2: 'tag_2',
      tag_3: 'tag_3',
      tag_4: 'tag_4',
      tag_5: 'tag_5',
      tag_6: 'tag_6',
      tag_7: 'tag_7',
      tag_8: 'tag_8',
      tag_9: 'tag_9',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.memory.v1.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.memory.v1.list();
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
      client.memory.v1.list(
        {
          category: 'category',
          limit: 0,
          offset: 0,
          tag_1: 'tag_1',
          tag_10: 'tag_10',
          tag_11: 'tag_11',
          tag_12: 'tag_12',
          tag_2: 'tag_2',
          tag_3: 'tag_3',
          tag_4: 'tag_4',
          tag_5: 'tag_5',
          tag_6: 'tag_6',
          tag_7: 'tag_7',
          tag_8: 'tag_8',
          tag_9: 'tag_9',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.memory.v1.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteAll', async () => {
    const responsePromise = client.memory.v1.deleteAll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteAll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.memory.v1.deleteAll(
        {
          tag_1: 'tag_1',
          tag_10: 'tag_10',
          tag_11: 'tag_11',
          tag_12: 'tag_12',
          tag_2: 'tag_2',
          tag_3: 'tag_3',
          tag_4: 'tag_4',
          tag_5: 'tag_5',
          tag_6: 'tag_6',
          tag_7: 'tag_7',
          tag_8: 'tag_8',
          tag_9: 'tag_9',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  test('search: only required params', async () => {
    const responsePromise = client.memory.v1.search({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.memory.v1.search({
      query: 'query',
      category: 'category',
      tag_1: 'tag_1',
      tag_10: 'tag_10',
      tag_11: 'tag_11',
      tag_12: 'tag_12',
      tag_2: 'tag_2',
      tag_3: 'tag_3',
      tag_4: 'tag_4',
      tag_5: 'tag_5',
      tag_6: 'tag_6',
      tag_7: 'tag_7',
      tag_8: 'tag_8',
      tag_9: 'tag_9',
      top_k: 1,
    });
  });
});
