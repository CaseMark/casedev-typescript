// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Prism tests are disabled
  test.skip('answer: only required params', async () => {
    const responsePromise = client.search.v1.answer({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('answer: required and optional params', async () => {
    const response = await client.search.v1.answer({
      query: 'query',
      excludeDomains: ['string'],
      includeDomains: ['string'],
      maxTokens: 0,
      model: 'model',
      numResults: 1,
      searchType: 'auto',
      stream: true,
      temperature: 0,
      text: true,
      useCustomLLM: true,
    });
  });

  // Prism tests are disabled
  test.skip('contents: only required params', async () => {
    const responsePromise = client.search.v1.contents({ urls: ['https://example.com'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('contents: required and optional params', async () => {
    const response = await client.search.v1.contents({
      urls: ['https://example.com'],
      context: 'context',
      extras: {},
      highlights: true,
      livecrawl: true,
      livecrawlTimeout: 0,
      subpages: true,
      subpageTarget: 0,
      summary: true,
      text: true,
    });
  });

  // Prism tests are disabled
  test.skip('research: only required params', async () => {
    const responsePromise = client.search.v1.research({ instructions: 'instructions' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('research: required and optional params', async () => {
    const response = await client.search.v1.research({
      instructions: 'instructions',
      model: 'fast',
      outputSchema: {},
      query: 'query',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveResearch', async () => {
    const responsePromise = client.search.v1.retrieveResearch('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveResearch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.search.v1.retrieveResearch(
        'id',
        { events: 'events', stream: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.search.v1.search({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.search.v1.search({
      query: 'query',
      additionalQueries: ['string'],
      category: 'category',
      contents: 'contents',
      endCrawlDate: '2019-12-27',
      endPublishedDate: '2019-12-27',
      excludeDomains: ['string'],
      includeDomains: ['string'],
      includeText: true,
      numResults: 1,
      startCrawlDate: '2019-12-27',
      startPublishedDate: '2019-12-27',
      type: 'auto',
      userLocation: 'userLocation',
    });
  });

  // Prism tests are disabled
  test.skip('similar: only required params', async () => {
    const responsePromise = client.search.v1.similar({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('similar: required and optional params', async () => {
    const response = await client.search.v1.similar({
      url: 'https://example.com',
      contents: 'contents',
      endCrawlDate: '2019-12-27',
      endPublishedDate: '2019-12-27',
      excludeDomains: ['string'],
      includeDomains: ['string'],
      includeText: true,
      numResults: 1,
      startCrawlDate: '2019-12-27',
      startPublishedDate: '2019-12-27',
    });
  });
});
