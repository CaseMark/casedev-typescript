// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Web application deployment management
 */
export class Deployments extends APIResource {
  /**
   * Creates a deployment for an existing project by fetching repository files from
   * GitHub and uploading them to the hosting provider. Use ref to deploy a branch,
   * tag, or commit other than the project default branch.
   */
  create(body: DeploymentCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/applications/v1/deployments', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns deployment details for one project in the authenticated organization.
   * Set includeLogs=true to include recent build output in the response.
   */
  retrieve(id: string, query: DeploymentRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/applications/v1/deployments/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists recent deployments for one project in the authenticated organization. Use
   * the optional filters to narrow results by target or deployment state.
   */
  list(query: DeploymentListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/applications/v1/deployments', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancels a running deployment after verifying that the referenced project belongs
   * to the authenticated organization. Use this when a build is stuck,
   * misconfigured, or no longer needed.
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
   * Returns build and runtime log events for a deployment after verifying access to
   * the owning project. Use this when you need detailed output for a failed or
   * in-progress build.
   */
  getLogs(id: string, query: DeploymentGetLogsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/applications/v1/deployments/${id}/logs`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the current status of a deployment without fetching full build logs. Use
   * this endpoint for lightweight polling while a deployment is building or waiting
   * to become ready.
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
   * Project ID to deploy
   */
  projectId: string;

  /**
   * Git branch, tag, or commit to deploy. Defaults to the project branch.
   */
  ref?: string;

  /**
   * Deployment target environment
   */
  target?: 'production' | 'preview';
}

export interface DeploymentRetrieveParams {
  /**
   * Project ID used to verify access to the deployment
   */
  projectId: string;

  /**
   * Whether to include build logs in the response
   */
  includeLogs?: boolean;
}

export interface DeploymentListParams {
  /**
   * Project ID to list deployments for
   */
  projectId: string;

  /**
   * Maximum number of deployments to return
   */
  limit?: number;

  /**
   * Deployment state to filter by
   */
  state?: string;

  /**
   * Deployment target to filter by
   */
  target?: 'production' | 'staging';
}

export interface DeploymentCancelParams {
  /**
   * Project ID used to verify access to the deployment
   */
  projectId: string;
}

export interface DeploymentGetLogsParams {
  /**
   * Project ID used to verify access to the deployment
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
