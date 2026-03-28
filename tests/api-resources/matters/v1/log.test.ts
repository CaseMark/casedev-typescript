// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource log', () => {
  test('create: only required params', async () => {
    const responsePromise = client.matters.v1.log.create('id', { summary: 'summary' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.matters.v1.log.create('id', {
      summary: 'summary',
      details: { foo: 'bar' },
      event_type: 'event_type',
      work_item_id: 'work_item_id',
    });
  });

  test('list', async () => {
    const responsePromise = client.matters.v1.log.list('id');
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
      client.matters.v1.log.list(
        'id',
        {
          actor_id: 'actor_id',
          actor_type: 'actor_type',
          end_time: '2019-12-27T18:11:19.117Z',
          event_type: 'event_type',
          limit: 200,
          offset: 0,
          scope: 'string',
          start_time: '2019-12-27T18:11:19.117Z',
          work_item_id: 'work_item_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  test('export', async () => {
    const responsePromise = client.matters.v1.log.export('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.matters.v1.log.export(
        'id',
        {
          actor_id: 'actor_id',
          actor_type: 'actor_type',
          end_time: '2019-12-27T18:11:19.117Z',
          event_type: 'event_type',
          format: 'json',
          scope: 'string',
          start_time: '2019-12-27T18:11:19.117Z',
          work_item_id: 'work_item_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });
});
