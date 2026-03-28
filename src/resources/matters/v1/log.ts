// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class Log extends APIResource {
  /**
   * Append a manual operational note or event to a matter log.
   */
  create(id: string, body: LogCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/matters/v1/${id}/log`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List the operational history for a matter.
   */
  list(id: string, query: LogListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/matters/v1/${id}/log`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Bulk export matter log entries for audits, visibility, and eval pipelines.
   * Supports json, csv, tsv, and jsonl. Limited to 10,000 entries per request.
   */
  export(
    id: string,
    body: LogExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogExportResponse> {
    return this._client.post(path`/matters/v1/${id}/log/export`, { body, ...options });
  }
}

export interface LogExportResponse {
  data?: Array<{ [key: string]: unknown }>;
}

export interface LogCreateParams {
  summary: string;

  details?: { [key: string]: unknown };

  event_type?: string;

  work_item_id?: string;
}

export interface LogListParams {
  /**
   * Filter by actor ID
   */
  actor_id?: string;

  /**
   * Filter by actor type
   */
  actor_type?: string;

  /**
   * End of time range (ISO 8601)
   */
  end_time?: string;

  /**
   * Filter by exact event type
   */
  event_type?: string;

  /**
   * Maximum number of log entries to return (max 200)
   */
  limit?: number;

  /**
   * Number of log entries to skip for pagination
   */
  offset?: number;

  /**
   * Filter by scope: matter, work_item, execution, sharing, all
   */
  scope?: string | Array<string>;

  /**
   * Start of time range (ISO 8601)
   */
  start_time?: string;

  /**
   * Filter by work item ID
   */
  work_item_id?: string;
}

export interface LogExportParams {
  /**
   * Filter by actor ID
   */
  actor_id?: string;

  /**
   * Filter by actor type
   */
  actor_type?: string;

  /**
   * End of time range (ISO 8601)
   */
  end_time?: string;

  /**
   * Filter by exact event type
   */
  event_type?: string;

  /**
   * Export format. Defaults to jsonl.
   */
  format?: 'json' | 'jsonl' | 'csv' | 'tsv';

  /**
   * Filter by scope: matter, work_item, execution, sharing, all
   */
  scope?: string | Array<string>;

  /**
   * Start of time range (ISO 8601)
   */
  start_time?: string;

  /**
   * Filter by work item ID
   */
  work_item_id?: string;
}

export declare namespace Log {
  export {
    type LogExportResponse as LogExportResponse,
    type LogCreateParams as LogCreateParams,
    type LogListParams as LogListParams,
    type LogExportParams as LogExportParams,
  };
}
