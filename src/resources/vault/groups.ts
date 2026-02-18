// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Create vault group
   *
   * @example
   * ```ts
   * await client.vault.groups.create();
   * ```
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/vault/groups', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update vault group
   *
   * @example
   * ```ts
   * await client.vault.groups.update('groupId');
   * ```
   */
  update(groupID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/vault/groups/${groupID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List vault groups
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
   * Delete vault group
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
