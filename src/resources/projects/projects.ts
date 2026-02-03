// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import {
  V1,
  V1CreateEnvVarsParams,
  V1CreateParams,
  V1DeleteParams,
  V1DeleteResponse,
  V1ListEnvVarsParams,
  V1ListResponse,
} from './v1';

export class Projects extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Projects.V1 = V1;

export declare namespace Projects {
  export {
    V1 as V1,
    type V1ListResponse as V1ListResponse,
    type V1DeleteResponse as V1DeleteResponse,
    type V1CreateParams as V1CreateParams,
    type V1DeleteParams as V1DeleteParams,
    type V1CreateEnvVarsParams as V1CreateEnvVarsParams,
    type V1ListEnvVarsParams as V1ListEnvVarsParams,
  };
}
