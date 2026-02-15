// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // Prism tests are disabled
  test.skip('createCompletion: only required params', async () => {
    const responsePromise = client.llm.v1.chat.createCompletion({ messages: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createCompletion: required and optional params', async () => {
    const response = await client.llm.v1.chat.createCompletion({
      messages: [{ content: 'content', role: 'system' }],
      casemark_show_reasoning: false,
      frequency_penalty: 0,
      max_tokens: 1000,
      model: 'casemark/casemark-core-3',
      presence_penalty: 0,
      stream: false,
      temperature: 0.7,
      top_p: 0,
    });
  });
});
