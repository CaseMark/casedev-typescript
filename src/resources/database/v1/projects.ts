// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Creates a new serverless Postgres database project powered by Neon. Includes
   * automatic scaling, connection pooling, and a default 'main' branch with 'neondb'
   * database. Supports branching for isolated dev/staging environments. Perfect for
   * case management applications, document workflows, and litigation support
   * systems.
   *
   * @example
   * ```ts
   * const project = await client.database.v1.projects.create({
   *   name: 'litigation-docs-db',
   *   description:
   *     'Production database for litigation document management',
   *   region: 'aws-us-east-1',
   * });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/database/v1/projects', { body, ...options });
  }

  /**
   * Retrieves detailed information about a specific database project including
   * branches, databases, storage/compute metrics, connection host, and linked
   * deployments. Fetches live usage statistics from Neon API.
   *
   * @example
   * ```ts
   * const project = await client.database.v1.projects.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/database/v1/projects/${id}`, options);
  }

  /**
   * Retrieves all serverless Postgres database projects for the authenticated
   * organization. Includes storage and compute metrics, plus linked deployments from
   * Thurgood apps and Compute instances.
   *
   * @example
   * ```ts
   * const projects = await client.database.v1.projects.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/database/v1/projects', options);
  }

  /**
   * Permanently deletes a database project from Neon and marks it as deleted in
   * Case.dev. This action cannot be undone and will destroy all data including
   * branches and databases. Use with caution.
   *
   * @example
   * ```ts
   * const project = await client.database.v1.projects.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProjectDeleteResponse> {
    return this._client.delete(path`/database/v1/projects/${id}`, options);
  }

  /**
   * Creates a new branch from the specified parent branch (or default 'main'
   * branch). Branches provide instant point-in-time clones of your database for
   * isolated development, staging, testing, or feature work. Perfect for testing
   * schema changes, running migrations safely, or creating ephemeral preview
   * environments.
   *
   * @example
   * ```ts
   * const response =
   *   await client.database.v1.projects.createBranch('id', {
   *     name: 'staging',
   *     parentBranchId: 'branch_main_123',
   *   });
   * ```
   */
  createBranch(
    id: string,
    body: ProjectCreateBranchParams,
    options?: RequestOptions,
  ): APIPromise<ProjectCreateBranchResponse> {
    return this._client.post(path`/database/v1/projects/${id}/branches`, { body, ...options });
  }

  /**
   * Retrieves the PostgreSQL connection URI for a database project. Supports
   * selecting specific branches and pooled vs direct connections. Connection strings
   * include credentials and should be stored securely. Use for configuring
   * applications and deployment environments.
   *
   * @example
   * ```ts
   * const response =
   *   await client.database.v1.projects.getConnection('id');
   * ```
   */
  getConnection(
    id: string,
    query: ProjectGetConnectionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectGetConnectionResponse> {
    return this._client.get(path`/database/v1/projects/${id}/connection`, { query, ...options });
  }

  /**
   * Retrieves all branches for a database project. Branches enable isolated
   * development and testing environments with instant point-in-time cloning. Each
   * branch includes the default branch and any custom branches created for staging,
   * testing, or feature development.
   *
   * @example
   * ```ts
   * const response =
   *   await client.database.v1.projects.listBranches('id');
   * ```
   */
  listBranches(id: string, options?: RequestOptions): APIPromise<ProjectListBranchesResponse> {
    return this._client.get(path`/database/v1/projects/${id}/branches`, options);
  }
}

export interface ProjectCreateResponse {
  /**
   * Project ID
   */
  id: string;

  /**
   * Project creation timestamp
   */
  createdAt: string;

  /**
   * Default 'main' branch details
   */
  defaultBranch: ProjectCreateResponse.DefaultBranch;

  /**
   * Project name
   */
  name: string;

  /**
   * PostgreSQL major version
   */
  pgVersion: number;

  /**
   * AWS region
   */
  region: string;

  /**
   * Project status
   */
  status: 'active' | 'suspended' | 'deleted';

  /**
   * Project description
   */
  description?: string | null;
}

export namespace ProjectCreateResponse {
  /**
   * Default 'main' branch details
   */
  export interface DefaultBranch {
    /**
     * Branch ID
     */
    id?: string;

    /**
     * Branch name
     */
    name?: string;
  }
}

export interface ProjectRetrieveResponse {
  /**
   * Project ID
   */
  id: string;

  /**
   * All branches in this project
   */
  branches: Array<ProjectRetrieveResponse.Branch>;

  /**
   * Total compute time consumed in seconds
   */
  computeTimeSeconds: number;

  /**
   * Database connection hostname (masked for security)
   */
  connectionHost: string;

  /**
   * Project creation timestamp
   */
  createdAt: string;

  /**
   * Databases in the default branch
   */
  databases: Array<ProjectRetrieveResponse.Database>;

  /**
   * Linked deployments using this database
   */
  linkedDeployments: Array<ProjectRetrieveResponse.LinkedDeployment>;

  /**
   * Project name
   */
  name: string;

  /**
   * PostgreSQL major version
   */
  pgVersion: number;

  /**
   * AWS region
   */
  region: string;

  /**
   * Project status
   */
  status: 'active' | 'suspended' | 'deleted';

  /**
   * Current storage usage in bytes
   */
  storageSizeBytes: number;

  /**
   * Project last update timestamp
   */
  updatedAt: string;

  /**
   * Project description
   */
  description?: string | null;
}

export namespace ProjectRetrieveResponse {
  export interface Branch {
    /**
     * Branch ID
     */
    id?: string;

    /**
     * Branch creation timestamp
     */
    createdAt?: string;

    /**
     * Whether this is the default branch
     */
    isDefault?: boolean;

    /**
     * Branch name
     */
    name?: string;

    /**
     * Branch status
     */
    status?: string;
  }

  export interface Database {
    /**
     * Database ID
     */
    id?: string;

    /**
     * Database name
     */
    name?: string;

    /**
     * Database owner role name
     */
    ownerName?: string;
  }

  export interface LinkedDeployment {
    /**
     * Deployment ID
     */
    id?: string;

    /**
     * Environment variable name for connection string
     */
    envVarName?: string;

    /**
     * Deployment name
     */
    name?: string;

    /**
     * Deployment type
     */
    type?: 'thurgood' | 'compute';

    /**
     * Deployment URL
     */
    url?: string;
  }
}

export interface ProjectListResponse {
  projects: Array<ProjectListResponse.Project>;
}

export namespace ProjectListResponse {
  export interface Project {
    /**
     * Project ID
     */
    id?: string;

    /**
     * Total compute time consumed in seconds
     */
    computeTimeSeconds?: number;

    /**
     * Project creation timestamp
     */
    createdAt?: string;

    /**
     * Project description
     */
    description?: string | null;

    /**
     * Linked application deployments using this database
     */
    linkedDeployments?: Array<Project.LinkedDeployment>;

    /**
     * Project name
     */
    name?: string;

    /**
     * PostgreSQL major version
     */
    pgVersion?: number;

    /**
     * AWS region where database is deployed
     */
    region?: string;

    /**
     * Current project status
     */
    status?: 'active' | 'suspended' | 'deleted';

    /**
     * Current storage usage in bytes
     */
    storageSizeBytes?: number;

    /**
     * Project last update timestamp
     */
    updatedAt?: string;
  }

  export namespace Project {
    export interface LinkedDeployment {
      /**
       * Deployment ID
       */
      id?: string;

      /**
       * Deployment name
       */
      name?: string;

      /**
       * Type of deployment
       */
      type?: 'thurgood' | 'compute';

      /**
       * Deployment URL (for Thurgood apps)
       */
      url?: string;
    }
  }
}

export interface ProjectDeleteResponse {
  /**
   * Confirmation message
   */
  message: string;

  /**
   * Deletion success indicator
   */
  success: boolean;
}

export interface ProjectCreateBranchResponse {
  /**
   * Branch ID
   */
  id: string;

  /**
   * Branch creation timestamp
   */
  createdAt: string;

  /**
   * Whether this is the default branch (always false for new branches)
   */
  isDefault: boolean;

  /**
   * Branch name
   */
  name: string;

  /**
   * Parent branch ID
   */
  parentBranchId: string | null;

  /**
   * Branch status
   */
  status: string;
}

export interface ProjectGetConnectionResponse {
  /**
   * Branch name for this connection
   */
  branch: string;

  /**
   * PostgreSQL connection string (includes credentials)
   */
  connectionUri: string;

  /**
   * Whether this is a pooled connection
   */
  pooled: boolean;
}

export interface ProjectListBranchesResponse {
  branches: Array<ProjectListBranchesResponse.Branch>;
}

export namespace ProjectListBranchesResponse {
  export interface Branch {
    /**
     * Branch ID
     */
    id?: string;

    /**
     * Branch creation timestamp
     */
    createdAt?: string;

    /**
     * Whether this is the default branch
     */
    isDefault?: boolean;

    /**
     * Branch name
     */
    name?: string;

    /**
     * Parent branch ID (null for default branch)
     */
    parentBranchId?: string | null;

    /**
     * Branch status
     */
    status?: string;

    /**
     * Branch last update timestamp
     */
    updatedAt?: string;
  }
}

export interface ProjectCreateParams {
  /**
   * Project name (letters, numbers, hyphens, underscores only)
   */
  name: string;

  /**
   * Optional project description
   */
  description?: string;

  /**
   * AWS region for database deployment
   */
  region?:
    | 'aws-us-east-1'
    | 'aws-us-east-2'
    | 'aws-us-west-2'
    | 'aws-eu-central-1'
    | 'aws-eu-west-1'
    | 'aws-eu-west-2'
    | 'aws-ap-southeast-1'
    | 'aws-ap-southeast-2';
}

export interface ProjectCreateBranchParams {
  /**
   * Branch name (letters, numbers, hyphens, underscores only)
   */
  name: string;

  /**
   * Parent branch ID to clone from (defaults to main branch)
   */
  parentBranchId?: string;
}

export interface ProjectGetConnectionParams {
  /**
   * Branch name (defaults to 'main')
   */
  branch?: string;

  /**
   * Use pooled connection (PgBouncer)
   */
  pooled?: boolean;
}

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectCreateBranchResponse as ProjectCreateBranchResponse,
    type ProjectGetConnectionResponse as ProjectGetConnectionResponse,
    type ProjectListBranchesResponse as ProjectListBranchesResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectCreateBranchParams as ProjectCreateBranchParams,
    type ProjectGetConnectionParams as ProjectGetConnectionParams,
  };
}
