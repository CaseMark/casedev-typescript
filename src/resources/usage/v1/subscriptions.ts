// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Usage reporting and webhook subscriptions
 */
export class Subscriptions extends APIResource {
  /**
   * Creates a webhook subscription for usage, balance, and billing events.
   */
  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/usage/v1/subscriptions', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates callback URL, event filters, active state, or signing secret.
   */
  update(
    subscriptionID: string,
    body: SubscriptionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/usage/v1/subscriptions/${subscriptionID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists webhook subscriptions configured for usage and billing events.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/usage/v1/subscriptions', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deactivates a usage webhook subscription.
   */
  delete(subscriptionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/usage/v1/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delivers a test event to a single usage webhook subscription using the same
   * payload shape and signing behavior as production delivery.
   */
  test(
    subscriptionID: string,
    body: SubscriptionTestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/usage/v1/subscriptions/${subscriptionID}/test`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscriptionCreateParams {
  callbackUrl: string;

  eventTypes?: Array<string>;

  signingSecret?: string;
}

export interface SubscriptionUpdateParams {
  callbackUrl?: string;

  clearSigningSecret?: boolean;

  eventTypes?: Array<string>;

  isActive?: boolean;

  signingSecret?: string;
}

export interface SubscriptionTestParams {
  eventType?: string;

  payload?: { [key: string]: unknown };
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionTestParams as SubscriptionTestParams,
  };
}
