// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource matterParties', () => {
  test('create: only required params', async () => {
    const responsePromise = client.matters.v1.matterParties.create('id', {
      party_id: 'party_id',
      role: 'client',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.matters.v1.matterParties.create('id', {
      party_id: 'party_id',
      role: 'client',
      custom_fields: { foo: 'bar' },
      is_primary: true,
      metadata: { foo: 'bar' },
      notes: 'notes',
      set_as_client: true,
    });
  });

  test('list', async () => {
    const responsePromise = client.matters.v1.matterParties.list('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
