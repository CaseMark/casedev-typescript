// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import { V1, V1SyncLinkParams, V1SyncLinkResponse, V1TransferParams, V1TransferResponse } from './v1/v1';

export class Connectors extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Connectors.V1 = V1;

export declare namespace Connectors {
  export {
    V1 as V1,
    type V1SyncLinkResponse as V1SyncLinkResponse,
    type V1TransferResponse as V1TransferResponse,
    type V1SyncLinkParams as V1SyncLinkParams,
    type V1TransferParams as V1TransferParams,
  };
}
