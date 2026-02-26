// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Execute extends APIResource {
  /**
   * Creates an ephemeral agent and immediately executes a run. Returns the run ID
   * for polling status and results. This is the fastest way to run an agent without
   * managing agent lifecycle.
   */
  create(body: ExecuteCreateParams, options?: RequestOptions): APIPromise<ExecuteCreateResponse> {
    return this._client.post('/agent/v1/execute', { body, ...options });
  }
}

export interface ExecuteCreateResponse {
  /**
   * Ephemeral agent ID (auto-created)
   */
  agentId?: string;

  message?: string;

  /**
   * Run ID — poll /agent/v1/run/:id/status
   */
  runId?: string;

  status?: 'running';
}

export interface ExecuteCreateParams {
  /**
   * Task prompt for the agent
   */
  prompt: string;

  /**
   * Denylist of tools the agent cannot use
   */
  disabledTools?: Array<string> | null;

  /**
   * Allowlist of tools the agent can use
   */
  enabledTools?: Array<string> | null;

  /**
   * Additional context or constraints for this run
   */
  guidance?: string | null;

  /**
   * System instructions. Defaults to a general-purpose legal assistant prompt if not
   * provided.
   */
  instructions?: string;

  /**
   * LLM model identifier. Defaults to anthropic/claude-sonnet-4.6
   */
  model?: string;

  /**
   * Scope this run to specific vault object IDs. The agent will only access these
   * objects.
   */
  objectIds?: Array<string> | null;

  /**
   * Custom sandbox resources (cpu, memoryMiB)
   */
  sandbox?: ExecuteCreateParams.Sandbox | null;

  /**
   * Restrict agent to specific vault IDs
   */
  vaultIds?: Array<string> | null;
}

export namespace ExecuteCreateParams {
  /**
   * Custom sandbox resources (cpu, memoryMiB)
   */
  export interface Sandbox {
    /**
     * Number of CPUs
     */
    cpu?: number;

    /**
     * Memory in MiB
     */
    memoryMiB?: number;
  }
}

export declare namespace Execute {
  export {
    type ExecuteCreateResponse as ExecuteCreateResponse,
    type ExecuteCreateParams as ExecuteCreateParams,
  };
}
