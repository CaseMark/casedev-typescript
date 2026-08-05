// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Import and export between provider folders (Google Drive) and vaults
 */
export class Vaults extends APIResource {
  /**
   * List the vaults an installation may use, with capabilities and revocation state.
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/connectors/v1/installations/${id}/vaults`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Grant (or update) an installation's access to a vault. Re-granting a revoked
   * vault reactivates it. Import links need can_write; export links need can_read;
   * mirror deletion and purge need can_manage.
   */
  grant(vaultID: string, params: VaultGrantParams, options?: RequestOptions): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.put(path`/connectors/v1/installations/${id}/vaults/${vaultID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Revoke an installation's access to a vault. Links using the vault pause at their
   * next run; nothing is deleted.
   */
  revoke(vaultID: string, params: VaultRevokeParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/connectors/v1/installations/${id}/vaults/${vaultID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VaultGrantParams {
  /**
   * Path param
   */
  id: string;

  /**
   * Body param
   */
  can_manage?: boolean;

  /**
   * Body param
   */
  can_read?: boolean;

  /**
   * Body param
   */
  can_write?: boolean;

  /**
   * Body param
   */
  relationship?: 'owned' | 'shared';

  /**
   * Body param
   */
  source?: 'provisioning' | 'lazy_reconcile' | 'explicit_share';
}

export interface VaultRevokeParams {
  id: string;
}

export declare namespace Vaults {
  export { type VaultGrantParams as VaultGrantParams, type VaultRevokeParams as VaultRevokeParams };
}
