// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeploymentsAPI from './deployments';
import {
  DeploymentCancelParams,
  DeploymentCreateParams,
  DeploymentGetLogsParams,
  DeploymentListParams,
  DeploymentRetrieveParams,
  DeploymentStreamParams,
  Deployments,
} from './deployments';
import * as ProjectsAPI from './projects';
import {
  ProjectCreateDeploymentParams,
  ProjectCreateDomainParams,
  ProjectCreateEnvParams,
  ProjectCreateParams,
  ProjectDeleteDomainParams,
  ProjectDeleteEnvParams,
  ProjectDeleteParams,
  ProjectGetRuntimeLogsParams,
  ProjectListDeploymentsParams,
  ProjectListEnvParams,
  ProjectListResponse,
  Projects,
} from './projects';
import * as WorkflowsAPI from './workflows';
import { WorkflowGetStatusParams, Workflows } from './workflows';

export class V1 extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);
}

V1.Deployments = Deployments;
V1.Projects = Projects;
V1.Workflows = Workflows;

export declare namespace V1 {
  export {
    Deployments as Deployments,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentCancelParams as DeploymentCancelParams,
    type DeploymentGetLogsParams as DeploymentGetLogsParams,
    type DeploymentStreamParams as DeploymentStreamParams,
  };

  export {
    Projects as Projects,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectCreateDeploymentParams as ProjectCreateDeploymentParams,
    type ProjectCreateDomainParams as ProjectCreateDomainParams,
    type ProjectCreateEnvParams as ProjectCreateEnvParams,
    type ProjectDeleteDomainParams as ProjectDeleteDomainParams,
    type ProjectDeleteEnvParams as ProjectDeleteEnvParams,
    type ProjectGetRuntimeLogsParams as ProjectGetRuntimeLogsParams,
    type ProjectListDeploymentsParams as ProjectListDeploymentsParams,
    type ProjectListEnvParams as ProjectListEnvParams,
  };

  export { Workflows as Workflows, type WorkflowGetStatusParams as WorkflowGetStatusParams };
}
