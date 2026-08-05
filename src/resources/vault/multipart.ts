// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Secure document storage with semantic search and GraphRAG
 */
export class Multipart extends APIResource {
  /**
   * Abort a multipart upload and discard uploaded parts (live).
   *
   * @example
   * ```ts
   * await client.vault.multipart.abort('id', {
   *   objectId: 'objectId',
   *   uploadId: 'uploadId',
   * });
   * ```
   */
  abort(id: string, body: MultipartAbortParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/vault/${id}/multipart/abort`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Complete a multipart upload by providing the list of part numbers and ETags
   * (live). Single PUT uploads are capped at 5GB; multipart default max is 16GB
   * (configurable).
   *
   * @example
   * ```ts
   * await client.vault.multipart.complete('id', {
   *   objectId: 'objectId',
   *   parts: [{ etag: 'etag', partNumber: 1 }],
   *   sizeBytes: 1,
   *   uploadId: 'uploadId',
   * });
   * ```
   */
  complete(id: string, body: MultipartCompleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/vault/${id}/multipart/complete`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generate presigned URLs for individual multipart upload parts (live).
   *
   * @example
   * ```ts
   * const response = await client.vault.multipart.getPartURLs(
   *   'id',
   *   {
   *     objectId: 'objectId',
   *     parts: [{ partNumber: 1, sizeBytes: 1 }],
   *     uploadId: 'uploadId',
   *   },
   * );
   * ```
   */
  getPartURLs(
    id: string,
    body: MultipartGetPartURLsParams,
    options?: RequestOptions,
  ): APIPromise<MultipartGetPartURLsResponse> {
    return this._client.post(path`/vault/${id}/multipart/part-urls`, { body, ...options });
  }

  /**
   * Initiate a multipart upload for large files (>5GB). Single PUT uploads are
   * capped at 5GB; multipart default max is 16GB (configurable). Multipart uploads
   * are supported in production. Returns an uploadId and object metadata. Use part
   * URLs endpoint to upload parts and complete endpoint to finalize.
   *
   * @example
   * ```ts
   * const response = await client.vault.multipart.init('id', {
   *   contentType: 'contentType',
   *   filename: 'filename',
   *   sizeBytes: 1,
   * });
   * ```
   */
  init(id: string, body: MultipartInitParams, options?: RequestOptions): APIPromise<MultipartInitResponse> {
    return this._client.post(path`/vault/${id}/multipart/init`, { body, ...options });
  }
}

export interface MultipartGetPartURLsResponse {
  urls?: Array<MultipartGetPartURLsResponse.URL>;
}

export namespace MultipartGetPartURLsResponse {
  export interface URL {
    partNumber?: number;

    url?: string;
  }
}

export interface MultipartInitResponse {
  next_step?: string;

  objectId?: string;

  partCount?: number;

  partSizeBytes?: number;

  s3Key?: string;

  uploadId?: string;
}

export interface MultipartAbortParams {
  /**
   * Vault object ID associated with the multipart upload
   */
  objectId: string;

  /**
   * Multipart upload ID returned when the upload was initialized
   */
  uploadId: string;
}

export interface MultipartCompleteParams {
  objectId: string;

  parts: Array<MultipartCompleteParams.Part>;

  /**
   * File size in bytes (default max 16GB). Configure via
   * VAULT_MULTIPART_MAX_FILE_SIZE_BYTES.
   */
  sizeBytes: number;

  uploadId: string;
}

export namespace MultipartCompleteParams {
  export interface Part {
    etag: string;

    partNumber: number;
  }
}

export interface MultipartGetPartURLsParams {
  /**
   * Vault object ID associated with the multipart upload
   */
  objectId: string;

  /**
   * Multipart parts that need presigned upload URLs
   */
  parts: Array<MultipartGetPartURLsParams.Part>;

  /**
   * Multipart upload ID returned when the upload was initialized
   */
  uploadId: string;
}

export namespace MultipartGetPartURLsParams {
  export interface Part {
    /**
     * 1-based multipart part number
     */
    partNumber: number;

    /**
     * Part size in bytes (min 5MB except final part, max 5GB).
     */
    sizeBytes: number;
  }
}

export interface MultipartInitParams {
  /**
   * MIME type of the file
   */
  contentType: string;

  /**
   * Name of the file to upload
   */
  filename: string;

  /**
   * File size in bytes (required, default max 16GB). Configure via
   * VAULT_MULTIPART_MAX_FILE_SIZE_BYTES.
   */
  sizeBytes: number;

  /**
   * Whether to automatically process and index the file for search
   */
  auto_index?: boolean;

  /**
   * Marks the file as AI-generated work product (e.g. uploaded by an agent) rather
   * than a user-provided source document. Persisted on the object and returned by
   * object listings so clients can distinguish provenance.
   */
  is_ai_generated?: boolean;

  /**
   * Additional metadata to associate with the file
   */
  metadata?: unknown;

  /**
   * Multipart part size in bytes (min 5MB, max 5GB). Defaults to 64MB.
   */
  partSizeBytes?: number;

  /**
   * Optional folder path for hierarchy preservation
   */
  path?: string;
}

export declare namespace Multipart {
  export {
    type MultipartGetPartURLsResponse as MultipartGetPartURLsResponse,
    type MultipartInitResponse as MultipartInitResponse,
    type MultipartAbortParams as MultipartAbortParams,
    type MultipartCompleteParams as MultipartCompleteParams,
    type MultipartGetPartURLsParams as MultipartGetPartURLsParams,
    type MultipartInitParams as MultipartInitParams,
  };
}
