// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Secure document storage with semantic search
 */
export class Folders extends APIResource {
  /**
   * Creates a durable empty folder and missing parents. Metadata only; no S3 objects
   * are created. Requires vault-wide write access and vault ownership.
   *
   * @example
   * ```ts
   * const folder = await client.vault.folders.create('id', {
   *   path: 'path',
   * });
   * ```
   */
  create(id: string, body: FolderCreateParams, options?: RequestOptions): APIPromise<FolderCreateResponse> {
    return this._client.post(path`/vault/${id}/folders`, { body, ...options });
  }

  /**
   * Lists durable folder paths, including empty folders. Combine with paginated
   * object paths to display imported folders. Requires vault-wide read access;
   * shared vault reads are supported.
   *
   * @example
   * ```ts
   * const folders = await client.vault.folders.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<FolderListResponse> {
    return this._client.get(path`/vault/${id}/folders`, options);
  }

  /**
   * Atomically renames or moves a folder, its empty descendants and all descendant
   * object paths. Rejects an existing destination, root and self-descendant moves,
   * and busy objects. Supports vaults with at most 25000 objects. Uses a 5-second
   * lock timeout and 30-second statement timeout. Does not transfer file bytes.
   * Requires vault-wide write access and vault ownership.
   *
   * @example
   * ```ts
   * const response = await client.vault.folders.move('id', {
   *   newPath: 'newPath',
   *   path: 'path',
   * });
   * ```
   */
  move(id: string, body: FolderMoveParams, options?: RequestOptions): APIPromise<FolderMoveResponse> {
    return this._client.patch(path`/vault/${id}/folders`, { body, ...options });
  }
}

export interface FolderCreateResponse {
  folderPaths: Array<string>;

  path: string;
}

export interface FolderListResponse {
  folderPaths: Array<string>;
}

export interface FolderMoveResponse {
  folderPaths?: Array<string>;

  movedFiles?: number;

  newPath?: string;

  path?: string;

  revision?: string;
}

export interface FolderCreateParams {
  path: string;
}

export interface FolderMoveParams {
  newPath: string;

  path: string;

  /**
   * Revision from a previous move, for safe Undo.
   */
  expectedRevision?: string;
}

export declare namespace Folders {
  export {
    type FolderCreateResponse as FolderCreateResponse,
    type FolderListResponse as FolderListResponse,
    type FolderMoveResponse as FolderMoveResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderMoveParams as FolderMoveParams,
  };
}
