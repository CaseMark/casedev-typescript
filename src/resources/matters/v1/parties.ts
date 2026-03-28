// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class Parties extends APIResource {
  /**
   * Create a reusable legal party for the authenticated organization.
   */
  create(body: PartyCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/matters/v1/parties', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a reusable legal party by ID.
   */
  retrieve(partyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/matters/v1/parties/${partyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a reusable legal party.
   */
  update(partyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/matters/v1/parties/${partyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List reusable legal parties for the authenticated organization.
   */
  list(query: PartyListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/matters/v1/parties', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PartyCreateParams {
  name: string;

  addresses?: Array<{ [key: string]: unknown }>;

  custom_fields?: { [key: string]: unknown } | null;

  email?: string;

  metadata?: { [key: string]: unknown };

  notes?: string | null;

  phone?: string;

  type?: 'person' | 'organization';
}

export interface PartyListParams {
  email?: string;

  query?: string;

  type?: 'person' | 'organization';
}

export declare namespace Parties {
  export { type PartyCreateParams as PartyCreateParams, type PartyListParams as PartyListParams };
}
