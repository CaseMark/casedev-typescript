// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import { V1, V1CreateParams, V1CreateResponse } from './v1';

export class Webhooks extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Webhooks.V1 = V1;

export declare namespace Webhooks {
  export { V1 as V1, type V1CreateResponse as V1CreateResponse, type V1CreateParams as V1CreateParams };
}
