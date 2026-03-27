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
   * Creates a v2 run in queued state. Call POST /agent/v2/run/:id/exec to start
   * execution on the Daytona runtime.
   */
  create(body: RunCreateParams, options?: RequestOptions): APIPromise<RunCreateResponse> {
    return this._client.post('/agent/v2/run', { body, ...options });
  }

  /**
   * Streams real-time v2 run events over SSE with replay support.
   */
  events(
    id: string,
    query: RunEventsParams | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Stream<RunEventsResponse>> {
    return this._client.get(path`/agent/v2/run/${id}/events`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<RunEventsResponse>>;
  }

  /**
   * Starts execution of a queued v2 run. The agent runs in a durable workflow on a
   * Daytona runtime.
   */
  exec(id: string, options?: RequestOptions): APIPromise<RunExecResponse> {
    return this._client.post(path`/agent/v2/run/${id}/exec`, options);
  }

  /**
   * Full audit trail for a v2 run, with provider-neutral runtime metadata.
   */
  getDetails(id: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/agent/v2/run/${id}/details`, options);
  }

  /**
   * Lightweight status poll for a v2 run including neutral runtime metadata.
   */
  getStatus(id: string, options?: RequestOptions): APIPromise<RunGetStatusResponse> {
    return this._client.get(path`/agent/v2/run/${id}/status`, options);
  }
}

export interface RunCreateResponse {
  id?: string;

  agentId?: string;

  createdAt?: string;

  objectIds?: Array<string> | null;

  status?: 'queued';
}

export type RunEventsResponse = string;

export interface RunExecResponse {
  id?: string;

  message?: string;

  provider?: 'daytona';

  runtimeState?: 'running';

  status?: 'running';

  workflowId?: string;
}

export type RunGetDetailsResponse = unknown;

export interface RunGetStatusResponse {
  id?: string;

  completedAt?: string | null;

  durationMs?: number | null;

  provider?: string | null;

  runtimeId?: string | null;

  runtimeState?: string | null;

  startedAt?: string | null;

  status?: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';
}

export interface RunCreateParams {
  agentId: string;

  prompt: string;

  callbackUrl?: string | null;

  guidance?: string | null;

  model?: string | null;

  objectIds?: Array<string> | null;
}

export interface RunEventsParams {
  lastEventId?: number;
}

export declare namespace Run {
  export {
    type RunCreateResponse as RunCreateResponse,
    type RunEventsResponse as RunEventsResponse,
    type RunExecResponse as RunExecResponse,
    type RunGetDetailsResponse as RunGetDetailsResponse,
    type RunGetStatusResponse as RunGetStatusResponse,
    type RunCreateParams as RunCreateParams,
    type RunEventsParams as RunEventsParams,
  };
}
