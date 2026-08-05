// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  test('syncLink: only required params', async () => {
    const responsePromise = client.connectors.v1.syncLink({
      connection_id: 'connection_id',
      direction: 'import',
      remote: { folder_id: 'folder_id' },
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

  test('syncLink: required and optional params', async () => {
    const response = await client.connectors.v1.syncLink({
      connection_id: 'connection_id',
      direction: 'import',
      remote: {
        folder_id: 'folder_id',
        container_id: 'container_id',
        path: 'path',
        site_id: 'site_id',
      },
      vault_id: 'vault_id',
      matter_id: 'matter_id',
      policy: {
        collisions: 'version',
        deletes: 'mirror',
        filters: { exclude_mime: ['string'], max_size_bytes: 0 },
      },
    });
  });

  test('transfer: only required params', async () => {
    const responsePromise = client.connectors.v1.transfer({
      connection_id: 'connection_id',
      direction: 'import',
      remote: { folder_id: 'folder_id' },
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

  test('transfer: required and optional params', async () => {
    const response = await client.connectors.v1.transfer({
      connection_id: 'connection_id',
      direction: 'import',
      remote: {
        folder_id: 'folder_id',
        container_id: 'container_id',
        path: 'path',
        site_id: 'site_id',
      },
      vault_id: 'vault_id',
      matter_id: 'matter_id',
      policy: {
        collisions: 'version',
        deletes: 'mirror',
        filters: { exclude_mime: ['string'], max_size_bytes: 0 },
      },
      run_mode: 'auto',
    });
  });
});
