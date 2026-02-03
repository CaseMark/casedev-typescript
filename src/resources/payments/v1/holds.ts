// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Holds extends APIResource {
  /**
   * Create a hold on funds in an account with release conditions
   */
  create(body: HoldCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/v1/holds', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get hold details by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/payments/v1/holds/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List holds with optional filters
   */
  list(query: HoldListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/payments/v1/holds', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Record an approval for a hold release condition
   */
  approve(
    id: string,
    body: HoldApproveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/payments/v1/holds/${id}/approve`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancel an active hold
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/payments/v1/holds/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Manually release a hold
   */
  release(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/payments/v1/holds/${id}/release`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface HoldCreateParams {
  /**
   * Account to hold funds in
   */
  account_id: string;

  /**
   * Amount in cents to hold
   */
  amount: number;

  currency?: string;

  expires_at?: string;

  memo?: string;

  metadata?: unknown;

  /**
   * Action to take when released
   */
  on_release_action?: string;

  on_release_config?: unknown;

  release_conditions?: Array<HoldCreateParams.ReleaseCondition>;
}

export namespace HoldCreateParams {
  export interface ReleaseCondition {
    approvers?: Array<string>;

    date?: string;

    document_id?: string;

    type?: 'manual_approval' | 'document_signed' | 'date_reached';
  }
}

export interface HoldListParams {
  account_id?: string;

  limit?: number;

  offset?: number;

  status?: string;
}

export interface HoldApproveParams {
  /**
   * ID of the approver (party or user)
   */
  approver_id?: string;
}

export declare namespace Holds {
  export {
    type HoldCreateParams as HoldCreateParams,
    type HoldListParams as HoldListParams,
    type HoldApproveParams as HoldApproveParams,
  };
}
