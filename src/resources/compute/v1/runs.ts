// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Retrieve detailed information about a specific compute function run, including
   * execution status, input/output data, resource usage metrics, and cost
   * information.
   *
   * @example
   * ```ts
   * await client.compute.v1.runs.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/compute/v1/runs/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of recent compute runs for your organization. Filter by
   * environment or function, and limit the number of results returned. Useful for
   * monitoring serverless function executions and tracking performance metrics.
   *
   * @example
   * ```ts
   * await client.compute.v1.runs.list();
   * ```
   */
  list(query: RunListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/compute/v1/runs', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RunListParams {
  /**
   * Environment name to filter runs by
   */
  env?: string;

  /**
   * Function name to filter runs by
   */
  function?: string;

  /**
   * Maximum number of runs to return (1-100, default: 50)
   */
  limit?: number;
}

export declare namespace Runs {
  export { type RunListParams as RunListParams };
}
