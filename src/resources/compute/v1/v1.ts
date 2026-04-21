// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnvironmentsAPI from './environments';
import {
  EnvironmentCreateParams,
  EnvironmentCreateResponse,
  EnvironmentDeleteResponse,
  EnvironmentListResponse,
  EnvironmentRetrieveResponse,
  EnvironmentSetDefaultResponse,
  Environments,
} from './environments';
import * as SecretsAPI from './secrets';
import {
  SecretCreateParams,
  SecretCreateResponse,
  SecretDeleteGroupParams,
  SecretDeleteGroupResponse,
  SecretListParams,
  SecretListResponse,
  SecretRetrieveGroupParams,
  SecretRetrieveGroupResponse,
  SecretUpdateGroupParams,
  SecretUpdateGroupResponse,
  Secrets,
} from './secrets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Serverless GPU and CPU infrastructure
 */
export class V1 extends APIResource {
  environments: EnvironmentsAPI.Environments = new EnvironmentsAPI.Environments(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);

  /**
   * Returns detailed compute usage statistics and billing information for your
   * organization. Includes GPU and CPU hours, total runs, costs, and breakdowns by
   * environment. Use optional query parameters to filter by specific year and month.
   *
   * @example
   * ```ts
   * const response = await client.compute.v1.getUsage();
   * ```
   */
  getUsage(
    query: V1GetUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1GetUsageResponse> {
    return this._client.get('/compute/v1/usage', { query, ...options });
  }
}

export interface V1GetUsageResponse {
  byEnvironment?: Array<V1GetUsageResponse.ByEnvironment>;

  period?: V1GetUsageResponse.Period;

  summary?: V1GetUsageResponse.Summary;
}

export namespace V1GetUsageResponse {
  export interface ByEnvironment {
    environment?: string;

    totalCostCents?: number;

    totalCostFormatted?: string;

    totalCpuSeconds?: number;

    totalGpuSeconds?: number;

    totalRuns?: number;
  }

  export interface Period {
    month?: number;

    monthName?: string;

    year?: number;
  }

  export interface Summary {
    totalCostCents?: number;

    totalCostFormatted?: string;

    totalCpuHours?: number;

    totalGpuHours?: number;

    totalRuns?: number;
  }
}

export interface V1GetUsageParams {
  /**
   * Month to filter usage data (1-12, defaults to current month)
   */
  month?: number;

  /**
   * Year to filter usage data (defaults to current year)
   */
  year?: number;
}

V1.Environments = Environments;
V1.Secrets = Secrets;

export declare namespace V1 {
  export { type V1GetUsageResponse as V1GetUsageResponse, type V1GetUsageParams as V1GetUsageParams };

  export {
    Environments as Environments,
    type EnvironmentCreateResponse as EnvironmentCreateResponse,
    type EnvironmentRetrieveResponse as EnvironmentRetrieveResponse,
    type EnvironmentListResponse as EnvironmentListResponse,
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentSetDefaultResponse as EnvironmentSetDefaultResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
  };

  export {
    Secrets as Secrets,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteGroupResponse as SecretDeleteGroupResponse,
    type SecretRetrieveGroupResponse as SecretRetrieveGroupResponse,
    type SecretUpdateGroupResponse as SecretUpdateGroupResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteGroupParams as SecretDeleteGroupParams,
    type SecretRetrieveGroupParams as SecretRetrieveGroupParams,
    type SecretUpdateGroupParams as SecretUpdateGroupParams,
  };
}
