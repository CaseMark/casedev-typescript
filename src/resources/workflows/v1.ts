// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  /**
   * Create a new visual workflow with nodes, edges, and trigger configuration.
   *
   * @example
   * ```ts
   * const v1 = await client.workflows.v1.create({
   *   name: 'Document Processor',
   * });
   * ```
   */
  create(body: V1CreateParams, options?: RequestOptions): APIPromise<V1CreateResponse> {
    return this._client.post('/workflows/v1', { body, ...options });
  }

  /**
   * Get a specific workflow by ID with full configuration.
   *
   * @example
   * ```ts
   * const v1 = await client.workflows.v1.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<V1RetrieveResponse> {
    return this._client.get(path`/workflows/v1/${id}`, options);
  }

  /**
   * Update an existing workflow's configuration.
   *
   * @example
   * ```ts
   * const v1 = await client.workflows.v1.update('id');
   * ```
   */
  update(id: string, body: V1UpdateParams, options?: RequestOptions): APIPromise<V1UpdateResponse> {
    return this._client.patch(path`/workflows/v1/${id}`, { body, ...options });
  }

  /**
   * List all workflows for the authenticated organization.
   *
   * @example
   * ```ts
   * const v1s = await client.workflows.v1.list();
   * ```
   */
  list(query: V1ListParams | null | undefined = {}, options?: RequestOptions): APIPromise<V1ListResponse> {
    return this._client.get('/workflows/v1', { query, ...options });
  }

  /**
   * Delete a workflow and all associated data.
   *
   * @example
   * ```ts
   * const v1 = await client.workflows.v1.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<V1DeleteResponse> {
    return this._client.delete(path`/workflows/v1/${id}`, options);
  }

  /**
   * Deploy a workflow to Modal compute. Returns a webhook URL and secret for
   * triggering the workflow.
   *
   * @example
   * ```ts
   * const response = await client.workflows.v1.deploy('id');
   * ```
   */
  deploy(id: string, options?: RequestOptions): APIPromise<V1DeployResponse> {
    return this._client.post(path`/workflows/v1/${id}/deploy`, options);
  }

  /**
   * Execute a workflow for testing. This runs the workflow synchronously without
   * deployment.
   *
   * @example
   * ```ts
   * const response = await client.workflows.v1.execute('id');
   * ```
   */
  execute(
    id: string,
    params: V1ExecuteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<V1ExecuteResponse> {
    const { body } = params ?? {};
    return this._client.post(path`/workflows/v1/${id}/execute`, { body: body, ...options });
  }

  /**
   * List all executions for a specific workflow.
   *
   * @example
   * ```ts
   * const response = await client.workflows.v1.listExecutions(
   *   'id',
   * );
   * ```
   */
  listExecutions(
    id: string,
    query: V1ListExecutionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1ListExecutionsResponse> {
    return this._client.get(path`/workflows/v1/${id}/executions`, { query, ...options });
  }

  /**
   * Get detailed information about a workflow execution.
   *
   * @example
   * ```ts
   * const response =
   *   await client.workflows.v1.retrieveExecution('id');
   * ```
   */
  retrieveExecution(id: string, options?: RequestOptions): APIPromise<V1RetrieveExecutionResponse> {
    return this._client.get(path`/workflows/v1/executions/${id}`, options);
  }

  /**
   * Stop a deployed workflow and release its webhook URL.
   *
   * @example
   * ```ts
   * const response = await client.workflows.v1.undeploy('id');
   * ```
   */
  undeploy(id: string, options?: RequestOptions): APIPromise<V1UndeployResponse> {
    return this._client.delete(path`/workflows/v1/${id}/deploy`, options);
  }
}

export interface V1CreateResponse {
  id?: string;

  createdAt?: string;

  description?: string;

  edges?: Array<unknown>;

  name?: string;

  nodes?: Array<unknown>;

  triggerType?: string;

  updatedAt?: string;

  visibility?: string;
}

export interface V1RetrieveResponse {
  id?: string;

  createdAt?: string;

  deployedAt?: string;

  deploymentUrl?: string;

  description?: string;

  edges?: Array<unknown>;

  name?: string;

  nodes?: Array<unknown>;

  triggerConfig?: unknown;

  triggerType?: string;

  updatedAt?: string;

  visibility?: string;
}

export interface V1UpdateResponse {
  id?: string;

  name?: string;

  updatedAt?: string;
}

export interface V1ListResponse {
  limit?: number;

  offset?: number;

  total?: number;

  workflows?: Array<V1ListResponse.Workflow>;
}

export namespace V1ListResponse {
  export interface Workflow {
    id?: string;

    createdAt?: string;

    deployedAt?: string;

    description?: string;

    name?: string;

    triggerType?: string;

    updatedAt?: string;

    visibility?: string;
  }
}

export interface V1DeleteResponse {
  message?: string;

  success?: boolean;
}

export interface V1DeployResponse {
  message?: string;

  success?: boolean;

  /**
   * Only returned once - save this!
   */
  webhookSecret?: string;

  webhookUrl?: string;
}

export interface V1ExecuteResponse {
  duration?: number;

  error?: string;

  executionId?: string;

  outputs?: unknown;

  status?: 'completed' | 'failed';
}

export interface V1ListExecutionsResponse {
  executions?: Array<V1ListExecutionsResponse.Execution>;
}

export namespace V1ListExecutionsResponse {
  export interface Execution {
    id?: string;

    completedAt?: string;

    durationMs?: number;

    startedAt?: string;

    status?: string;

    triggerType?: string;
  }
}

export interface V1RetrieveExecutionResponse {
  id?: string;

  completedAt?: string;

  durationMs?: number;

  error?: string;

  input?: unknown;

  output?: unknown;

  startedAt?: string;

  status?: string;

  triggerType?: string;

  workflowId?: string;
}

export interface V1UndeployResponse {
  message?: string;

  success?: boolean;
}

export interface V1CreateParams {
  /**
   * Workflow name
   */
  name: string;

  /**
   * Workflow description
   */
  description?: string;

  /**
   * React Flow edges
   */
  edges?: Array<unknown>;

  /**
   * React Flow nodes
   */
  nodes?: Array<unknown>;

  /**
   * Trigger configuration
   */
  triggerConfig?: unknown;

  triggerType?: 'manual' | 'webhook' | 'schedule' | 'vault_upload';

  /**
   * Workflow visibility
   */
  visibility?: 'private' | 'org' | 'public';
}

export interface V1UpdateParams {
  description?: string;

  edges?: Array<unknown>;

  name?: string;

  nodes?: Array<unknown>;

  triggerConfig?: unknown;

  triggerType?: 'manual' | 'webhook' | 'schedule' | 'vault_upload';

  visibility?: 'private' | 'org' | 'public';
}

export interface V1ListParams {
  /**
   * Maximum number of results
   */
  limit?: number;

  /**
   * Offset for pagination
   */
  offset?: number;

  /**
   * Filter by visibility
   */
  visibility?: 'private' | 'org' | 'public';
}

export interface V1ExecuteParams {
  /**
   * Input data to pass to the workflow trigger
   */
  body?: unknown;
}

export interface V1ListExecutionsParams {
  limit?: number;

  status?: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
}

export declare namespace V1 {
  export {
    type V1CreateResponse as V1CreateResponse,
    type V1RetrieveResponse as V1RetrieveResponse,
    type V1UpdateResponse as V1UpdateResponse,
    type V1ListResponse as V1ListResponse,
    type V1DeleteResponse as V1DeleteResponse,
    type V1DeployResponse as V1DeployResponse,
    type V1ExecuteResponse as V1ExecuteResponse,
    type V1ListExecutionsResponse as V1ListExecutionsResponse,
    type V1RetrieveExecutionResponse as V1RetrieveExecutionResponse,
    type V1UndeployResponse as V1UndeployResponse,
    type V1CreateParams as V1CreateParams,
    type V1UpdateParams as V1UpdateParams,
    type V1ListParams as V1ListParams,
    type V1ExecuteParams as V1ExecuteParams,
    type V1ListExecutionsParams as V1ListExecutionsParams,
  };
}
