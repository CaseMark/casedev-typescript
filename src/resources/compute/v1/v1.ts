// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnvironmentsAPI from './environments';
import {
  EnvironmentCreateParams,
  EnvironmentCreateResponse,
  EnvironmentDeleteResponse,
  Environments,
} from './environments';
import * as FunctionsAPI from './functions';
import { Functions } from './functions';
import * as InvokeAPI from './invoke';
import { Invoke } from './invoke';
import * as RunsAPI from './runs';
import { Runs } from './runs';
import * as SecretsAPI from './secrets';
import {
  SecretCreateParams,
  SecretCreateResponse,
  SecretDeleteGroupParams,
  SecretListParams,
  SecretRetrieveGroupParams,
  SecretUpdateGroupParams,
  Secrets,
} from './secrets';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  environments: EnvironmentsAPI.Environments = new EnvironmentsAPI.Environments(this._client);
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  invoke: InvokeAPI.Invoke = new InvokeAPI.Invoke(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);

  /**
   * Returns current pricing for GPU instances. Prices are fetched in real-time and
   * include a 20% platform fee. For detailed instance types and availability, use
   * GET /compute/v1/instance-types.
   *
   * @example
   * ```ts
   * await client.compute.v1.getPricing();
   * ```
   */
  getPricing(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/compute/v1/pricing', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns detailed compute usage statistics and billing information for your
   * organization. Includes GPU and CPU hours, total runs, costs, and breakdowns by
   * environment. Use optional query parameters to filter by specific year and month.
   *
   * @example
   * ```ts
   * await client.compute.v1.getUsage();
   * ```
   */
  getUsage(query: V1GetUsageParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/compute/v1/usage', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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
V1.Functions = Functions;
V1.Invoke = Invoke;
V1.Runs = Runs;
V1.Secrets = Secrets;

export declare namespace V1 {
  export { type V1GetUsageParams as V1GetUsageParams };

  export {
    Environments as Environments,
    type EnvironmentCreateResponse as EnvironmentCreateResponse,
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
  };

  export { Functions as Functions };

  export { Invoke as Invoke };

  export { Runs as Runs };

  export {
    Secrets as Secrets,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteGroupParams as SecretDeleteGroupParams,
    type SecretRetrieveGroupParams as SecretRetrieveGroupParams,
    type SecretUpdateGroupParams as SecretUpdateGroupParams,
  };
}
