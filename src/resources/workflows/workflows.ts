// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import {
  V1,
  V1CreateParams,
  V1CreateResponse,
  V1DeleteResponse,
  V1DeployResponse,
  V1ExecuteParams,
  V1ExecuteResponse,
  V1ListExecutionsParams,
  V1ListExecutionsResponse,
  V1ListParams,
  V1ListResponse,
  V1RetrieveExecutionResponse,
  V1RetrieveResponse,
  V1UndeployResponse,
  V1UpdateParams,
  V1UpdateResponse,
} from './v1';

export class Workflows extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Workflows.V1 = V1;

export declare namespace Workflows {
  export {
    V1 as V1,
    type V1CreateResponse as V1CreateResponse,
    type V1RetrieveResponse as V1RetrieveResponse,
    type V1UpdateResponse as V1UpdateResponse,
    type V1ListResponse as V1ListResponse,
    type V1DeleteResponse as V1DeleteResponse,
    type V1DeployResponse as V1DeployResponse,
    type V1ExecuteResponse as V1ExecuteResponse,
    type V1ListExecutionsResponse as V1ListExecutionsResponse,
    type V1RetrieveExecutionResponse as V1RetrieveExecutionResponse,
    type V1UndeployResponse as V1UndeployResponse,
    type V1CreateParams as V1CreateParams,
    type V1UpdateParams as V1UpdateParams,
    type V1ListParams as V1ListParams,
    type V1ExecuteParams as V1ExecuteParams,
    type V1ListExecutionsParams as V1ListExecutionsParams,
  };
}
