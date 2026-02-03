// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Create a new web application project
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/applications/v1/projects', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get details of a specific web application project
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/applications/v1/projects/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all web application projects
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/applications/v1/projects', options);
  }

  /**
   * Delete a web application project
   */
  delete(
    id: string,
    params: ProjectDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { deleteFromHosting } = params ?? {};
    return this._client.delete(path`/applications/v1/projects/${id}`, {
      query: { deleteFromHosting },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Trigger a new deployment for a project.
   */
  createDeployment(
    id: string,
    body: ProjectCreateDeploymentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/applications/v1/projects/${id}/deployments`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Add a custom domain to a project
   */
  createDomain(id: string, body: ProjectCreateDomainParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/applications/v1/projects/${id}/domains`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new environment variable for a project
   */
  createEnv(id: string, body: ProjectCreateEnvParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/applications/v1/projects/${id}/env`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove a domain from a project
   */
  deleteDomain(
    domain: string,
    params: ProjectDeleteDomainParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/applications/v1/projects/${id}/domains/${domain}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete an environment variable from a project
   */
  deleteEnv(envID: string, params: ProjectDeleteEnvParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/applications/v1/projects/${id}/env/${envID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get runtime/function logs for a project
   */
  getRuntimeLogs(
    id: string,
    query: ProjectGetRuntimeLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/applications/v1/projects/${id}/runtime-logs`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List deployments for a specific project
   */
  listDeployments(
    id: string,
    query: ProjectListDeploymentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/applications/v1/projects/${id}/deployments`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all domains configured for a project
   */
  listDomains(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/applications/v1/projects/${id}/domains`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all environment variables for a project (values are hidden unless
   * decrypt=true)
   */
  listEnv(
    id: string,
    query: ProjectListEnvParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/applications/v1/projects/${id}/env`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProjectListResponse {
  projects?: Array<ProjectListResponse.Project>;
}

export namespace ProjectListResponse {
  export interface Project {
    id?: string;

    createdAt?: string;

    domains?: Array<Project.Domain>;

    framework?: string;

    gitBranch?: string;

    gitRepo?: string;

    name?: string;

    status?: string;

    updatedAt?: string;

    vercelProjectId?: string;
  }

  export namespace Project {
    export interface Domain {
      id?: string;

      domain?: string;

      isPrimary?: boolean;

      isVerified?: boolean;
    }
  }
}

export interface ProjectCreateParams {
  /**
   * GitHub repository URL or "owner/repo"
   */
  gitRepo: string;

  /**
   * Project name
   */
  name: string;

  /**
   * Custom build command
   */
  buildCommand?: string;

  /**
   * Environment variables to set on the project
   */
  environmentVariables?: Array<ProjectCreateParams.EnvironmentVariable>;

  /**
   * Framework (e.g., "nextjs", "remix", "astro")
   */
  framework?: string;

  /**
   * Git branch to deploy
   */
  gitBranch?: string;

  /**
   * Custom install command
   */
  installCommand?: string;

  /**
   * Build output directory
   */
  outputDirectory?: string;

  /**
   * Root directory of the project
   */
  rootDirectory?: string;
}

export namespace ProjectCreateParams {
  export interface EnvironmentVariable {
    /**
     * Environment variable name
     */
    key: string;

    /**
     * Deployment targets for this variable
     */
    target: Array<'production' | 'preview' | 'development'>;

    /**
     * Environment variable value
     */
    value: string;

    /**
     * Variable type
     */
    type?: 'plain' | 'encrypted' | 'secret';
  }
}

export interface ProjectDeleteParams {
  /**
   * Also delete the project from hosting (default: true)
   */
  deleteFromHosting?: boolean;
}

export interface ProjectCreateDeploymentParams {
  /**
   * Additional environment variables to set or update before deployment
   */
  environmentVariables?: Array<ProjectCreateDeploymentParams.EnvironmentVariable>;
}

export namespace ProjectCreateDeploymentParams {
  export interface EnvironmentVariable {
    /**
     * Environment variable name
     */
    key: string;

    /**
     * Deployment targets for this variable
     */
    target: Array<'production' | 'preview' | 'development'>;

    /**
     * Environment variable value
     */
    value: string;

    /**
     * Variable type
     */
    type?: 'plain' | 'encrypted' | 'secret';
  }
}

export interface ProjectCreateDomainParams {
  /**
   * Domain name to add
   */
  domain: string;

  /**
   * Git branch to associate with this domain
   */
  gitBranch?: string;
}

export interface ProjectCreateEnvParams {
  /**
   * Environment variable name
   */
  key: string;

  /**
   * Deployment targets for this variable
   */
  target: Array<'production' | 'preview' | 'development'>;

  /**
   * Environment variable value
   */
  value: string;

  /**
   * Specific git branch (for preview deployments)
   */
  gitBranch?: string;

  /**
   * Variable type
   */
  type?: 'plain' | 'encrypted' | 'secret';
}

export interface ProjectDeleteDomainParams {
  /**
   * Project ID
   */
  id: string;
}

export interface ProjectDeleteEnvParams {
  /**
   * Project ID
   */
  id: string;
}

export interface ProjectGetRuntimeLogsParams {
  /**
   * Maximum number of logs to return
   */
  limit?: number;
}

export interface ProjectListDeploymentsParams {
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

export interface ProjectListEnvParams {
  /**
   * Whether to decrypt and return values (requires appropriate permissions)
   */
  decrypt?: boolean;
}

export declare namespace Projects {
  export {
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectCreateDeploymentParams as ProjectCreateDeploymentParams,
    type ProjectCreateDomainParams as ProjectCreateDomainParams,
    type ProjectCreateEnvParams as ProjectCreateEnvParams,
    type ProjectDeleteDomainParams as ProjectDeleteDomainParams,
    type ProjectDeleteEnvParams as ProjectDeleteEnvParams,
    type ProjectGetRuntimeLogsParams as ProjectGetRuntimeLogsParams,
    type ProjectListDeploymentsParams as ProjectListDeploymentsParams,
    type ProjectListEnvParams as ProjectListEnvParams,
  };
}
