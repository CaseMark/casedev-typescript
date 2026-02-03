// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Ledger extends APIResource {
  /**
   * List ledger entries with optional filters by account, transaction, or date range
   */
  get(query: LedgerGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/payments/v1/ledger', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Query ledger transactions with optional filters
   */
  listTransactions(
    query: LedgerListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/payments/v1/ledger/transactions', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LedgerGetParams {
  /**
   * Filter by account
   */
  account_id?: string;

  limit?: number;

  offset?: number;

  /**
   * Filter by transaction
   */
  transaction_id?: string;
}

export interface LedgerListTransactionsParams {
  end_date?: string;

  limit?: number;

  offset?: number;

  /**
   * Filter by reference ID
   */
  reference_id?: string;

  /**
   * Filter by reference type (transfer, charge, payout, etc.)
   */
  reference_type?: string;

  start_date?: string;
}

export declare namespace Ledger {
  export {
    type LedgerGetParams as LedgerGetParams,
    type LedgerListTransactionsParams as LedgerListTransactionsParams,
  };
}
