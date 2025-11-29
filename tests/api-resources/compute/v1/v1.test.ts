// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Prism tests are disabled
  test.skip('deploy: only required params', async () => {
    const responsePromise = client.compute.v1.deploy({ entrypointName: 'entrypointName', type: 'task' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deploy: required and optional params', async () => {
    const response = await client.compute.v1.deploy({
      entrypointName: 'entrypointName',
      type: 'task',
      code: 'code',
      config: {
        addPython: 'addPython',
        allowNetwork: true,
        cmd: ['string'],
        concurrency: 0,
        cpuCount: 0,
        cronSchedule: 'cronSchedule',
        dependencies: ['string'],
        entrypoint: ['string'],
        env: { foo: 'string' },
        gpuCount: 0,
        gpuType: 'cpu',
        isWebService: true,
        memoryMb: 0,
        pipInstall: ['string'],
        port: 0,
        pythonVersion: 'pythonVersion',
        retries: 0,
        secretGroups: ['string'],
        timeoutSeconds: 0,
        useUv: true,
        warmInstances: 0,
        workdir: 'workdir',
      },
      dockerfile: 'dockerfile',
      entrypointFile: 'entrypointFile',
      environment: 'environment',
      image: 'image',
      runtime: 'python',
    });
  });

  // Prism tests are disabled
  test.skip('getPricing', async () => {
    const responsePromise = client.compute.v1.getPricing();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getUsage', async () => {
    const responsePromise = client.compute.v1.getUsage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getUsage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.compute.v1.getUsage({ month: 3, year: 2024 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Casedev.NotFoundError);
  });
});
