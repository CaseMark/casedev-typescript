// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Secure document storage with semantic search and GraphRAG
 */
export class Groups extends APIResource {
  /**
   * Creates a vault group for organizing vaults and applying group-scoped access
   * controls. Group-scoped API keys cannot create or manage vault groups.
   *
   * @example
   * ```ts
   * await client.vault.groups.create({ name: 'name' });
   * ```
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/vault/groups', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates a vault group for the authenticated organization. Only provided fields
   * are changed, and setting description to null removes the current description.
   *
   * @example
   * ```ts
   * await client.vault.groups.update('groupId');
   * ```
   */
  update(groupID: string, body: GroupUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/vault/groups/${groupID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists vault groups visible to the authenticated organization. Group-scoped API
   * keys only receive groups within their allowed scope.
   *
   * @example
   * ```ts
   * await client.vault.groups.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/vault/groups', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Soft-deletes a vault group that no longer has any active vaults assigned. This
   * operation is blocked when the group still contains vaults.
   *
   * @example
   * ```ts
   * await client.vault.groups.delete('groupId');
   * ```
   */
  delete(groupID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/vault/groups/${groupID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GroupCreateParams {
  /**
   * Human-readable name for the vault group
   */
  name: string;

  /**
   * Optional description of the vault group purpose
   */
  description?: string;
}

export interface GroupUpdateParams {
  /**
   * Updated vault group description. Pass null to remove the current description.
   */
  description?: string | null;

  /**
   * New human-readable name for the vault group
   */
  name?: string;
}

export declare namespace Groups {
  export { type GroupCreateParams as GroupCreateParams, type GroupUpdateParams as GroupUpdateParams };
}
