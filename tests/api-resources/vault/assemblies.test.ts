// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assemblies', () => {
  test('create: only required params', async () => {
    const responsePromise = client.vault.assemblies.create('id', {
      sources: [{ objectId: 'objectId' }],
      volumes: [
        {
          filename: 'filename',
          pages: [
            {
              end: 1,
              source: 0,
              start: 1,
            },
          ],
        },
      ],
      'Idempotency-Key': 'x',
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
    const response = await client.vault.assemblies.create('id', {
      sources: [{ objectId: 'objectId', rendition: 'searchable_pdf' }],
      volumes: [
        {
          filename: 'filename',
          pages: [
            {
              end: 1,
              source: 0,
              start: 1,
              bates: true,
            },
          ],
          bates: {
            fontSize: 6,
            legend: 'legend',
            marginBottom: 0,
            marginSide: 0,
            padTo: 0,
            position: 'bottom_right',
            prefix: 'prefix',
            shrink: true,
            start: 1,
            suffix: 'suffix',
          },
          contents: { depth: 1, title: 'title' },
          outline: [
            {
              page: 1,
              title: 'title',
              children: [{}],
            },
          ],
          title: 'title',
        },
      ],
      'Idempotency-Key': 'x',
      bates: {
        fontSize: 6,
        legend: 'legend',
        marginBottom: 0,
        marginSide: 0,
        padTo: 0,
        position: 'bottom_right',
        prefix: 'prefix',
        shrink: true,
        start: 1,
        suffix: 'suffix',
      },
      clientReference: 'clientReference',
      compression: {
        bitonal: true,
        cleanScans: true,
        encoding: 'jpeg2000',
        maxDpi: 72,
        quality: 'high',
      },
      linearize: true,
      pageSize: 'letter',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.vault.assemblies.retrieve('assemblyId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.vault.assemblies.retrieve('assemblyId', { id: 'id' });
  });
});
