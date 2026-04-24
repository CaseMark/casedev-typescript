// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Webhook endpoint management
 */
export class Deliveries extends APIResource {
  /**
   * Get webhook delivery
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/webhooks/v1/deliveries/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns delivery attempts for the organization, newest first. Filter by
   * endpoint_id or status to narrow results.
   */
  list(query: DeliveryListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/webhooks/v1/deliveries', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Re-sends the original event to its endpoint. The payload is reconstructed from
   * the delivery record (same eventId, eventType, and occurred_at). Replay
   * deliveries include a Case.dev replay marker header so receivers can distinguish
   * replays from first-time deliveries. Uses the endpoint's current signing secret —
   * not the one in force at the original delivery time.
   */
  replay(
    id: string,
    body: DeliveryReplayParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/webhooks/v1/deliveries/${id}/replay`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DeliveryListParams {
  endpoint_id?: string;

  limit?: number;

  status?: 'pending' | 'delivered' | 'failed';
}

export interface DeliveryReplayParams {
  /**
   * Override payload to deliver. Must only be supplied when the delivery record
   * lacks enough context to reconstruct the original event (rare). Defaults to an
   * empty data envelope.
   */
  payload?: unknown;
}

export declare namespace Deliveries {
  export { type DeliveryListParams as DeliveryListParams, type DeliveryReplayParams as DeliveryReplayParams };
}
