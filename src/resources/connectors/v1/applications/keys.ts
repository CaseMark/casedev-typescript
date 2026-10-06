// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Import and export between provider folders and vaults
 */
export class Keys extends APIResource {
  /**
   * Requires an owner/admin Clerk session. Explicitly binds a non-system connector
   * API key to one application. Allows multiple keys for controlled rotation. Does
   * not grant Vault access or mint credentials.
   */
  bind(keyID: string, params: KeyBindParams, options?: RequestOptions): APIPromise<KeyBindResponse> {
    const { id } = params;
    return this._client.put(path`/connectors/v1/applications/${id}/keys/${keyID}`, options);
  }

  /**
   * Requires an owner/admin Clerk session. Immediately invalidates tokens minted
   * through this binding. Rebinding later does not revive those tokens.
   */
  revoke(keyID: string, params: KeyRevokeParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/connectors/v1/applications/${id}/keys/${keyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface KeyBindResponse {
  id: string;

  api_key_id: string;

  application_id: string;
}

export interface KeyBindParams {
  id: string;
}

export interface KeyRevokeParams {
  id: string;
}

export declare namespace Keys {
  export {
    type KeyBindResponse as KeyBindResponse,
    type KeyBindParams as KeyBindParams,
    type KeyRevokeParams as KeyRevokeParams,
  };
}
