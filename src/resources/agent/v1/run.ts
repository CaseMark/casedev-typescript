// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Run extends APIResource {
  /**
   * Creates a run in queued state. Call POST /agent/v1/run/:id/exec to start
   * execution.
   */
  create(body: RunCreateParams, options?: RequestOptions): APIPromise<RunCreateResponse> {
    return this._client.post('/agent/v1/run', { body, ...options });
  }

  /**
   * Cancels a running or queued run. Idempotent — cancelling a finished run returns
   * its current status.
   */
  cancel(id: string, options?: RequestOptions): APIPromise<RunCancelResponse> {
    return this._client.post(path`/agent/v1/run/${id}/cancel`, options);
  }

  /**
   * Starts execution of a queued run. The agent runs in a durable workflow — poll
   * /run/:id/status for progress.
   */
  exec(id: string, options?: RequestOptions): APIPromise<RunExecResponse> {
    return this._client.post(path`/agent/v1/run/${id}/exec`, options);
  }

  /**
   * Full audit trail for a run including output, steps (tool calls, text), and token
   * usage.
   */
  getDetails(id: string, options?: RequestOptions): APIPromise<RunGetDetailsResponse> {
    return this._client.get(path`/agent/v1/run/${id}/details`, options);
  }

  /**
   * Lightweight status poll for a run. Use /run/:id/details for the full audit
   * trail.
   */
  getStatus(id: string, options?: RequestOptions): APIPromise<RunGetStatusResponse> {
    return this._client.get(path`/agent/v1/run/${id}/status`, options);
  }

  /**
   * Register a callback URL to receive notifications when the run completes. URL
   * must use https and must not point to a private network.
   */
  watch(id: string, body: RunWatchParams, options?: RequestOptions): APIPromise<RunWatchResponse> {
    return this._client.post(path`/agent/v1/run/${id}/watch`, { body, ...options });
  }
}

export interface RunCreateResponse {
  id?: string;

  agentId?: string;

  createdAt?: string;

  status?: 'queued';
}

export interface RunCancelResponse {
  id?: string;

  /**
   * Present if run was already finished
   */
  message?: string;

  status?: 'cancelled' | 'completed' | 'failed';
}

export interface RunExecResponse {
  id?: string;

  message?: string;

  status?: 'running';

  /**
   * Durable workflow run ID
   */
  workflowId?: string;
}

export interface RunGetDetailsResponse {
  id?: string;

  agentId?: string;

  completedAt?: string | null;

  createdAt?: string;

  guidance?: string | null;

  model?: string | null;

  prompt?: string;

  /**
   * Final output from the agent
   */
  result?: RunGetDetailsResponse.Result | null;

  startedAt?: string | null;

  status?: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';

  steps?: Array<RunGetDetailsResponse.Step>;

  /**
   * Token usage statistics
   */
  usage?: RunGetDetailsResponse.Usage | null;
}

export namespace RunGetDetailsResponse {
  /**
   * Final output from the agent
   */
  export interface Result {
    /**
     * Sandbox execution logs (OpenCode server + runner script)
     */
    logs?: Result.Logs | null;

    output?: string;
  }

  export namespace Result {
    /**
     * Sandbox execution logs (OpenCode server + runner script)
     */
    export interface Logs {
      /**
       * OpenCode server stdout/stderr
       */
      opencode?: string;

      /**
       * Runner script stdout/stderr
       */
      runner?: string;
    }
  }

  export interface Step {
    id?: string;

    content?: string | null;

    durationMs?: number | null;

    timestamp?: string;

    toolInput?: unknown;

    toolName?: string | null;

    toolOutput?: unknown;

    type?: 'output' | 'thinking' | 'tool_call' | 'tool_result';
  }

  /**
   * Token usage statistics
   */
  export interface Usage {
    durationMs?: number;

    inputTokens?: number;

    model?: string;

    outputTokens?: number;

    toolCalls?: number;
  }
}

export interface RunGetStatusResponse {
  id?: string;

  completedAt?: string | null;

  /**
   * Elapsed time in milliseconds
   */
  durationMs?: number | null;

  startedAt?: string | null;

  status?: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';
}

export interface RunWatchResponse {
  callbackUrl?: string;

  ok?: boolean;
}

export interface RunCreateParams {
  /**
   * ID of the agent to run
   */
  agentId: string;

  /**
   * Task prompt for the agent
   */
  prompt: string;

  /**
   * Additional guidance for this run
   */
  guidance?: string | null;

  /**
   * Override the agent default model for this run
   */
  model?: string | null;
}

export interface RunWatchParams {
  /**
   * HTTPS URL to receive completion callback
   */
  callbackUrl: string;
}

export declare namespace Run {
  export {
    type RunCreateResponse as RunCreateResponse,
    type RunCancelResponse as RunCancelResponse,
    type RunExecResponse as RunExecResponse,
    type RunGetDetailsResponse as RunGetDetailsResponse,
    type RunGetStatusResponse as RunGetStatusResponse,
    type RunWatchResponse as RunWatchResponse,
    type RunCreateParams as RunCreateParams,
    type RunWatchParams as RunWatchParams,
  };
}
