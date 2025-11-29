// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import { V1, V1CreateParams, V1CreateResponse, V1ExecuteParams, V1ExecuteResponse } from './v1';

export class Actions extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Actions.V1 = V1;

export declare namespace Actions {
  export {
    V1 as V1,
    type V1CreateResponse as V1CreateResponse,
    type V1ExecuteResponse as V1ExecuteResponse,
    type V1CreateParams as V1CreateParams,
    type V1ExecuteParams as V1ExecuteParams,
  };
}
