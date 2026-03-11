// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { Stream } from '../../../core/streaming';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create, manage, and execute AI agents with tool access, sandbox environments, and async run workflows
 */
export class Run extends APIResource {
  /**
   * Creates a run in queued state. Call POST /agent/v1/run/:id/exec to start
   * execution.
   */
  create(body: RunCreateParams, options?: RequestOptions): APIPromise<RunCreateResponse> {
    return this._client.post('/agent/v1/run', { body, ...options });
  }

  /**
   * Lists agent runs for the authenticated organization. Supports filtering by
   * agent, status, and cursor-based pagination.
   */
  list(query: RunListParams | null | undefined = {}, options?: RequestOptions): APIPromise<RunListResponse> {
    return this._client.get('/agent/v1/run', { query, ...options });
  }

  /**
   * Cancels a running or queued run. Idempotent — cancelling a finished run returns
   * its current status.
   */
  cancel(id: string, options?: RequestOptions): APIPromise<RunCancelResponse> {
    return this._client.post(path`/agent/v1/run/${id}/cancel`, options);
  }

  /**
   * Streams real-time run events over SSE. Supports replay using Last-Event-ID.
   */
  events(
    id: string,
    query: RunEventsParams | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Stream<RunEventsResponse>> {
    return this._client.get(path`/agent/v1/run/${id}/events`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<RunEventsResponse>>;
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

  objectIds?: Array<string> | null;

  status?: 'queued';
}

export interface RunListResponse {
  hasMore?: boolean;

  /**
   * Pass as cursor to fetch the next page
   */
  nextCursor?: string | null;

  runs?: Array<RunListResponse.Run>;
}

export namespace RunListResponse {
  export interface Run {
    id?: string;

    agentId?: string;

    completedAt?: string | null;

    createdAt?: string;

    model?: string | null;

    /**
     * Truncated to first 200 characters
     */
    prompt?: string;

    startedAt?: string | null;

    status?: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';
  }
}

export interface RunCancelResponse {
  id?: string;

  /**
   * Present if run was already finished
   */
  message?: string;

  status?: 'cancelled' | 'completed' | 'failed';
}

export type RunEventsResponse = string;

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

  /**
   * Modal sandbox ID (available once sandbox is created)
   */
  modalSandboxId?: string | null;

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

  /**
   * Durable workflow run ID
   */
  workflowId?: string | null;
}

export namespace RunGetDetailsResponse {
  /**
   * Final output from the agent
   */
  export interface Result {
    /**
     * Compact agent-facing result summary and execution issues
     */
    finalResponse?: Result.FinalResponse | null;

    /**
     * Sandbox execution logs (OpenCode server + runner script)
     */
    logs?: Result.Logs | null;

    output?: string;

    outputObjectIds?: Array<string>;
  }

  export namespace Result {
    /**
     * Compact agent-facing result summary and execution issues
     */
    export interface FinalResponse {
      createdObjectIds?: Array<string>;

      issues?: Array<string>;

      summary?: string;
    }

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

    entries?: Array<Usage.Entry>;

    inputTokens?: number;

    model?: string;

    outputTokens?: number;

    summary?: Usage.Summary | null;

    toolCalls?: number;
  }

  export namespace Usage {
    export interface Entry {
      id?: string;

      completionTokens?: number | null;

      costMicros?: number;

      endpoint?: string | null;

      kind?: 'llm' | 'api';

      metadata?: unknown;

      method?: string | null;

      model?: string | null;

      promptTokens?: number | null;

      service?: string;

      statusCode?: number | null;

      timestamp?: string;

      totalTokens?: number | null;
    }

    export interface Summary {
      costMicros?: number;

      totalInputTokens?: number;

      totalOutputTokens?: number;

      totalTokens?: number;
    }
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
   * HTTPS callback URL to receive a notification when the run completes. Registered
   * atomically with the run — eliminates the race condition of calling /watch after
   * /exec. Additional watchers can still be added via POST /run/:id/watch.
   */
  callbackUrl?: string | null;

  /**
   * Additional guidance for this run
   */
  guidance?: string | null;

  /**
   * Override the agent default model for this run
   */
  model?: string | null;

  /**
   * Scope this run to specific vault object IDs. The agent will only be able to
   * access these objects during execution.
   */
  objectIds?: Array<string> | null;
}

export interface RunListParams {
  /**
   * Filter by agent ID
   */
  agentId?: string;

  /**
   * Pagination cursor (run ID from previous page). Returns runs created before this
   * run.
   */
  cursor?: string;

  /**
   * Maximum number of runs to return (default 50, max 250)
   */
  limit?: number;

  /**
   * Filter by run status
   */
  status?: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';
}

export interface RunEventsParams {
  /**
   * Replay events after this sequence number
   */
  lastEventId?: number;
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
    type RunListResponse as RunListResponse,
    type RunCancelResponse as RunCancelResponse,
    type RunEventsResponse as RunEventsResponse,
    type RunExecResponse as RunExecResponse,
    type RunGetDetailsResponse as RunGetDetailsResponse,
    type RunGetStatusResponse as RunGetStatusResponse,
    type RunWatchResponse as RunWatchResponse,
    type RunCreateParams as RunCreateParams,
    type RunListParams as RunListParams,
    type RunEventsParams as RunEventsParams,
    type RunWatchParams as RunWatchParams,
  };
}
