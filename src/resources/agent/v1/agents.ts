// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Creates a new agent definition with a scoped API key. The agent can then be used
   * to create and execute runs.
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentCreateResponse> {
    return this._client.post('/agent/v1/agents', { body, ...options });
  }

  /**
   * Retrieves a single agent definition by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AgentRetrieveResponse> {
    return this._client.get(path`/agent/v1/agents/${id}`, options);
  }

  /**
   * Updates an agent definition. Only provided fields are changed.
   */
  update(id: string, body: AgentUpdateParams, options?: RequestOptions): APIPromise<AgentUpdateResponse> {
    return this._client.patch(path`/agent/v1/agents/${id}`, { body, ...options });
  }

  /**
   * Lists all active agents for the authenticated organization.
   */
  list(options?: RequestOptions): APIPromise<AgentListResponse> {
    return this._client.get('/agent/v1/agents', options);
  }

  /**
   * Soft-deletes an agent and revokes its scoped API key.
   */
  delete(id: string, options?: RequestOptions): APIPromise<AgentDeleteResponse> {
    return this._client.delete(path`/agent/v1/agents/${id}`, options);
  }
}

export interface AgentCreateResponse {
  id?: string;

  createdAt?: string;

  description?: string | null;

  disabledTools?: Array<string> | null;

  enabledTools?: Array<string> | null;

  instructions?: string;

  model?: string;

  name?: string;

  sandbox?: unknown | null;

  updatedAt?: string;

  vaultIds?: Array<string> | null;
}

export interface AgentRetrieveResponse {
  id?: string;

  createdAt?: string;

  description?: string | null;

  disabledTools?: Array<string> | null;

  enabledTools?: Array<string> | null;

  instructions?: string;

  isActive?: boolean;

  model?: string;

  name?: string;

  sandbox?: unknown | null;

  updatedAt?: string;

  vaultIds?: Array<string> | null;
}

export interface AgentUpdateResponse {
  id?: string;

  createdAt?: string;

  description?: string | null;

  disabledTools?: Array<string> | null;

  enabledTools?: Array<string> | null;

  instructions?: string;

  isActive?: boolean;

  model?: string;

  name?: string;

  sandbox?: unknown | null;

  updatedAt?: string;

  vaultIds?: Array<string> | null;
}

export interface AgentListResponse {
  agents?: Array<AgentListResponse.Agent>;
}

export namespace AgentListResponse {
  export interface Agent {
    id?: string;

    createdAt?: string;

    description?: string | null;

    isActive?: boolean;

    model?: string;

    name?: string;

    updatedAt?: string;

    vaultIds?: Array<string> | null;
  }
}

export interface AgentDeleteResponse {
  ok?: boolean;
}

export interface AgentCreateParams {
  /**
   * System instructions that define agent behavior
   */
  instructions: string;

  /**
   * Display name for the agent
   */
  name: string;

  /**
   * Optional description of the agent
   */
  description?: string;

  /**
   * Denylist of tools the agent cannot use
   */
  disabledTools?: Array<string> | null;

  /**
   * Allowlist of tools the agent can use
   */
  enabledTools?: Array<string> | null;

  /**
   * LLM model identifier (e.g. anthropic/claude-sonnet-4.6). Defaults to
   * anthropic/claude-sonnet-4.6
   */
  model?: string;

  /**
   * Custom sandbox configuration (cpu, memoryMiB)
   */
  sandbox?: AgentCreateParams.Sandbox | null;

  /**
   * Restrict agent to specific vault IDs
   */
  vaultIds?: Array<string> | null;
}

export namespace AgentCreateParams {
  /**
   * Custom sandbox configuration (cpu, memoryMiB)
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

export interface AgentUpdateParams {
  description?: string;

  disabledTools?: Array<string> | null;

  enabledTools?: Array<string> | null;

  instructions?: string;

  model?: string;

  name?: string;

  sandbox?: unknown | null;

  vaultIds?: Array<string> | null;
}

export declare namespace Agents {
  export {
    type AgentCreateResponse as AgentCreateResponse,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
  };
}
