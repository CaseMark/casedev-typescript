// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import { V1, V1CreateParams, V1ListParams, V1UpdateParams } from './v1/v1';

export class Matters extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Matters.V1 = V1;

export declare namespace Matters {
  export {
    V1 as V1,
    type V1CreateParams as V1CreateParams,
    type V1UpdateParams as V1UpdateParams,
    type V1ListParams as V1ListParams,
  };
}
