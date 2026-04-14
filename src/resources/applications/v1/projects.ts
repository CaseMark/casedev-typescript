// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Creates a new application project, validates GitHub access, provisions a default
   * case.dev domain, and starts the deployment workflow. The initial response
   * returns as soon as the workflow is queued so clients can poll for progress.
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/applications/v1/projects', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns project details, domains, and recent deployment information for one
   * application project. Use this endpoint when you need a single record with
   * hosting metadata for a details view.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/applications/v1/projects/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists application projects for the authenticated organization. Use enrich=true
   * to include additional hosting metadata for projects linked to Vercel.
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/applications/v1/projects', { query, ...options });
  }

  /**
   * Soft-deletes an application project from Case.dev. By default it also removes
   * the linked hosting project; set deleteFromHosting=false to keep the external
   * hosting resources intact.
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
   * Starts a new deployment for an existing project using its saved repository and
   * hosting configuration. Any environment variables passed in the request are
   * merged into the deployment workflow before the build starts.
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
   * Lists deployments for one project in the authenticated organization. If the
   * hosting project has not been created yet, this endpoint returns an empty list
   * with a progress message instead of failing.
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
  /**
   * Projects and deployed apps visible to the organization
   */
  projects?: Array<ProjectListResponse.Project>;
}

export namespace ProjectListResponse {
  export interface Project {
    /**
     * Project identifier
     */
    id?: string;

    /**
     * When the project record was created
     */
    createdAt?: string;

    /**
     * Custom or generated domains assigned to the project
     */
    domains?: Array<Project.Domain>;

    /**
     * Detected or configured application framework
     */
    framework?: string;

    /**
     * Default Git branch used for deployments
     */
    gitBranch?: string;

    /**
     * Connected Git repository in owner/repo format
     */
    gitRepo?: string;

    /**
     * Project display name
     */
    name?: string;

    /**
     * Current project deployment status
     */
    status?: string;

    /**
     * When the project record was last updated
     */
    updatedAt?: string;

    /**
     * Hosting provider project ID, when linked
     */
    vercelProjectId?: string;
  }

  export namespace Project {
    export interface Domain {
      /**
       * Domain record identifier
       */
      id?: string;

      /**
       * Hostname assigned to the project
       */
      domain?: string;

      /**
       * Whether this is the primary project domain
       */
      isPrimary?: boolean;

      /**
       * Whether the domain has been verified by the hosting provider
       */
      isVerified?: boolean;
    }
  }
}

export interface ProjectCreateParams {
  /**
   * GitHub repository URL or owner/repo identifier
   */
  gitRepo: string;

  /**
   * Human-readable project name
   */
  name: string;

  /**
   * Custom build command to override the framework default
   */
  buildCommand?: string;

  /**
   * Environment variables to create before the first deployment
   */
  environmentVariables?: Array<ProjectCreateParams.EnvironmentVariable>;

  /**
   * Framework preset for the hosting project, such as nextjs or remix
   */
  framework?: string;

  /**
   * Git branch to deploy. Defaults to main.
   */
  gitBranch?: string;

  /**
   * Custom install command to override the framework default
   */
  installCommand?: string;

  /**
   * Build output directory relative to the project root
   */
  outputDirectory?: string;

  /**
   * Repository subdirectory that contains the app to deploy
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
     * Deployment targets that should receive this variable
     */
    target: Array<'production' | 'preview' | 'development'>;

    /**
     * Environment variable value
     */
    value: string;

    /**
     * Storage mode for the environment variable value
     */
    type?: 'plain' | 'encrypted' | 'secret';
  }
}

export interface ProjectListParams {
  /**
   * Whether to include additional hosting metadata from Vercel
   */
  enrich?: boolean;

  /**
   * Maximum number of projects to return from each backing source
   */
  limit?: number;
}

export interface ProjectDeleteParams {
  /**
   * Whether to also delete the linked hosting project. Defaults to true.
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
     * Deployment targets that should receive this variable
     */
    target: Array<'production' | 'preview' | 'development'>;

    /**
     * Environment variable value
     */
    value: string;

    /**
     * Storage mode for the environment variable value
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
   * Deployment state to filter by
   */
  state?: string;

  /**
   * Deployment target to filter by
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
    type ProjectListParams as ProjectListParams,
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
