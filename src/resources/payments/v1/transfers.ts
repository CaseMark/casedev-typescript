// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Transfers extends APIResource {
  /**
   * Create a transfer between payment accounts
   */
  create(body: TransferCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/v1/transfers', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get transfer details by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/payments/v1/transfers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List transfers with optional filters
   */
  list(query: TransferListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/payments/v1/transfers', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Approve and execute a pending transfer
   */
  approve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/payments/v1/transfers/${id}/approve`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancel a pending transfer
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/payments/v1/transfers/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransferCreateParams {
  /**
   * Amount in cents
   */
  amount: number;

  from_account_id: string;

  to_account_id: string;

  memo?: string;

  metadata?: unknown;
}

export interface TransferListParams {
  from_account_id?: string;

  limit?: number;

  offset?: number;

  status?: string;

  to_account_id?: string;
}

export declare namespace Transfers {
  export { type TransferCreateParams as TransferCreateParams, type TransferListParams as TransferListParams };
}
