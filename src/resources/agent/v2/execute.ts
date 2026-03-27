// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Create, manage, and execute AI agents with tool access, sandbox environments, and async run workflows
 */
export class Execute extends APIResource {
  /**
   * Creates an ephemeral agent and immediately executes a v2 run on the Daytona
   * runtime.
   */
  create(body: ExecuteCreateParams, options?: RequestOptions): APIPromise<ExecuteCreateResponse> {
    return this._client.post('/agent/v2/execute', { body, ...options });
  }
}

export interface ExecuteCreateResponse {
  agentId?: string;

  message?: string;

  provider?: 'daytona';

  runId?: string;

  runtimeState?: 'running';

  status?: 'running';
}

export interface ExecuteCreateParams {
  prompt: string;

  disabledTools?: Array<string> | null;

  enabledTools?: Array<string> | null;

  guidance?: string | null;

  instructions?: string;

  model?: string;

  objectIds?: Array<string> | null;

  sandbox?: ExecuteCreateParams.Sandbox | null;

  vaultIds?: Array<string> | null;
}

export namespace ExecuteCreateParams {
  export interface Sandbox {
    cpu?: number;

    memoryMiB?: number;
  }
}

export declare namespace Execute {
  export {
    type ExecuteCreateResponse as ExecuteCreateResponse,
    type ExecuteCreateParams as ExecuteCreateParams,
  };
}
