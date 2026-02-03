// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import { V1, V1AnnotateParams, V1ConvertParams } from './v1';

export class Superdoc extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Superdoc.V1 = V1;

export declare namespace Superdoc {
  export { V1 as V1, type V1AnnotateParams as V1AnnotateParams, type V1ConvertParams as V1ConvertParams };
}
