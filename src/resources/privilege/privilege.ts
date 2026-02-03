// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import { V1, V1DetectParams, V1DetectResponse } from './v1';

export class Privilege extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Privilege.V1 = V1;

export declare namespace Privilege {
  export { V1 as V1, type V1DetectResponse as V1DetectResponse, type V1DetectParams as V1DetectParams };
}
