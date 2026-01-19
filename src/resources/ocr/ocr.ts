// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import {
  V1,
  V1DownloadParams,
  V1DownloadResponse,
  V1ProcessParams,
  V1ProcessResponse,
  V1RetrieveResponse,
} from './v1';

export class Ocr extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Ocr.V1 = V1;

export declare namespace Ocr {
  export {
    V1 as V1,
    type V1RetrieveResponse as V1RetrieveResponse,
    type V1DownloadResponse as V1DownloadResponse,
    type V1ProcessResponse as V1ProcessResponse,
    type V1DownloadParams as V1DownloadParams,
    type V1ProcessParams as V1ProcessParams,
  };
}
