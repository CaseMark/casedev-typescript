// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class ContentPurges extends APIResource {
  /**
   * Queues an idempotent hard deletion of explicitly owned content while preserving
   * the Matter, Vault, and unrelated content. Use unified matter.content_purge
   * webhooks for completion, not polling.
   */
  create(
    id: string,
    body: ContentPurgeCreateParams,
    options?: RequestOptions,
  ): APIPromise<ContentPurgeCreateResponse> {
    return this._client.post(path`/matters/v1/${id}/content-purges`, { body, ...options });
  }

  /**
   * Owner-only receipt for operator diagnostics. Integrations must use unified
   * content-purge webhooks rather than polling.
   */
  retrieve(purgeID: string, options?: RequestOptions): APIPromise<ContentPurgeRetrieveResponse> {
    return this._client.get(path`/matters/v1/content-purges/${purgeID}`, options);
  }
}

export interface ContentPurgeCreateResponse {
  attempt: number;

  matter_id: string;

  purge_id: string;

  request_id: string;

  status: 'queued' | 'in_progress' | 'failed' | 'completed';

  vault_id: string;

  workflow_id: string | null;

  completed_at?: string | null;

  counts?: { [key: string]: number };

  failed_at?: string | null;

  failure_code?: string | null;

  requested_at?: string;

  started_at?: string | null;

  terminal_event_id?: string | null;
}

export interface ContentPurgeRetrieveResponse {
  attempt: number;

  matter_id: string;

  purge_id: string;

  request_id: string;

  status: 'queued' | 'in_progress' | 'failed' | 'completed';

  vault_id: string;

  workflow_id: string | null;

  completed_at?: string | null;

  counts?: { [key: string]: number };

  failed_at?: string | null;

  failure_code?: string | null;

  requested_at?: string;

  started_at?: string | null;

  terminal_event_id?: string | null;
}

export interface ContentPurgeCreateParams {
  /**
   * Stable caller idempotency ID; cannot be reused with different targets.
   */
  request_id: string;

  object_ids?: Array<string>;

  session_ids?: Array<string>;

  transcription_ids?: Array<string>;

  work_item_ids?: Array<string>;
}

export declare namespace ContentPurges {
  export {
    type ContentPurgeCreateResponse as ContentPurgeCreateResponse,
    type ContentPurgeRetrieveResponse as ContentPurgeRetrieveResponse,
    type ContentPurgeCreateParams as ContentPurgeCreateParams,
  };
}
