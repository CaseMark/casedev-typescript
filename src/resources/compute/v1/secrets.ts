// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Creates a new secret group in a compute environment. Secret groups organize
   * related secrets for use in serverless functions and workflows. If no environment
   * is specified, the group is created in the default environment.
   *
   * **Features:**
   *
   * - Organize secrets by logical groups (e.g., database, APIs, third-party
   *   services)
   * - Environment-based isolation
   * - Validation of group names
   * - Conflict detection for existing groups
   *
   * @example
   * ```ts
   * const secret = await client.compute.v1.secrets.create({
   *   name: 'name',
   * });
   * ```
   */
  create(body: SecretCreateParams, options?: RequestOptions): APIPromise<SecretCreateResponse> {
    return this._client.post('/compute/v1/secrets', { body, ...options });
  }

  /**
   * Retrieve all secret groups for a compute environment. Secret groups organize
   * related secrets (API keys, credentials, etc.) that can be securely accessed by
   * compute jobs during execution.
   *
   * @example
   * ```ts
   * await client.compute.v1.secrets.list();
   * ```
   */
  list(query: SecretListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/compute/v1/secrets', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete an entire secret group or a specific key within a secret group. When
   * deleting a specific key, the remaining secrets in the group are preserved. When
   * deleting the entire group, all secrets and the group itself are removed.
   *
   * @example
   * ```ts
   * await client.compute.v1.secrets.deleteGroup('group');
   * ```
   */
  deleteGroup(
    group: string,
    params: SecretDeleteGroupParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, key } = params ?? {};
    return this._client.delete(path`/compute/v1/secrets/${group}`, {
      query: { env, key },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the keys (names) of secrets in a specified group within a compute
   * environment. For security reasons, actual secret values are not returned - only
   * the keys and metadata.
   *
   * @example
   * ```ts
   * await client.compute.v1.secrets.retrieveGroup('group');
   * ```
   */
  retrieveGroup(
    group: string,
    query: SecretRetrieveGroupParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/compute/v1/secrets/${group}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set or update secrets in a compute secret group. Secrets are encrypted with
   * AES-256-GCM. Use this to manage environment variables and API keys for your
   * compute workloads.
   *
   * @example
   * ```ts
   * await client.compute.v1.secrets.updateGroup(
   *   'litigation-apis',
   *   { secrets: { foo: 'string' } },
   * );
   * ```
   */
  updateGroup(group: string, body: SecretUpdateGroupParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/compute/v1/secrets/${group}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SecretCreateResponse {
  /**
   * Unique identifier for the secret group
   */
  id?: string;

  /**
   * Creation timestamp
   */
  createdAt?: string;

  /**
   * Description of the secret group
   */
  description?: string;

  /**
   * Name of the secret group
   */
  name?: string;
}

export interface SecretCreateParams {
  /**
   * Unique name for the secret group. Must contain only letters, numbers, hyphens,
   * and underscores.
   */
  name: string;

  /**
   * Optional description of the secret group's purpose
   */
  description?: string;

  /**
   * Environment name where the secret group will be created. Uses default
   * environment if not specified.
   */
  env?: string;
}

export interface SecretListParams {
  /**
   * Environment name to list secret groups for. If not specified, uses the default
   * environment.
   */
  env?: string;
}

export interface SecretDeleteGroupParams {
  /**
   * Environment name. If not provided, uses the default environment
   */
  env?: string;

  /**
   * Specific key to delete within the group. If not provided, the entire group is
   * deleted
   */
  key?: string;
}

export interface SecretRetrieveGroupParams {
  /**
   * Environment name. If not specified, uses the default environment
   */
  env?: string;
}

export interface SecretUpdateGroupParams {
  /**
   * Key-value pairs of secrets to set
   */
  secrets: { [key: string]: string };

  /**
   * Environment name (optional, uses default if not specified)
   */
  env?: string;
}

export declare namespace Secrets {
  export {
    type SecretCreateResponse as SecretCreateResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteGroupParams as SecretDeleteGroupParams,
    type SecretRetrieveGroupParams as SecretRetrieveGroupParams,
    type SecretUpdateGroupParams as SecretUpdateGroupParams,
  };
}
