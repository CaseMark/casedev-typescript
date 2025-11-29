// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
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
   * await client.compute.v1.environments.retrieve('name');
   * ```
   */
  retrieve(name: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/compute/v1/environments/${name}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all compute environments for your organization. Environments provide
   * isolated execution contexts for running code and workflows.
   *
   * @example
   * ```ts
   * await client.compute.v1.environments.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/compute/v1/environments', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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
   * await client.compute.v1.environments.setDefault(
   *   'prod-legal-docs',
   * );
   * ```
   */
  setDefault(name: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/compute/v1/environments/${name}/default`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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

export interface EnvironmentDeleteResponse {
  message: string;

  success: boolean;
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
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
  };
}
