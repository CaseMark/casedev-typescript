// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class Purges extends APIResource {
  /**
   * Returns a Matter purge receipt for manual diagnostics. Integrations should
   * subscribe to Matter purge webhooks rather than polling this route.
   */
  retrieve(purgeID: string, options?: RequestOptions): APIPromise<PurgeRetrieveResponse> {
    return this._client.get(path`/matters/v1/purges/${purgeID}`, options);
  }
}

export interface PurgeRetrieveResponse {
  attempt: number;

  matter_id: string;

  purge_id: string;

  status: 'queued' | 'in_progress' | 'failed' | 'completed';

  vault_id: string;

  workflow_id: string | null;

  completed_at?: string | null;

  counts?: PurgeRetrieveResponse.Counts;

  failed_at?: string | null;

  failure_code?: string | null;

  requested_at?: string;

  started_at?: string | null;

  /**
   * Stable ID of the failed or completed terminal webhook event
   */
  terminal_event_id?: string | null;
}

export namespace PurgeRetrieveResponse {
  export interface Counts {
    chats?: number;

    objects?: number;

    sessions?: number;

    transcriptions?: number;
  }
}

export declare namespace Purges {
  export { type PurgeRetrieveResponse as PurgeRetrieveResponse };
}
