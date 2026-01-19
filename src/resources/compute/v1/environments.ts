// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Environments extends APIResource {
  /**
   * Creates a new compute environment for running serverless workloads. Each
   * environment gets its own isolated namespace with a unique domain for hosting
   * applications and APIs. The first environment created becomes the default
   * environment for the organization.
   *
   * @example
   * ```ts
   * const environment =
   *   await client.compute.v1.environments.create({
   *     name: 'document-review-prod',
   *   });
   * ```
   */
  create(body: EnvironmentCreateParams, options?: RequestOptions): APIPromise<EnvironmentCreateResponse> {
    return this._client.post('/compute/v1/environments', { body, ...options });
  }

  /**
   * Retrieve a specific compute environment by name. Returns environment
   * configuration including status, domain, and metadata for your serverless compute
   * infrastructure.
   *
   * @example
   * ```ts
   * const environment =
   *   await client.compute.v1.environments.retrieve('name');
   * ```
   */
  retrieve(name: string, options?: RequestOptions): APIPromise<EnvironmentRetrieveResponse> {
    return this._client.get(path`/compute/v1/environments/${name}`, options);
  }

  /**
   * Retrieve all compute environments for your organization. Environments provide
   * isolated execution contexts for running code and workflows.
   *
   * @example
   * ```ts
   * const environments =
   *   await client.compute.v1.environments.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<EnvironmentListResponse> {
    return this._client.get('/compute/v1/environments', options);
  }

  /**
   * Permanently delete a compute environment and all its associated resources. This
   * will stop all running deployments and clean up related configurations. The
   * default environment cannot be deleted if other environments exist.
   *
   * @example
   * ```ts
   * const environment =
   *   await client.compute.v1.environments.delete(
   *     'litigation-processing',
   *   );
   * ```
   */
  delete(name: string, options?: RequestOptions): APIPromise<EnvironmentDeleteResponse> {
    return this._client.delete(path`/compute/v1/environments/${name}`, options);
  }

  /**
   * Sets a compute environment as the default for the organization. Only one
   * environment can be default at a time - setting a new default will automatically
   * unset the previous one.
   *
   * @example
   * ```ts
   * const response =
   *   await client.compute.v1.environments.setDefault(
   *     'prod-legal-docs',
   *   );
   * ```
   */
  setDefault(name: string, options?: RequestOptions): APIPromise<EnvironmentSetDefaultResponse> {
    return this._client.post(path`/compute/v1/environments/${name}/default`, options);
  }
}

export interface EnvironmentCreateResponse {
  /**
   * Unique environment identifier
   */
  id?: string;

  /**
   * Environment creation timestamp
   */
  createdAt?: string;

  /**
   * Unique domain for this environment
   */
  domain?: string;

  /**
   * Whether this is the default environment
   */
  isDefault?: boolean;

  /**
   * Environment name
   */
  name?: string;

  /**
   * URL-friendly slug derived from name
   */
  slug?: string;

  /**
   * Environment status
   */
  status?: 'active' | 'inactive';
}

export interface EnvironmentRetrieveResponse {
  /**
   * Unique environment identifier
   */
  id?: string;

  /**
   * Environment creation timestamp
   */
  createdAt?: string;

  /**
   * Environment domain URL
   */
  domain?: string;

  /**
   * Whether this is the default environment
   */
  isDefault?: boolean;

  /**
   * Environment name
   */
  name?: string;

  /**
   * URL-safe environment slug
   */
  slug?: string;

  /**
   * Environment status (active, inactive, etc.)
   */
  status?: string;

  /**
   * Environment last update timestamp
   */
  updatedAt?: string;
}

export interface EnvironmentListResponse {
  environments?: Array<EnvironmentListResponse.Environment>;
}

export namespace EnvironmentListResponse {
  export interface Environment {
    /**
     * Unique environment identifier
     */
    id?: string;

    /**
     * Environment creation timestamp
     */
    createdAt?: string;

    /**
     * Environment domain
     */
    domain?: string;

    /**
     * Whether this is the default environment
     */
    isDefault?: boolean;

    /**
     * Human-readable environment name
     */
    name?: string;

    /**
     * URL-safe environment identifier
     */
    slug?: string;

    /**
     * Environment status
     */
    status?: string;

    /**
     * Last update timestamp
     */
    updatedAt?: string;
  }
}

export interface EnvironmentDeleteResponse {
  message: string;

  success: boolean;
}

export interface EnvironmentSetDefaultResponse {
  /**
   * Unique environment identifier
   */
  id?: string;

  /**
   * Environment creation timestamp
   */
  createdAt?: string;

  /**
   * Environment domain
   */
  domain?: string;

  /**
   * Whether this is the default environment
   */
  isDefault?: boolean;

  /**
   * Environment name
   */
  name?: string;

  /**
   * URL-friendly environment identifier
   */
  slug?: string;

  /**
   * Current environment status
   */
  status?: string;

  /**
   * Last update timestamp
   */
  updatedAt?: string;
}

export interface EnvironmentCreateParams {
  /**
   * Environment name (alphanumeric, hyphens, and underscores only)
   */
  name: string;
}

export declare namespace Environments {
  export {
    type EnvironmentCreateResponse as EnvironmentCreateResponse,
    type EnvironmentRetrieveResponse as EnvironmentRetrieveResponse,
    type EnvironmentListResponse as EnvironmentListResponse,
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentSetDefaultResponse as EnvironmentSetDefaultResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
  };
}
