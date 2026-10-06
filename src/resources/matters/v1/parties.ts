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
   * List reusable legal parties for the authenticated organization, newest update
   * first. Pagination is opt-in: pass `limit` (1-200) to receive a bounded page,
   * then replay `pagination.next_cursor` as `?cursor=` while `pagination.has_more`
   * is true. A request with neither `limit` nor `cursor` still returns every party,
   * and `pagination.limit` is null. That default will become a bounded page in a
   * future release — paginate now to avoid the change.
   */
  list(
    query: PartyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartyListResponse> {
    return this._client.get('/matters/v1/parties', { query, ...options });
  }
}

export interface PartyListResponse {
  data?: Array<unknown>;

  pagination?: PartyListResponse.Pagination;
}

export namespace PartyListResponse {
  export interface Pagination {
    has_more?: boolean;

    limit?: number | null;

    next_cursor?: string | null;
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
  /**
   * Opaque continuation cursor from `pagination.next_cursor` of the previous page.
   * Must be replayed with the same filters that produced it.
   */
  cursor?: string;

  email?: string;

  /**
   * Parties per page (1-200). Omit to receive every party. Supplying a cursor
   * without a limit uses 50.
   */
  limit?: number;

  query?: string;

  type?: 'person' | 'organization';
}

export declare namespace Parties {
  export {
    type PartyListResponse as PartyListResponse,
    type PartyCreateParams as PartyCreateParams,
    type PartyListParams as PartyListParams,
  };
}
