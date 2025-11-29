// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Functions extends APIResource {
  /**
   * Retrieves all serverless functions deployed in a specified compute environment.
   * Functions can be used for custom document processing, AI model inference, or
   * other computational tasks in legal workflows.
   *
   * @example
   * ```ts
   * await client.compute.v1.functions.list();
   * ```
   */
  list(query: FunctionListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/compute/v1/functions', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve execution logs from a deployed serverless function. Logs include
   * function output, errors, and runtime information. Useful for debugging and
   * monitoring function performance in production.
   *
   * @example
   * ```ts
   * await client.compute.v1.functions.getLogs('id');
   * ```
   */
  getLogs(
    id: string,
    query: FunctionGetLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/compute/v1/functions/${id}/logs`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FunctionListParams {
  /**
   * Environment name. If not specified, uses the default environment.
   */
  env?: string;
}

export interface FunctionGetLogsParams {
  /**
   * Number of log lines to retrieve (default 200, max 1000)
   */
  tail?: number;
}

export declare namespace Functions {
  export {
    type FunctionListParams as FunctionListParams,
    type FunctionGetLogsParams as FunctionGetLogsParams,
  };
}
