// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as VaultsAPI from './vaults';
import { VaultGrantParams, VaultRevokeParams, Vaults } from './vaults';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Import and export between provider folders (Google Drive) and vaults
 */
export class Installations extends APIResource {
  vaults: VaultsAPI.Vaults = new VaultsAPI.Vaults(this._client);

  /**
   * List application installations (tenants) in this organization.
   */
  list(query: InstallationListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/connectors/v1/installations', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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

export interface InstallationListParams {
  application?: string;

  external_tenant_id?: string;
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

Installations.Vaults = Vaults;

export declare namespace Installations {
  export {
    type InstallationListParams as InstallationListParams,
    type InstallationEnsureParams as InstallationEnsureParams,
  };

  export {
    Vaults as Vaults,
    type VaultGrantParams as VaultGrantParams,
    type VaultRevokeParams as VaultRevokeParams,
  };
}
