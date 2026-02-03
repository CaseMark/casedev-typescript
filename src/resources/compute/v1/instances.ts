// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Instances extends APIResource {
  /**
   * Launches a new GPU compute instance with automatic SSH key generation. Supports
   * mounting Case.dev Vaults as filesystems and configurable auto-shutdown. Instance
   * boots in ~2-5 minutes. Perfect for batch OCR processing, AI model training, and
   * intensive document analysis workloads.
   *
   * @example
   * ```ts
   * const instance = await client.compute.v1.instances.create({
   *   instanceType: 'gpu_1x_a10',
   *   name: 'ocr-batch-job',
   *   region: 'us-west-1',
   *   autoShutdownMinutes: 120,
   *   vaultIds: ['vault_abc123'],
   * });
   * ```
   */
  create(body: InstanceCreateParams, options?: RequestOptions): APIPromise<InstanceCreateResponse> {
    return this._client.post('/compute/v1/instances', { body, ...options });
  }

  /**
   * Retrieves detailed information about a GPU instance including SSH connection
   * details, vault mount scripts, real-time cost tracking, and current status. SSH
   * private key included for secure access.
   *
   * @example
   * ```ts
   * const instance = await client.compute.v1.instances.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<InstanceRetrieveResponse> {
    return this._client.get(path`/compute/v1/instances/${id}`, options);
  }

  /**
   * Retrieves all GPU compute instances for your organization with real-time status
   * updates from Lambda Labs. Includes pricing, runtime metrics, and auto-shutdown
   * configuration. Perfect for monitoring AI workloads, document processing jobs,
   * and cost tracking.
   *
   * @example
   * ```ts
   * const instances = await client.compute.v1.instances.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<InstanceListResponse> {
    return this._client.get('/compute/v1/instances', options);
  }

  /**
   * Terminates a running GPU instance, calculates final cost, and cleans up SSH
   * keys. This action is permanent and cannot be undone. All data on the instance
   * will be lost.
   *
   * @example
   * ```ts
   * const instance = await client.compute.v1.instances.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<InstanceDeleteResponse> {
    return this._client.delete(path`/compute/v1/instances/${id}`, options);
  }
}

export interface InstanceCreateResponse {
  id?: string;

  autoShutdownMinutes?: number | null;

  createdAt?: string;

  gpu?: string;

  instanceType?: string;

  message?: string;

  name?: string;

  pricePerHour?: string;

  region?: string;

  specs?: unknown;

  status?: string;

  vaults?: Array<unknown>;
}

export interface InstanceRetrieveResponse {
  id?: string;

  autoShutdownMinutes?: number | null;

  createdAt?: string;

  currentCost?: string;

  currentRuntimeSeconds?: number;

  gpu?: string;

  instanceType?: string;

  ip?: string | null;

  name?: string;

  pricePerHour?: string;

  region?: string;

  specs?: unknown;

  ssh?: InstanceRetrieveResponse.SSH | null;

  startedAt?: string | null;

  status?: string;

  vaultMounts?: unknown | null;
}

export namespace InstanceRetrieveResponse {
  export interface SSH {
    command?: string;

    host?: string;

    instructions?: Array<unknown>;

    privateKey?: string;

    user?: string;
  }
}

export interface InstanceListResponse {
  count?: number;

  instances?: Array<InstanceListResponse.Instance>;
}

export namespace InstanceListResponse {
  export interface Instance {
    id?: string;

    autoShutdownMinutes?: number | null;

    createdAt?: string;

    gpu?: string;

    instanceType?: string;

    ip?: string | null;

    name?: string;

    pricePerHour?: string;

    region?: string;

    startedAt?: string | null;

    status?: 'booting' | 'running' | 'stopping' | 'stopped' | 'terminated' | 'failed';

    totalCost?: string;

    totalRuntimeSeconds?: number;
  }
}

export interface InstanceDeleteResponse {
  id?: string;

  message?: string;

  name?: string;

  status?: string;

  totalCost?: string;

  totalRuntimeSeconds?: number;
}

export interface InstanceCreateParams {
  /**
   * GPU type (e.g., 'gpu_1x_h100_sxm5')
   */
  instanceType: string;

  /**
   * Instance name
   */
  name: string;

  /**
   * Region (e.g., 'us-west-1')
   */
  region: string;

  /**
   * Auto-shutdown timer (null = never)
   */
  autoShutdownMinutes?: number | null;

  /**
   * Vault IDs to mount
   */
  vaultIds?: Array<string>;
}

export declare namespace Instances {
  export {
    type InstanceCreateResponse as InstanceCreateResponse,
    type InstanceRetrieveResponse as InstanceRetrieveResponse,
    type InstanceListResponse as InstanceListResponse,
    type InstanceDeleteResponse as InstanceDeleteResponse,
    type InstanceCreateParams as InstanceCreateParams,
  };
}
