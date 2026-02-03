// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Deployments extends APIResource {
  /**
   * Trigger a new deployment for a project
   */
  create(body: DeploymentCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/applications/v1/deployments', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get details of a specific deployment including build logs
   */
  retrieve(id: string, query: DeploymentRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/applications/v1/deployments/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List deployments for a project
   */
  list(query: DeploymentListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/applications/v1/deployments', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancel a running deployment
   */
  cancel(id: string, body: DeploymentCancelParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/applications/v1/deployments/${id}/cancel`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a deployment from raw file contents (for Thurgood sandbox deployments)
   */
  createFromFiles(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/applications/v1/deployments/from-files', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get build logs for a specific deployment
   */
  getLogs(id: string, query: DeploymentGetLogsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/applications/v1/deployments/${id}/logs`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the current status of a deployment
   */
  getStatus(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/applications/v1/deployments/${id}/status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Stream real-time deployment progress events via Server-Sent Events
   */
  stream(id: string, query: DeploymentStreamParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/applications/v1/deployments/${id}/stream`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DeploymentCreateParams {
  /**
   * Project ID
   */
  projectId: string;

  /**
   * Git ref (branch, tag, or commit) to deploy
   */
  ref?: string;

  /**
   * Deployment target
   */
  target?: 'production' | 'preview';
}

export interface DeploymentRetrieveParams {
  /**
   * Project ID (for authorization)
   */
  projectId: string;

  /**
   * Include build logs
   */
  includeLogs?: boolean;
}

export interface DeploymentListParams {
  /**
   * Project ID
   */
  projectId: string;

  /**
   * Maximum number of deployments to return
   */
  limit?: number;

  /**
   * Filter by deployment state
   */
  state?: string;

  /**
   * Filter by deployment target
   */
  target?: 'production' | 'staging';
}

export interface DeploymentCancelParams {
  /**
   * Project ID (for authorization)
   */
  projectId: string;
}

export interface DeploymentGetLogsParams {
  /**
   * Project ID (for authorization)
   */
  projectId: string;
}

export interface DeploymentStreamParams {
  /**
   * Project ID (for authorization)
   */
  projectId: string;

  /**
   * Resume stream from this index (for reconnection)
   */
  startIndex?: number;
}

export declare namespace Deployments {
  export {
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentCancelParams as DeploymentCancelParams,
    type DeploymentGetLogsParams as DeploymentGetLogsParams,
    type DeploymentStreamParams as DeploymentStreamParams,
  };
}
