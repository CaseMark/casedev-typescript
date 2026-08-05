// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Import and export between provider folders (Google Drive) and vaults
 */
export class Links extends APIResource {
  /**
   * Retrieve one link: state, counts, and embedded active_run/last_run. Poll this
   * after POST /transfer.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/connectors/v1/links/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Pause/resume a link (state "paused" | "ready"), change its mode (synced -> once
   * is the sync downgrade), or edit its policy in place.
   */
  update(id: string, body: LinkUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/connectors/v1/links/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List transfer links, filterable by vault, connection, direction, mode, and
   * state.
   */
  list(query: LinkListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/connectors/v1/links', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a link and its ledger. vault_docs=delete additionally removes the vault
   * documents an import link brought in (default: keep).
   */
  delete(
    id: string,
    params: LinkDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { vault_docs } = params ?? {};
    return this._client.delete(path`/connectors/v1/links/${id}`, {
      query: { vault_docs },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Per-file transfer ledger for a link: provider item, vault object, path, content
   * version, state, and error.
   */
  listObjects(
    id: string,
    query: LinkListObjectsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/connectors/v1/links/${id}/objects`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LinkUpdateParams {
  mode?: 'once' | 'synced';

  policy?: unknown;

  state?: 'paused' | 'ready';
}

export interface LinkListParams {
  connection_id?: string;

  direction?: 'import' | 'export';

  mode?: 'once' | 'synced';

  pair_id?: string;

  state?: 'ready' | 'running' | 'active' | 'paused' | 'orphaned' | 'error';

  vault_id?: string;
}

export interface LinkDeleteParams {
  vault_docs?: 'keep' | 'delete';
}

export interface LinkListObjectsParams {
  cursor?: string;

  state?: 'pending' | 'transferring' | 'ingesting' | 'synced' | 'skipped' | 'failed' | 'tombstoned';
}

export declare namespace Links {
  export {
    type LinkUpdateParams as LinkUpdateParams,
    type LinkListParams as LinkListParams,
    type LinkDeleteParams as LinkDeleteParams,
    type LinkListObjectsParams as LinkListObjectsParams,
  };
}
