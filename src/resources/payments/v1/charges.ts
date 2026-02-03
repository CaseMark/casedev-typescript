// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Charges extends APIResource {
  /**
   * Create a charge (payment request) to collect money from a party
   */
  create(body: ChargeCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/v1/charges', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get charge details by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/payments/v1/charges/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List charges with optional filters
   */
  list(query: ChargeListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/payments/v1/charges', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancel a pending charge before payment is collected
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/payments/v1/charges/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Refund a succeeded charge (full or partial)
   */
  refund(
    id: string,
    body: ChargeRefundParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/payments/v1/charges/${id}/refund`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ChargeCreateParams {
  /**
   * Amount in cents
   */
  amount: number;

  /**
   * Account to receive funds
   */
  destination_account_id: string;

  /**
   * Party to charge
   */
  party_id: string;

  currency?: string;

  description?: string;

  metadata?: unknown;

  payment_methods?: Array<string>;
}

export interface ChargeListParams {
  destination_account_id?: string;

  limit?: number;

  offset?: number;

  party_id?: string;

  status?: string;
}

export interface ChargeRefundParams {
  /**
   * Amount to refund in cents. If not provided, full refund.
   */
  amount?: number;

  /**
   * Reason for refund
   */
  reason?: string;
}

export declare namespace Charges {
  export {
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeListParams as ChargeListParams,
    type ChargeRefundParams as ChargeRefundParams,
  };
}
