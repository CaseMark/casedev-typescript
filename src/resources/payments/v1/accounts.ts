// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Create a new payment account (trust, operating, escrow, client sub-account,
   * etc.)
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.post('/payments/v1/accounts', { body, ...options });
  }

  /**
   * Get a payment account by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/payments/v1/accounts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a payment account
   */
  update(
    id: string,
    body: AccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/payments/v1/accounts/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all payment accounts for the organization
   */
  list(query: AccountListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/payments/v1/accounts', { query, ...options });
  }

  /**
   * Get the current balance for an account, computed from the ledger
   */
  getBalance(id: string, options?: RequestOptions): APIPromise<AccountGetBalanceResponse> {
    return this._client.get(path`/payments/v1/accounts/${id}/balance`, options);
  }

  /**
   * Get ledger entries for a specific account
   */
  getLedger(
    id: string,
    query: AccountGetLedgerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGetLedgerResponse> {
    return this._client.get(path`/payments/v1/accounts/${id}/ledger`, { query, ...options });
  }
}

export interface AccountCreateResponse {
  id?: string;

  cachedAvailableBalance?: number;

  cachedBalance?: number;

  createdAt?: string;

  currency?: string;

  isActive?: boolean;

  name?: string;

  organizationId?: string;

  type?: string;
}

export type AccountListResponse = unknown;

export interface AccountGetBalanceResponse {
  accountId?: string;

  /**
   * Balance minus holds
   */
  availableBalance?: number;

  /**
   * Total balance in cents
   */
  balance?: number;

  currency?: string;

  /**
   * Amount held by active holds
   */
  heldAmount?: number;

  /**
   * Pending incoming payments
   */
  pendingCharges?: number;
}

export interface AccountGetLedgerResponse {
  entries?: Array<unknown>;

  pagination?: unknown;
}

export interface AccountCreateParams {
  /**
   * Account name
   */
  name: string;

  /**
   * Account type
   */
  type: 'trust' | 'operating' | 'escrow' | 'reserve' | 'client' | 'sub';

  /**
   * Currency code
   */
  currency?: string;

  /**
   * Associated matter ID
   */
  matter_id?: string;

  /**
   * Additional metadata
   */
  metadata?: unknown;

  /**
   * Parent account ID for sub-accounts
   */
  parent_account_id?: string;
}

export interface AccountUpdateParams {
  is_active?: boolean;

  metadata?: unknown;

  name?: string;
}

export interface AccountListParams {
  /**
   * Max results to return
   */
  limit?: number;

  /**
   * Filter by matter ID
   */
  matter_id?: string;

  /**
   * Offset for pagination
   */
  offset?: number;

  /**
   * Filter by parent account
   */
  parent_account_id?: string;

  /**
   * Filter by account type
   */
  type?: string;
}

export interface AccountGetLedgerParams {
  limit?: number;

  offset?: number;
}

export declare namespace Accounts {
  export {
    type AccountCreateResponse as AccountCreateResponse,
    type AccountListResponse as AccountListResponse,
    type AccountGetBalanceResponse as AccountGetBalanceResponse,
    type AccountGetLedgerResponse as AccountGetLedgerResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountGetLedgerParams as AccountGetLedgerParams,
  };
}
