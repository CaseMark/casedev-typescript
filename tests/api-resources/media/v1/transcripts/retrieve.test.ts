// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource retrieve', () => {
  test('create: only required params', async () => {
    const responsePromise = client.media.v1.transcripts.retrieve.create({
      object_id: 'object_id',
      vault_id: 'vault_id',
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
    const response = await client.media.v1.transcripts.retrieve.create({
      object_id: 'object_id',
      vault_id: 'vault_id',
      transcript: { object_id: 'object_id', vault_id: 'vault_id' },
    });
  });
});
