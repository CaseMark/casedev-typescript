// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import { V1, V1CreateParams } from './v1';

export class Operator extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Operator.V1 = V1;

export declare namespace Operator {
  export { V1 as V1, type V1CreateParams as V1CreateParams };
}
