// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class Subscriptions extends APIResource {
  /**
   * Creates a webhook subscription for matter and work-item events.
   */
  create(id: string, body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/matters/v1/${id}/events/subscriptions`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists webhook subscriptions configured for a matter.
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/matters/v1/${id}/events/subscriptions`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deactivates a matter webhook subscription.
   */
  delete(
    subscriptionID: string,
    params: SubscriptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/matters/v1/${id}/events/subscriptions/${subscriptionID}`, {
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

export interface SubscriptionDeleteParams {
  id: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
