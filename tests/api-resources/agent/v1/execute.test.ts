// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource execute', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agent.v1.execute.create({ prompt: 'prompt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.agent.v1.execute.create({
      prompt: 'prompt',
      disabledTools: ['string'],
      enabledTools: ['string'],
      guidance: 'guidance',
      instructions: 'instructions',
      model: 'model',
      objectIds: ['string'],
      sandbox: { cpu: 0, memoryMiB: 0 },
      vaultIds: ['string'],
    });
  });
});
