// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Payouts extends APIResource {
  /**
   * Create a payout to send money to an external bank account
   */
  create(body: PayoutCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/v1/payouts', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get payout details by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/payments/v1/payouts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List payouts with optional filters
   */
  list(query: PayoutListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/payments/v1/payouts', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancel a pending payout before it is processed
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/payments/v1/payouts/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PayoutCreateParams {
  /**
   * Amount in cents
   */
  amount: number;

  destination_type: 'bank_account' | 'card';

  /**
   * Source account
   */
  from_account_id: string;

  currency?: string;

  memo?: string;

  metadata?: unknown;

  /**
   * Recipient party (optional)
   */
  party_id?: string;
}

export interface PayoutListParams {
  from_account_id?: string;

  limit?: number;

  offset?: number;

  party_id?: string;

  status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
}

export declare namespace Payouts {
  export { type PayoutCreateParams as PayoutCreateParams, type PayoutListParams as PayoutListParams };
}
