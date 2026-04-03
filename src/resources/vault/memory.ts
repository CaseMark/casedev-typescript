// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Secure document storage with semantic search and GraphRAG
 */
export class Memory extends APIResource {
  /**
   * Append a new file-backed memory entry to a vault.
   *
   * @example
   * ```ts
   * const memory = await client.vault.memory.create('id', {
   *   content: 'content',
   *   type: 'fact',
   * });
   * ```
   */
  create(id: string, body: MemoryCreateParams, options?: RequestOptions): APIPromise<MemoryCreateResponse> {
    return this._client.post(path`/vault/${id}/memory`, { body, ...options });
  }

  /**
   * Rewrite a file-backed vault memory entry with updated content, source, or tags.
   *
   * @example
   * ```ts
   * await client.vault.memory.update('entryId', { id: 'id' });
   * ```
   */
  update(entryID: string, params: MemoryUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.patch(path`/vault/${id}/memory/${entryID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve file-backed memory entries stored in a vault.
   *
   * @example
   * ```ts
   * const memories = await client.vault.memory.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<MemoryListResponse> {
    return this._client.get(path`/vault/${id}/memory`, options);
  }

  /**
   * Remove a file-backed memory entry from a vault.
   *
   * @example
   * ```ts
   * await client.vault.memory.delete('entryId', { id: 'id' });
   * ```
   */
  delete(entryID: string, params: MemoryDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/vault/${id}/memory/${entryID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Search file-backed vault memory using simple full-text matching over content and
   * tags.
   *
   * @example
   * ```ts
   * const response = await client.vault.memory.search('id', {
   *   query: 'query',
   * });
   * ```
   */
  search(id: string, body: MemorySearchParams, options?: RequestOptions): APIPromise<MemorySearchResponse> {
    return this._client.post(path`/vault/${id}/memory/search`, { body, ...options });
  }
}

export interface MemoryCreateResponse {
  entry?: MemoryCreateResponse.Entry;
}

export namespace MemoryCreateResponse {
  export interface Entry {
    id?: string;

    content?: string;

    created_at?: string;

    created_by?: string | null;

    source?: string | null;

    tags?: Array<string>;

    type?: string;

    updated_at?: string;
  }
}

export interface MemoryListResponse {
  entries?: Array<MemoryListResponse.Entry>;

  meta?: MemoryListResponse.Meta;
}

export namespace MemoryListResponse {
  export interface Entry {
    id?: string;

    content?: string;

    created_at?: string;

    created_by?: string | null;

    source?: string | null;

    tags?: Array<string>;

    type?: string;

    updated_at?: string;
  }

  export interface Meta {
    chars?: number;

    count?: number;

    max_chars?: number;

    updated_at?: string | null;
  }
}

export interface MemorySearchResponse {
  results?: Array<MemorySearchResponse.Result>;
}

export namespace MemorySearchResponse {
  export interface Result {
    id?: string;

    content?: string;

    created_at?: string;

    created_by?: string | null;

    source?: string | null;

    tags?: Array<string>;

    type?: string;

    updated_at?: string;
  }
}

export interface MemoryCreateParams {
  content: string;

  type: 'fact' | 'party' | 'issue' | 'deadline' | 'discovery' | 'correction' | 'preference';

  source?: string;

  tags?: Array<string>;
}

export interface MemoryUpdateParams {
  /**
   * Path param: Vault ID
   */
  id: string;

  /**
   * Body param
   */
  content?: string;

  /**
   * Body param
   */
  source?: string | null;

  /**
   * Body param
   */
  tags?: Array<string>;
}

export interface MemoryDeleteParams {
  /**
   * Vault ID
   */
  id: string;
}

export interface MemorySearchParams {
  query: string;

  limit?: number;

  tags?: Array<string>;

  types?: Array<string>;
}

export declare namespace Memory {
  export {
    type MemoryCreateResponse as MemoryCreateResponse,
    type MemoryListResponse as MemoryListResponse,
    type MemorySearchResponse as MemorySearchResponse,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryDeleteParams as MemoryDeleteParams,
    type MemorySearchParams as MemorySearchParams,
  };
}
