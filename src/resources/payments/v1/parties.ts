// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Parties extends APIResource {
  /**
   * Create a new payment party (client, vendor, counsel, etc.)
   */
  create(body: PartyCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/v1/parties', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get party details by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/payments/v1/parties/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update party details
   */
  update(
    id: string,
    body: PartyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/payments/v1/parties/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List payment parties with optional filters
   */
  list(query: PartyListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/payments/v1/parties', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List saved payment methods for a party (from Stripe)
   */
  listPaymentMethods(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/payments/v1/parties/${id}/payment-methods`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PartyCreateParams {
  name: string;

  type: 'individual' | 'organization';

  address_line1?: string;

  city?: string;

  country?: string;

  email?: string;

  metadata?: unknown;

  phone?: string;

  postal_code?: string;

  role?: 'client' | 'vendor' | 'counsel' | 'expert' | 'lien_holder' | 'funder' | 'opposing_party' | 'other';

  state?: string;
}

export interface PartyUpdateParams {
  address_line1?: string;

  address_line2?: string;

  city?: string;

  country?: string;

  email?: string;

  is_active?: boolean;

  metadata?: unknown;

  name?: string;

  notes?: string;

  phone?: string;

  postal_code?: string;

  role?: 'client' | 'vendor' | 'counsel' | 'expert' | 'lien_holder' | 'funder' | 'opposing_party' | 'other';

  state?: string;
}

export interface PartyListParams {
  limit?: number;

  offset?: number;

  role?: string;

  type?: string;
}

export declare namespace Parties {
  export {
    type PartyCreateParams as PartyCreateParams,
    type PartyUpdateParams as PartyUpdateParams,
    type PartyListParams as PartyListParams,
  };
}
