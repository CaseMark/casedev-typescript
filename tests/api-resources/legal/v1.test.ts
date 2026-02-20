// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  test('find: only required params', async () => {
    const responsePromise = client.legal.v1.find({ query: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('find: required and optional params', async () => {
    const response = await client.legal.v1.find({
      query: 'xxx',
      jurisdiction: 'jurisdiction',
      numResults: 1,
    });
  });

  test('getCitations: only required params', async () => {
    const responsePromise = client.legal.v1.getCitations({ text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getCitations: required and optional params', async () => {
    const response = await client.legal.v1.getCitations({ text: 'text' });
  });

  test('getCitationsFromURL: only required params', async () => {
    const responsePromise = client.legal.v1.getCitationsFromURL({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getCitationsFromURL: required and optional params', async () => {
    const response = await client.legal.v1.getCitationsFromURL({ url: 'https://example.com' });
  });

  test('getFullText: only required params', async () => {
    const responsePromise = client.legal.v1.getFullText({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getFullText: required and optional params', async () => {
    const response = await client.legal.v1.getFullText({
      url: 'https://example.com',
      highlightQuery: 'highlightQuery',
      maxCharacters: 1000,
      summaryQuery: 'summaryQuery',
    });
  });

  test('listJurisdictions: only required params', async () => {
    const responsePromise = client.legal.v1.listJurisdictions({ name: 'xx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listJurisdictions: required and optional params', async () => {
    const response = await client.legal.v1.listJurisdictions({ name: 'xx' });
  });

  test('patentSearch: only required params', async () => {
    const responsePromise = client.legal.v1.patentSearch({ query: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('patentSearch: required and optional params', async () => {
    const response = await client.legal.v1.patentSearch({
      query: 'x',
      applicationStatus: 'applicationStatus',
      applicationType: 'Utility',
      assignee: 'assignee',
      filingDateFrom: '2019-12-27',
      filingDateTo: '2019-12-27',
      grantDateFrom: '2019-12-27',
      grantDateTo: '2019-12-27',
      inventor: 'inventor',
      limit: 1,
      offset: 0,
      sortBy: 'filingDate',
      sortOrder: 'asc',
    });
  });

  test('research: only required params', async () => {
    const responsePromise = client.legal.v1.research({ query: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('research: required and optional params', async () => {
    const response = await client.legal.v1.research({
      query: 'xxx',
      additionalQueries: ['string'],
      jurisdiction: 'jurisdiction',
      numResults: 1,
    });
  });

  test('similar: only required params', async () => {
    const responsePromise = client.legal.v1.similar({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('similar: required and optional params', async () => {
    const response = await client.legal.v1.similar({
      url: 'https://example.com',
      jurisdiction: 'jurisdiction',
      numResults: 1,
      startPublishedDate: '2019-12-27',
    });
  });

  test('trademarkSearch', async () => {
    const responsePromise = client.legal.v1.trademarkSearch({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('verify: only required params', async () => {
    const responsePromise = client.legal.v1.verify({ text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('verify: required and optional params', async () => {
    const response = await client.legal.v1.verify({ text: 'text' });
  });
});
