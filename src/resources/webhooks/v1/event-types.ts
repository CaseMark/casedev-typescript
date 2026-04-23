// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Webhook endpoint management
 */
export class EventTypes extends APIResource {
  /**
   * Returns the catalog of event types that can be subscribed to via webhook
   * endpoints. Each entry lists the required service scope the API key must carry to
   * subscribe, plus the stability level.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/webhooks/v1/event_types', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
