// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workItems', () => {
  test('create: only required params', async () => {
    const responsePromise = client.matters.v1.workItems.create('id', { title: 'title' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.matters.v1.workItems.create('id', {
      title: 'title',
      assignee_id: 'assignee_id',
      description: 'description',
      due_at: '2019-12-27T18:11:19.117Z',
      exit_criteria: ['string'],
      instructions: 'instructions',
      metadata: { foo: 'bar' },
      priority: 'low',
      type: 'task',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.matters.v1.workItems.retrieve('workItemId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.matters.v1.workItems.retrieve('workItemId', { id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.matters.v1.workItems.update('workItemId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.matters.v1.workItems.update('workItemId', {
      id: 'id',
      assignee_id: 'assignee_id',
      completed_at: '2019-12-27T18:11:19.117Z',
      description: 'description',
      due_at: '2019-12-27T18:11:19.117Z',
      exit_criteria: ['string'],
      instructions: 'instructions',
      metadata: { foo: 'bar' },
      priority: 'low',
      started_at: '2019-12-27T18:11:19.117Z',
      status: 'draft',
      title: 'title',
      type: 'task',
    });
  });

  test('list', async () => {
    const responsePromise = client.matters.v1.workItems.list('id');
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
      client.matters.v1.workItems.list(
        'id',
        { assignee_id: 'assignee_id', status: 'status' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  test('decide: only required params', async () => {
    const responsePromise = client.matters.v1.workItems.decide('workItemId', {
      id: 'id',
      decision: 'approve',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('decide: required and optional params', async () => {
    const response = await client.matters.v1.workItems.decide('workItemId', {
      id: 'id',
      decision: 'approve',
      agent_type_id: 'agent_type_id',
      metadata: { foo: 'bar' },
      reason: 'reason',
    });
  });

  test('listExecutions: only required params', async () => {
    const responsePromise = client.matters.v1.workItems.listExecutions('workItemId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listExecutions: required and optional params', async () => {
    const response = await client.matters.v1.workItems.listExecutions('workItemId', { id: 'id' });
  });
});
