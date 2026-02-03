// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource parties', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.payments.v1.parties.create({ name: 'name', type: 'individual' });
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
    const response = await client.payments.v1.parties.create({
      name: 'name',
      type: 'individual',
      address_line1: 'address_line1',
      city: 'city',
      country: 'country',
      email: 'email',
      metadata: {},
      phone: 'phone',
      postal_code: 'postal_code',
      role: 'client',
      state: 'state',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.payments.v1.parties.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.payments.v1.parties.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.v1.parties.update(
        'id',
        {
          address_line1: 'address_line1',
          address_line2: 'address_line2',
          city: 'city',
          country: 'country',
          email: 'email',
          is_active: true,
          metadata: {},
          name: 'name',
          notes: 'notes',
          phone: 'phone',
          postal_code: 'postal_code',
          role: 'client',
          state: 'state',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.payments.v1.parties.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.v1.parties.list(
        {
          limit: 0,
          offset: 0,
          role: 'role',
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Casedev.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listPaymentMethods', async () => {
    const responsePromise = client.payments.v1.parties.listPaymentMethods('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
