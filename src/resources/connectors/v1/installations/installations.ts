// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TokensAPI from './tokens';
import { TokenCreateParams, TokenCreateResponse, TokenRevokeParams, Tokens } from './tokens';
import * as VaultsAPI from './vaults';
import { VaultGrantParams, VaultRevokeParams, Vaults } from './vaults';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Import and export between provider folders and vaults
 */
export class Installations extends APIResource {
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  vaults: VaultsAPI.Vaults = new VaultsAPI.Vaults(this._client);

  /**
   * List application installations (tenants) in this organization. Returns at most
   * `limit` installations (default 200, maximum 200). When `pagination.has_more` is
   * true, replay `pagination.next_cursor` as `?cursor=` to fetch the following page.
   * Cursors are opaque and are only valid for the exact filter set and caller scope
   * they were issued under.
   */
  list(
    query: InstallationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstallationListResponse> {
    return this._client.get('/connectors/v1/installations', { query, ...options });
  }

  /**
   * Idempotently create (or return) the installation for (application,
   * external_tenant_id) in this organization. Send the returned installation id as
   * X-Case-Installation-Id on connector requests to scope them to this tenant.
   */
  ensure(body: InstallationEnsureParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/connectors/v1/installations', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InstallationListResponse {
  installations?: Array<unknown>;

  pagination?: InstallationListResponse.Pagination;
}

export namespace InstallationListResponse {
  export interface Pagination {
    has_more?: boolean;

    limit?: number;

    next_cursor?: string | null;
  }
}

export interface InstallationListParams {
  application?: string;

  /**
   * Opaque continuation cursor from `pagination.next_cursor` of the previous page.
   * Must be replayed with the same filters and scope that produced it.
   */
  cursor?: string;

  external_tenant_id?: string;

  /**
   * Installations per page (1-200). Defaults to 200.
   */
  limit?: number;
}

export interface InstallationEnsureParams {
  /**
   * Consuming application key (e.g. "p3").
   */
  application: string;

  /**
   * The application's own tenant identifier (e.g. a P3 organization id).
   */
  external_tenant_id: string;
}

Installations.Tokens = Tokens;
Installations.Vaults = Vaults;

export declare namespace Installations {
  export {
    type InstallationListResponse as InstallationListResponse,
    type InstallationListParams as InstallationListParams,
    type InstallationEnsureParams as InstallationEnsureParams,
  };

  export {
    Tokens as Tokens,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenCreateParams as TokenCreateParams,
    type TokenRevokeParams as TokenRevokeParams,
  };

  export {
    Vaults as Vaults,
    type VaultGrantParams as VaultGrantParams,
    type VaultRevokeParams as VaultRevokeParams,
  };
}
