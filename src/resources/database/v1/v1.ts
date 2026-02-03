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

export class V1 extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

V1.Projects = Projects;

export declare namespace V1 {
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
