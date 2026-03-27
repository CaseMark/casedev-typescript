// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import { V1 } from './v1/v1';
import * as V2API from './v2/v2';
import { V2 } from './v2/v2';

export class Agent extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

Agent.V1 = V1;
Agent.V2 = V2;

export declare namespace Agent {
  export { V1 as V1 };

  export { V2 as V2 };
}
