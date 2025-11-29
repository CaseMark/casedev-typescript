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
import { FunctionGetLogsParams, FunctionListParams, Functions } from './functions';
import * as InvokeAPI from './invoke';
import { Invoke, InvokeRunParams, InvokeRunResponse } from './invoke';
import * as RunsAPI from './runs';
import { RunListParams, Runs } from './runs';
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
   * Deploy code to Case.dev's serverless compute infrastructure powered by Modal.
   * Supports Python, Dockerfile, and container image runtimes with GPU acceleration
   * for AI/ML workloads. Code is deployed as tasks (batch jobs) or services (web
   * endpoints) with automatic scaling.
   *
   * @example
   * ```ts
   * const response = await client.compute.v1.deploy({
   *   entrypointName: 'entrypointName',
   *   type: 'task',
   * });
   * ```
   */
  deploy(body: V1DeployParams, options?: RequestOptions): APIPromise<V1DeployResponse> {
    return this._client.post('/compute/v1/deploy', { body, ...options });
  }

  /**
   * Returns current pricing for GPU and CPU compute resources. This public endpoint
   * provides detailed pricing information for all available compute types, including
   * GPU instances and CPU cores, with billing model details.
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

export interface V1DeployResponse {
  /**
   * Deployment timestamp
   */
  createdAt?: string;

  /**
   * Unique deployment identifier
   */
  deploymentId?: string;

  /**
   * Environment name
   */
  environment?: string;

  /**
   * Runtime used
   */
  runtime?: string;

  /**
   * Deployment status
   */
  status?: string;

  /**
   * Service endpoint URL (for web services)
   */
  url?: string;
}

export interface V1DeployParams {
  /**
   * Function/app name (used for domain: hello → hello.org.case.systems)
   */
  entrypointName: string;

  /**
   * Deployment type: task for batch jobs, service for web endpoints
   */
  type: 'task' | 'service';

  /**
   * Python code (required for python runtime)
   */
  code?: string;

  /**
   * Runtime and resource configuration
   */
  config?: V1DeployParams.Config;

  /**
   * Dockerfile content (required for dockerfile runtime)
   */
  dockerfile?: string;

  /**
   * Python entrypoint file name
   */
  entrypointFile?: string;

  /**
   * Environment name (uses default if not specified)
   */
  environment?: string;

  /**
   * Container image name (required for image runtime, e.g.,
   * 'nvidia/cuda:12.8.1-devel-ubuntu22.04')
   */
  image?: string;

  /**
   * Runtime environment
   */
  runtime?: 'python' | 'dockerfile' | 'image';
}

export namespace V1DeployParams {
  /**
   * Runtime and resource configuration
   */
  export interface Config {
    /**
     * Add Python to image (e.g., '3.12', for image runtime)
     */
    addPython?: string;

    /**
     * Allow network access (default: false for Python, true for Docker)
     */
    allowNetwork?: boolean;

    /**
     * Container command arguments
     */
    cmd?: Array<string>;

    /**
     * Concurrent execution limit
     */
    concurrency?: number;

    /**
     * CPU core count
     */
    cpuCount?: number;

    /**
     * Cron schedule for periodic execution
     */
    cronSchedule?: string;

    /**
     * Python package dependencies (python runtime)
     */
    dependencies?: Array<string>;

    /**
     * Container entrypoint command
     */
    entrypoint?: Array<string>;

    /**
     * Environment variables
     */
    env?: { [key: string]: string };

    /**
     * Number of GPUs (for multi-GPU setups)
     */
    gpuCount?: number;

    /**
     * GPU type for acceleration
     */
    gpuType?:
      | 'cpu'
      | 'T4'
      | 'L4'
      | 'A10G'
      | 'L40S'
      | 'A100'
      | 'A100-40GB'
      | 'A100-80GB'
      | 'H100'
      | 'H200'
      | 'B200';

    /**
     * Deploy as web service (auto-set for service type)
     */
    isWebService?: boolean;

    /**
     * Memory allocation in MB
     */
    memoryMb?: number;

    /**
     * Packages to pip install (image runtime)
     */
    pipInstall?: Array<string>;

    /**
     * Port for web services
     */
    port?: number;

    /**
     * Python version (e.g., '3.11')
     */
    pythonVersion?: string;

    /**
     * Retry attempts on failure (Python only)
     */
    retries?: number;

    /**
     * Secret group names to inject
     */
    secretGroups?: Array<string>;

    /**
     * Maximum execution time
     */
    timeoutSeconds?: number;

    /**
     * Use uv for faster package installs
     */
    useUv?: boolean;

    /**
     * Number of warm instances to maintain
     */
    warmInstances?: number;

    /**
     * Working directory in container
     */
    workdir?: string;
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
  export {
    type V1DeployResponse as V1DeployResponse,
    type V1DeployParams as V1DeployParams,
    type V1GetUsageParams as V1GetUsageParams,
  };

  export {
    Environments as Environments,
    type EnvironmentCreateResponse as EnvironmentCreateResponse,
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
  };

  export {
    Functions as Functions,
    type FunctionListParams as FunctionListParams,
    type FunctionGetLogsParams as FunctionGetLogsParams,
  };

  export {
    Invoke as Invoke,
    type InvokeRunResponse as InvokeRunResponse,
    type InvokeRunParams as InvokeRunParams,
  };

  export { Runs as Runs, type RunListParams as RunListParams };

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
