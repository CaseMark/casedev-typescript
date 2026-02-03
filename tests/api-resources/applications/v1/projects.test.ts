// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.applications.v1.projects.create({ gitRepo: 'gitRepo', name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.applications.v1.projects.create({
      gitRepo: 'gitRepo',
      name: 'name',
      buildCommand: 'buildCommand',
      environmentVariables: [
        {
          key: 'key',
          target: ['production'],
          value: 'value',
          type: 'plain',
        },
      ],
      framework: 'framework',
      gitBranch: 'gitBranch',
      installCommand: 'installCommand',
      outputDirectory: 'outputDirectory',
      rootDirectory: 'rootDirectory',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.applications.v1.projects.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.applications.v1.projects.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.applications.v1.projects.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.v1.projects.delete(
        'id',
        { deleteFromHosting: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createDeployment', async () => {
    const responsePromise = client.applications.v1.projects.createDeployment('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createDeployment: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.v1.projects.createDeployment(
        'id',
        {
          environmentVariables: [
            {
              key: 'key',
              target: ['production'],
              value: 'value',
              type: 'plain',
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createDomain: only required params', async () => {
    const responsePromise = client.applications.v1.projects.createDomain('id', { domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createDomain: required and optional params', async () => {
    const response = await client.applications.v1.projects.createDomain('id', {
      domain: 'domain',
      gitBranch: 'gitBranch',
    });
  });

  // Prism tests are disabled
  test.skip('createEnv: only required params', async () => {
    const responsePromise = client.applications.v1.projects.createEnv('id', {
      key: 'key',
      target: ['production'],
      value: 'value',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createEnv: required and optional params', async () => {
    const response = await client.applications.v1.projects.createEnv('id', {
      key: 'key',
      target: ['production'],
      value: 'value',
      gitBranch: 'gitBranch',
      type: 'plain',
    });
  });

  // Prism tests are disabled
  test.skip('deleteDomain: only required params', async () => {
    const responsePromise = client.applications.v1.projects.deleteDomain('domain', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteDomain: required and optional params', async () => {
    const response = await client.applications.v1.projects.deleteDomain('domain', { id: 'id' });
  });

  // Prism tests are disabled
  test.skip('deleteEnv: only required params', async () => {
    const responsePromise = client.applications.v1.projects.deleteEnv('envId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteEnv: required and optional params', async () => {
    const response = await client.applications.v1.projects.deleteEnv('envId', { id: 'id' });
  });

  // Prism tests are disabled
  test.skip('getRuntimeLogs', async () => {
    const responsePromise = client.applications.v1.projects.getRuntimeLogs('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRuntimeLogs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.v1.projects.getRuntimeLogs(
        'id',
        { limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listDeployments', async () => {
    const responsePromise = client.applications.v1.projects.listDeployments('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listDeployments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.v1.projects.listDeployments(
        'id',
        {
          limit: 0,
          state: 'state',
          target: 'production',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listDomains', async () => {
    const responsePromise = client.applications.v1.projects.listDomains('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listEnv', async () => {
    const responsePromise = client.applications.v1.projects.listEnv('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listEnv: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.v1.projects.listEnv('id', { decrypt: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Casedev.NotFoundError);
  });
});
