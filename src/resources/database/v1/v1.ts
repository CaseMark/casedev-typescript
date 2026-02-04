// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectsAPI from './projects';
import {
  ProjectCreateBranchParams,
  ProjectCreateBranchResponse,
  ProjectCreateParams,
  ProjectCreateResponse,
  ProjectDeleteResponse,
  ProjectGetConnectionParams,
  ProjectGetConnectionResponse,
  ProjectListBranchesResponse,
  ProjectListResponse,
  ProjectRetrieveResponse,
  Projects,
} from './projects';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);

  /**
   * Returns detailed database usage statistics and billing information for the
   * current billing period. Includes compute hours, storage, data transfer, and
   * branch counts with associated costs broken down by project.
   *
   * @example
   * ```ts
   * const response = await client.database.v1.getUsage();
   * ```
   */
  getUsage(options?: RequestOptions): APIPromise<V1GetUsageResponse> {
    return this._client.get('/database/v1/usage', options);
  }
}

export interface V1GetUsageResponse {
  period?: V1GetUsageResponse.Period;

  /**
   * Current pricing rates
   */
  pricing?: V1GetUsageResponse.Pricing;

  /**
   * Total number of projects with usage
   */
  projectCount?: number;

  /**
   * Usage breakdown by project
   */
  projects?: Array<V1GetUsageResponse.Project>;

  /**
   * Aggregated totals across all projects
   */
  totals?: V1GetUsageResponse.Totals;
}

export namespace V1GetUsageResponse {
  export interface Period {
    /**
     * End of the billing period
     */
    end?: string;

    /**
     * Start of the billing period
     */
    start?: string;
  }

  /**
   * Current pricing rates
   */
  export interface Pricing {
    /**
     * Cost per branch per month in dollars
     */
    branchPerMonth?: number;

    /**
     * Cost per compute unit hour in dollars
     */
    computePerCuHour?: number;

    /**
     * Number of free branches included
     */
    freeBranches?: number;

    /**
     * Cost per GB of storage per month in dollars
     */
    storagePerGbMonth?: number;

    /**
     * Cost per GB of data transfer in dollars
     */
    transferPerGb?: number;
  }

  export interface Project {
    id?: string;

    branchCount?: number;

    computeCuHours?: number;

    costs?: Project.Costs;

    lastUpdated?: string;

    projectId?: string;

    projectName?: string | null;

    storageGbMonths?: number;

    transferGb?: number;
  }

  export namespace Project {
    export interface Costs {
      branches?: string;

      compute?: string;

      storage?: string;

      total?: string;

      transfer?: string;
    }
  }

  /**
   * Aggregated totals across all projects
   */
  export interface Totals {
    /**
     * Total branch cost formatted as dollars
     */
    branchCostDollars?: string;

    /**
     * Total compute cost formatted as dollars
     */
    computeCostDollars?: string;

    /**
     * Total compute unit hours
     */
    computeCuHours?: number;

    /**
     * Total storage cost formatted as dollars
     */
    storageCostDollars?: string;

    /**
     * Total storage in GB-months
     */
    storageGbMonths?: number;

    /**
     * Total number of branches
     */
    totalBranches?: number;

    /**
     * Total cost formatted as dollars
     */
    totalCostDollars?: string;

    /**
     * Total transfer cost formatted as dollars
     */
    transferCostDollars?: string;

    /**
     * Total data transfer in GB
     */
    transferGb?: number;
  }
}

V1.Projects = Projects;

export declare namespace V1 {
  export { type V1GetUsageResponse as V1GetUsageResponse };

  export {
    Projects as Projects,
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
