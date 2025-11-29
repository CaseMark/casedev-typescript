// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  /**
   * Create a new action definition for multi-step workflow automation. Actions can
   * be defined using YAML or JSON format and support complex workflows including
   * document processing, data extraction, and analysis pipelines.
   */
  create(body: V1CreateParams, options?: RequestOptions): APIPromise<V1CreateResponse> {
    return this._client.post('/actions/v1', { body, ...options });
  }

  /**
   * Retrieve a specific action definition by ID. Actions are reusable workflow
   * components that can perform tasks like document analysis, data extraction, or
   * API integrations. Only actions belonging to your organization can be accessed.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/actions/v1/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all action definitions for your organization. Actions are reusable
   * automation components that can perform tasks like document processing, data
   * extraction, and workflow execution.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/actions/v1', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Permanently deletes an action definition from your organization. This will
   * remove all workflow steps and configurations associated with the action.
   * **Warning:** This operation cannot be undone.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/actions/v1/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute a multi-step action workflow with the provided input data. Actions can
   * run synchronously (returning results immediately) or asynchronously (with
   * webhook notifications when complete).
   */
  execute(id: string, body: V1ExecuteParams, options?: RequestOptions): APIPromise<V1ExecuteResponse> {
    return this._client.post(path`/actions/v1/${id}/execute`, { body, ...options });
  }

  /**
   * Retrieve the status and results of a specific action execution. Returns
   * execution details including current status, results, error messages, and
   * execution metadata.
   */
  retrieveExecution(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/actions/v1/executions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1CreateResponse {
  id?: string;

  createdAt?: string;

  createdBy?: string;

  definition?: unknown;

  description?: string;

  isActive?: boolean;

  name?: string;

  organizationId?: string;

  updatedAt?: string;

  version?: number;

  webhookEndpointId?: string;
}

export interface V1ExecuteResponse {
  /**
   * Execution duration in milliseconds (only for completed executions)
   */
  duration_ms?: number;

  /**
   * Unique identifier for this execution
   */
  execution_id?: string;

  /**
   * Human-readable status message
   */
  message?: string;

  /**
   * Final output (only for synchronous/completed executions)
   */
  output?: { [key: string]: unknown };

  /**
   * Current status of the execution
   */
  status?: 'completed' | 'running';

  /**
   * Results from each step (only for synchronous/completed executions)
   */
  step_results?: Array<{ [key: string]: unknown }>;

  /**
   * Whether webhook notifications are configured
   */
  webhook_configured?: boolean;
}

export interface V1CreateParams {
  /**
   * Action definition in YAML string, JSON string, or JSON object format
   */
  definition: string | unknown;

  /**
   * Unique name for the action
   */
  name: string;

  /**
   * Optional description of the action's purpose
   */
  description?: string;

  /**
   * Optional webhook endpoint ID for action completion notifications
   */
  webhook_id?: string;
}

export interface V1ExecuteParams {
  /**
   * Input data for the action execution
   */
  input: { [key: string]: unknown };

  /**
   * Optional webhook endpoint ID to override the action's default webhook
   */
  webhook_id?: string;
}

export declare namespace V1 {
  export {
    type V1CreateResponse as V1CreateResponse,
    type V1ExecuteResponse as V1ExecuteResponse,
    type V1CreateParams as V1CreateParams,
    type V1ExecuteParams as V1ExecuteParams,
  };
}
