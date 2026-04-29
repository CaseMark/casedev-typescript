// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import {
  V1,
  V1ProxyDeleteParams,
  V1ProxyGetParams,
  V1ProxyPatchParams,
  V1ProxyPostParams,
  V1ProxyPutParams,
} from './v1';

export class Worker extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Worker.V1 = V1;

export declare namespace Worker {
  export {
    V1 as V1,
    type V1ProxyDeleteParams as V1ProxyDeleteParams,
    type V1ProxyGetParams as V1ProxyGetParams,
    type V1ProxyPatchParams as V1ProxyPatchParams,
    type V1ProxyPostParams as V1ProxyPostParams,
    type V1ProxyPutParams as V1ProxyPutParams,
  };
}
