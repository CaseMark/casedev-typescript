// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Import and export between provider folders and vaults
 */
export class Tokens extends APIResource {
  /**
   * Bound application management API key only. Returns a 256-bit opaque bearer
   * secret once; valid for 15 minutes, connector data-plane only. No refresh token.
   * At most 4 overlapping credentials and 20 mints/minute per installation. The
   * application server must derive tenant identity; this is not browser
   * authentication.
   */
  create(id: string, body: TokenCreateParams, options?: RequestOptions): APIPromise<TokenCreateResponse> {
    return this._client.post(path`/connectors/v1/installations/${id}/tokens`, { body, ...options });
  }

  /**
   * Issuing API key only; installation credentials cannot revoke or mint
   * credentials. Immediate revocation on the next request.
   */
  revoke(tokenID: string, params: TokenRevokeParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/connectors/v1/installations/${id}/tokens/${tokenID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TokenCreateResponse {
  id: string;

  token: string;

  expires_at: string;

  installation_id: string;
}

export interface TokenCreateParams {
  scopes: Array<'read' | 'write'>;
}

export interface TokenRevokeParams {
  id: string;
}

export declare namespace Tokens {
  export {
    type TokenCreateResponse as TokenCreateResponse,
    type TokenCreateParams as TokenCreateParams,
    type TokenRevokeParams as TokenRevokeParams,
  };
}
