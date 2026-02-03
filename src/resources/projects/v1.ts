// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  /**
   * Create a new project for deployments
   */
  create(body: V1CreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/projects/v1', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a project by ID with its deployments and settings
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/v1/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all projects for the organization
   */
  list(options?: RequestOptions): APIPromise<V1ListResponse> {
    return this._client.get('/projects/v1', options);
  }

  /**
   * Delete a project and all its associated deployments, environment variables, and
   * domains.
   */
  delete(
    id: string,
    params: V1DeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1DeleteResponse> {
    const { deleteDeployments } = params ?? {};
    return this._client.delete(path`/projects/v1/${id}`, { query: { deleteDeployments }, ...options });
  }

  /**
   * Create or update environment variables for a project
   */
  createEnvVars(id: string, body: V1CreateEnvVarsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/v1/${id}/env-vars`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all environment variables for a project, grouped by environment
   */
  listEnvVars(
    id: string,
    query: V1ListEnvVarsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/projects/v1/${id}/env-vars`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1ListResponse {
  projects?: Array<V1ListResponse.Project>;
}

export namespace V1ListResponse {
  export interface Project {
    id?: string;

    createdAt?: string;

    framework?: string;

    name?: string;

    slug?: string;

    sourceType?: 'github' | 'thurgood';
  }
}

export interface V1DeleteResponse {
  id?: string;

  deploymentsDeleted?: number;

  message?: string;

  resourcesDeleted?: V1DeleteResponse.ResourcesDeleted;

  status?: string;
}

export namespace V1DeleteResponse {
  export interface ResourcesDeleted {
    bundles?: number;

    codeBuild?: number;

    routingEntries?: number;

    s3Sources?: number;
  }
}

export interface V1CreateParams {
  /**
   * Project name
   */
  name: string;

  sourceType: 'github' | 'thurgood';

  buildCommand?: string;

  defaultMemory?: string;

  defaultVcpu?: string;

  /**
   * Project description
   */
  description?: string;

  framework?: string;

  githubBranch?: string;

  /**
   * GitHub repo (owner/repo)
   */
  githubRepo?: string;

  installCommand?: string;

  rootDirectory?: string;

  s3SourceBucket?: string;

  s3SourcePrefix?: string;

  startCommand?: string;

  thurgoodSessionId?: string;
}

export interface V1DeleteParams {
  /**
   * Whether to also delete all deployments (default: true)
   */
  deleteDeployments?: boolean;
}

export interface V1CreateEnvVarsParams {
  envVars?: Array<V1CreateEnvVarsParams.EnvVar>;
}

export namespace V1CreateEnvVarsParams {
  export interface EnvVar {
    environment: 'production' | 'preview' | 'development' | 'shared';

    key: string;

    value: string;

    description?: string;

    isSecret?: boolean;
  }
}

export interface V1ListEnvVarsParams {
  environment?: 'production' | 'preview' | 'development' | 'shared';
}

export declare namespace V1 {
  export {
    type V1ListResponse as V1ListResponse,
    type V1DeleteResponse as V1DeleteResponse,
    type V1CreateParams as V1CreateParams,
    type V1DeleteParams as V1DeleteParams,
    type V1CreateEnvVarsParams as V1CreateEnvVarsParams,
    type V1ListEnvVarsParams as V1ListEnvVarsParams,
  };
}
