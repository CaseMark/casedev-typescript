// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Create, manage, and execute AI agents with tool access, sandbox environments, and async run workflows
 */
export class Execute extends APIResource {
  /**
   * Creates an ephemeral agent and executes it immediately. By default this uses the
   * lightweight synchronous linc runtime on Vercel Sandbox. Set `agentRuntime: true`
   * to opt into the legacy Daytona-backed agent runtime.
   */
  create(body: ExecuteCreateParams, options?: RequestOptions): APIPromise<ExecuteCreateResponse> {
    return this._client.post('/agent/v2/execute', { body, ...options });
  }
}

export interface ExecuteCreateResponse {
  agentId?: string;

  error?: string | null;

  logs?: ExecuteCreateResponse.Logs | null;

  message?: string | null;

  output?: string | null;

  provider?: 'daytona' | 'vercel';

  runId?: string;

  runtimeId?: string | null;

  runtimeState?: 'running' | 'ended' | 'error';

  status?: 'running' | 'completed' | 'failed';

  usage?: unknown | null;
}

export namespace ExecuteCreateResponse {
  export interface Logs {
    linc?: string | null;

    runner?: string | null;
  }
}

export interface ExecuteCreateParams {
  prompt: string;

  /**
   * Set to true to opt into the legacy Daytona-backed agent runtime.
   */
  agentRuntime?: boolean | null;

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
