// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import { V1, V1ExecuteParams, V1ExecuteResponse, V1ListParams } from './v1';

export class Workflows extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Workflows.V1 = V1;

export declare namespace Workflows {
  export {
    V1 as V1,
    type V1ExecuteResponse as V1ExecuteResponse,
    type V1ListParams as V1ListParams,
    type V1ExecuteParams as V1ExecuteParams,
  };
}
