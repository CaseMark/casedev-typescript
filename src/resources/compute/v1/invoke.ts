// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invoke extends APIResource {
  /**
   * Execute a deployed compute function with custom input data. Supports both
   * synchronous and asynchronous execution modes. Functions can be invoked by ID or
   * name and can process various types of input data for legal document analysis,
   * data processing, or other computational tasks.
   *
   * @example
   * ```ts
   * const response = await client.compute.v1.invoke.run(
   *   'func_abc123 or document-analyzer',
   *   { input: { foo: 'bar' } },
   * );
   * ```
   */
  run(functionID: string, body: InvokeRunParams, options?: RequestOptions): APIPromise<InvokeRunResponse> {
    return this._client.post(path`/compute/v1/invoke/${functionID}`, { body, ...options });
  }
}

export type InvokeRunResponse =
  | InvokeRunResponse.SynchronousResponse
  | InvokeRunResponse.AsynchronousResponse;

export namespace InvokeRunResponse {
  export interface SynchronousResponse {
    /**
     * Execution duration in milliseconds
     */
    duration?: number;

    /**
     * Error message if status is failed
     */
    error?: string;

    /**
     * Function return value
     */
    output?: unknown;

    /**
     * Unique run identifier
     */
    runId?: string;

    status?: 'completed' | 'failed';
  }

  export interface AsynchronousResponse {
    /**
     * URL to check run status and logs
     */
    logsUrl?: string;

    /**
     * Unique run identifier
     */
    runId?: string;

    status?: 'running';
  }
}

export interface InvokeRunParams {
  /**
   * Input data to pass to the function
   */
  input: { [key: string]: unknown };

  /**
   * If true, returns immediately with run ID for background execution
   */
  async?: boolean;

  /**
   * Override the auto-detected function suffix
   */
  functionSuffix?: '_modal' | '_task' | '_web' | '_server';
}

export declare namespace Invoke {
  export { type InvokeRunResponse as InvokeRunResponse, type InvokeRunParams as InvokeRunParams };
}
