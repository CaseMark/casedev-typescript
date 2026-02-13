// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Creates a webhook subscription for vault lifecycle events. Optional object
   * filters can limit notifications to specific vault objects.
   *
   * @example
   * ```ts
   * await client.vault.events.subscriptions.create('id', {
   *   callbackUrl: 'https://example.com',
   * });
   * ```
   */
  create(id: string, body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/vault/${id}/events/subscriptions`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates callback URL, filters, active state, or signing secret for a vault
   * webhook subscription.
   *
   * @example
   * ```ts
   * await client.vault.events.subscriptions.update(
   *   'subscriptionId',
   *   { id: 'id' },
   * );
   * ```
   */
  update(
    subscriptionID: string,
    params: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.patch(path`/vault/${id}/events/subscriptions/${subscriptionID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists webhook subscriptions configured for a vault.
   *
   * @example
   * ```ts
   * await client.vault.events.subscriptions.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/vault/${id}/events/subscriptions`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deactivates a vault webhook subscription.
   *
   * @example
   * ```ts
   * await client.vault.events.subscriptions.delete(
   *   'subscriptionId',
   *   { id: 'id' },
   * );
   * ```
   */
  delete(
    subscriptionID: string,
    params: SubscriptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/vault/${id}/events/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delivers a test event to a single vault webhook subscription. Uses the same
   * payload shape, signature, and retry behavior as production event delivery.
   *
   * @example
   * ```ts
   * await client.vault.events.subscriptions.test(
   *   'subscriptionId',
   *   { id: 'id' },
   * );
   * ```
   */
  test(subscriptionID: string, params: SubscriptionTestParams, options?: RequestOptions): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.post(path`/vault/${id}/events/subscriptions/${subscriptionID}/test`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscriptionCreateParams {
  callbackUrl: string;

  eventTypes?: Array<string>;

  objectIds?: Array<string>;

  signingSecret?: string;
}

export interface SubscriptionUpdateParams {
  /**
   * Path param: Vault ID
   */
  id: string;

  /**
   * Body param
   */
  callbackUrl?: string;

  /**
   * Body param
   */
  clearSigningSecret?: boolean;

  /**
   * Body param
   */
  eventTypes?: Array<string>;

  /**
   * Body param
   */
  isActive?: boolean;

  /**
   * Body param
   */
  objectIds?: Array<string>;

  /**
   * Body param
   */
  signingSecret?: string;
}

export interface SubscriptionDeleteParams {
  /**
   * Vault ID
   */
  id: string;
}

export interface SubscriptionTestParams {
  /**
   * Path param: Vault ID
   */
  id: string;

  /**
   * Body param: Optional event type override for this test
   */
  eventType?: string;

  /**
   * Body param: Optional object ID for object-scoped payload testing
   */
  objectId?: string;

  /**
   * Body param: Optional additional fields merged into payload.data
   */
  payload?: { [key: string]: unknown };
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
    type SubscriptionTestParams as SubscriptionTestParams,
  };
}
