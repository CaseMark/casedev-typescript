// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionCreateParams,
  SubscriptionTestParams,
  SubscriptionUpdateParams,
  Subscriptions,
} from './subscriptions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Usage reporting and webhook subscriptions
 */
export class V1 extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);

  /**
   * Returns customer-facing usage metrics and costs for the requested period.
   * Supports summary totals and daily buckets for timestamped usage sources. Vault
   * storage is intentionally omitted from totals because it is not yet periodized
   * for arbitrary windows.
   */
  retrieve(query: V1RetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/usage/v1', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1RetrieveParams {
  /**
   * Whether to return period totals only or include daily buckets.
   */
  granularity?: 'summary' | 'daily';

  /**
   * Period end date. Defaults to now.
   */
  periodEnd?: string;

  /**
   * Period start date. Defaults to the start of the current calendar month.
   */
  periodStart?: string;
}

V1.Subscriptions = Subscriptions;

export declare namespace V1 {
  export { type V1RetrieveParams as V1RetrieveParams };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionTestParams as SubscriptionTestParams,
  };
}
