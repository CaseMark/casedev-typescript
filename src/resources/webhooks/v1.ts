// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  /**
   * Create a new webhook endpoint to receive real-time notifications for events in
   * your Case.dev workspace. Webhooks enable automated workflows by sending HTTP
   * POST requests to your specified URL when events occur.
   *
   * **Security**: Webhooks are signed with HMAC-SHA256 using the provided secret.
   * The signature is included in the `X-Case-Signature` header.
   *
   * **Available Events**:
   *
   * - `document.processed` - Document OCR/processing completed
   * - `vault.updated` - Document added/removed from vault
   * - `action.completed` - Workflow action finished
   * - `compute.finished` - Compute job completed
   *
   * @example
   * ```ts
   * const v1 = await client.webhooks.v1.create({
   *   events: ['document.processed', 'vault.updated'],
   *   url: 'https://api.lawfirm.com/webhooks/case-dev',
   * });
   * ```
   */
  create(body: V1CreateParams, options?: RequestOptions): APIPromise<V1CreateResponse> {
    return this._client.post('/webhooks/v1', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific webhook endpoint, including its
   * URL, description, subscribed events, and status.
   *
   * @example
   * ```ts
   * await client.webhooks.v1.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/webhooks/v1/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all webhook endpoints configured for your organization. Webhooks allow
   * you to receive real-time notifications when events occur in your Case.dev
   * workspace, such as document processing completion, OCR results, or workflow
   * status changes.
   *
   * @example
   * ```ts
   * await client.webhooks.v1.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/webhooks/v1', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a webhook endpoint from your organization. This action is irreversible
   * and will stop all webhook deliveries to the specified URL.
   *
   * @example
   * ```ts
   * await client.webhooks.v1.delete('wh_abc123xyz789');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/v1/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1CreateResponse {
  /**
   * Unique webhook endpoint ID
   */
  id?: string;

  /**
   * Creation timestamp
   */
  createdAt?: string;

  /**
   * Webhook description
   */
  description?: string | null;

  /**
   * Subscribed event types
   */
  events?: Array<string>;

  /**
   * Whether webhook is active
   */
  isActive?: boolean;

  /**
   * Webhook signing secret (only shown on creation)
   */
  secret?: string;

  /**
   * Webhook destination URL
   */
  url?: string;
}

export interface V1CreateParams {
  /**
   * Array of event types to subscribe to
   */
  events: Array<string>;

  /**
   * HTTPS URL where webhook events will be sent
   */
  url: string;

  /**
   * Optional description for the webhook
   */
  description?: string;
}

export declare namespace V1 {
  export { type V1CreateResponse as V1CreateResponse, type V1CreateParams as V1CreateParams };
}
