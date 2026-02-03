// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import {
  V1,
  V1CreateParams,
  V1CreateResponse,
  V1DeleteAllParams,
  V1DeleteAllResponse,
  V1DeleteResponse,
  V1ListParams,
  V1ListResponse,
  V1RetrieveResponse,
  V1SearchParams,
  V1SearchResponse,
} from './v1';

export class Memory extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Memory.V1 = V1;

export declare namespace Memory {
  export {
    V1 as V1,
    type V1CreateResponse as V1CreateResponse,
    type V1RetrieveResponse as V1RetrieveResponse,
    type V1ListResponse as V1ListResponse,
    type V1DeleteResponse as V1DeleteResponse,
    type V1DeleteAllResponse as V1DeleteAllResponse,
    type V1SearchResponse as V1SearchResponse,
    type V1CreateParams as V1CreateParams,
    type V1ListParams as V1ListParams,
    type V1DeleteAllParams as V1DeleteAllParams,
    type V1SearchParams as V1SearchParams,
  };
}
