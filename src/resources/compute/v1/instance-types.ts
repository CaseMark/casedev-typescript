// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class InstanceTypes extends APIResource {
  /**
   * Retrieves all available GPU instance types with pricing, specifications, and
   * regional availability. Includes T4, A10, A100, H100, and H200 GPUs powered by
   * Lambda Labs. Perfect for AI model training, inference workloads, and legal
   * document OCR processing at scale.
   *
   * @example
   * ```ts
   * const instanceTypes =
   *   await client.compute.v1.instanceTypes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<InstanceTypeListResponse> {
    return this._client.get('/compute/v1/instance-types', options);
  }
}

export interface InstanceTypeListResponse {
  /**
   * Total number of instance types
   */
  count: number;

  instanceTypes: Array<InstanceTypeListResponse.InstanceType>;
}

export namespace InstanceTypeListResponse {
  export interface InstanceType {
    /**
     * Instance description
     */
    description?: string;

    /**
     * GPU model and count
     */
    gpu?: string;

    /**
     * Instance type identifier
     */
    name?: string;

    /**
     * Price per hour (e.g. '$1.20')
     */
    pricePerHour?: string;

    /**
     * Available regions
     */
    regionsAvailable?: Array<string>;

    specs?: InstanceType.Specs;
  }

  export namespace InstanceType {
    export interface Specs {
      /**
       * RAM in GiB
       */
      memoryGib?: number;

      /**
       * Storage in GiB
       */
      storageGib?: number;

      /**
       * Number of vCPUs
       */
      vcpus?: number;
    }
  }
}

export declare namespace InstanceTypes {
  export { type InstanceTypeListResponse as InstanceTypeListResponse };
}
