// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Webhook endpoint management
 */
export class Endpoints extends APIResource {
  /**
   * Creates a webhook endpoint that receives platform events matching the supplied
   * event-type filters. Returns the generated signing secret ONCE — the response is
   * the only time it is shown in plaintext.
   */
  create(body: EndpointCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/webhooks/v1/endpoints', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get webhook endpoint
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/webhooks/v1/endpoints/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Partially updates a webhook endpoint. Any omitted field is left unchanged.
   * Signing secrets are rotated via the separate /rotate_secret endpoint.
   */
  update(id: string, body: EndpointUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/webhooks/v1/endpoints/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the organization's webhook endpoints, newest first. Signing secrets are
   * never included.
   */
  list(query: EndpointListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/webhooks/v1/endpoints', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Soft-deletes a webhook endpoint. Delivery stops immediately and the endpoint no
   * longer appears in list results. Delivery history is preserved (and can be
   * fetched via GET /deliveries with the endpoint_id filter) so audit trails and
   * post-mortem debugging remain possible.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/v1/endpoints/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generates a new signing secret for the endpoint. The previous secret remains
   * valid until `previousSecretExpiresInSec` elapses (default 24h, max 30 days).
   * During the grace window deliveries are signed with both secrets so receivers can
   * migrate without downtime. Returns the new secret — this is the only time it is
   * shown in plaintext.
   */
  rotateSecret(
    id: string,
    body: EndpointRotateSecretParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/webhooks/v1/endpoints/${id}/rotate_secret`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Synchronously delivers a synthetic `webhook.test` event to the endpoint and
   * returns the HTTP result. No retries. Useful for validating that a new endpoint
   * is reachable and its signature verifier works. The delivery is not persisted in
   * the delivery history.
   */
  test(
    id: string,
    body: EndpointTestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/webhooks/v1/endpoints/${id}/test`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EndpointCreateParams {
  /**
   * Glob patterns of event types to deliver (e.g. "vault._", "ocr.job.completed",
   * "_")
   */
  eventTypeFilters: Array<string>;

  /**
   * HTTPS callback URL that will receive event deliveries
   */
  url: string;

  /**
   * Human-readable label for this endpoint
   */
  description?: string;

  /**
   * Optional per-resource allowlists. If vaultIds is set, only events for those
   * vaults are delivered. Same for matterIds.
   */
  resourceScopes?: EndpointCreateParams.ResourceScopes;
}

export namespace EndpointCreateParams {
  /**
   * Optional per-resource allowlists. If vaultIds is set, only events for those
   * vaults are delivered. Same for matterIds.
   */
  export interface ResourceScopes {
    matterIds?: Array<string>;

    vaultIds?: Array<string>;
  }
}

export interface EndpointUpdateParams {
  description?: string | null;

  eventTypeFilters?: Array<string>;

  resourceScopes?: EndpointUpdateParams.ResourceScopes | null;

  status?: 'active' | 'disabled';

  url?: string;
}

export namespace EndpointUpdateParams {
  export interface ResourceScopes {
    matterIds?: Array<string>;

    vaultIds?: Array<string>;
  }
}

export interface EndpointListParams {
  limit?: number;

  /**
   * Filter by endpoint status
   */
  status?: 'active' | 'disabled' | 'auto_disabled';
}

export interface EndpointRotateSecretParams {
  /**
   * How long (seconds) the old secret continues to be accepted. 0 invalidates
   * immediately. Default: 86400 (24h).
   */
  previousSecretExpiresInSec?: number;
}

export interface EndpointTestParams {
  /**
   * Event type to simulate. Defaults to "webhook.test".
   */
  eventType?: string;

  /**
   * Custom `data` payload. Defaults to a small placeholder.
   */
  payload?: unknown;
}

export declare namespace Endpoints {
  export {
    type EndpointCreateParams as EndpointCreateParams,
    type EndpointUpdateParams as EndpointUpdateParams,
    type EndpointListParams as EndpointListParams,
    type EndpointRotateSecretParams as EndpointRotateSecretParams,
    type EndpointTestParams as EndpointTestParams,
  };
}
