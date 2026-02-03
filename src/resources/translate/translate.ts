// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import {
  V1,
  V1DetectParams,
  V1DetectResponse,
  V1ListLanguagesParams,
  V1ListLanguagesResponse,
  V1TranslateParams,
  V1TranslateResponse,
} from './v1';

export class Translate extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Translate.V1 = V1;

export declare namespace Translate {
  export {
    V1 as V1,
    type V1DetectResponse as V1DetectResponse,
    type V1ListLanguagesResponse as V1ListLanguagesResponse,
    type V1TranslateResponse as V1TranslateResponse,
    type V1DetectParams as V1DetectParams,
    type V1ListLanguagesParams as V1ListLanguagesParams,
    type V1TranslateParams as V1TranslateParams,
  };
}
