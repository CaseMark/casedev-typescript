// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as KeysAPI from './keys';
import { KeyBindParams, KeyBindResponse, KeyRevokeParams, Keys } from './keys';

export class Applications extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

Applications.Keys = Keys;

export declare namespace Applications {
  export {
    Keys as Keys,
    type KeyBindResponse as KeyBindResponse,
    type KeyBindParams as KeyBindParams,
    type KeyRevokeParams as KeyRevokeParams,
  };
}
