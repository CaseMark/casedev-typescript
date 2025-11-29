// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import { V1, V1ProcessParams, V1ProcessResponse, V1WebhookParams, V1WebhookResponse } from './v1/v1';

export class Convert extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Convert.V1 = V1;

export declare namespace Convert {
  export {
    V1 as V1,
    type V1ProcessResponse as V1ProcessResponse,
    type V1WebhookResponse as V1WebhookResponse,
    type V1ProcessParams as V1ProcessParams,
    type V1WebhookParams as V1WebhookParams,
  };
}
