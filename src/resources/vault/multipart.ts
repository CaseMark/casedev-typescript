// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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

export interface MultipartAbortParams {
  objectId: string;

  uploadId: string;
}

export interface MultipartGetPartURLsParams {
  objectId: string;

  parts: Array<MultipartGetPartURLsParams.Part>;

  uploadId: string;
}

export namespace MultipartGetPartURLsParams {
  export interface Part {
    partNumber: number;

    /**
     * Part size in bytes (min 5MB except final part, max 5GB).
     */
    sizeBytes: number;
  }
}

export declare namespace Multipart {
  export {
    type MultipartGetPartURLsResponse as MultipartGetPartURLsResponse,
    type MultipartAbortParams as MultipartAbortParams,
    type MultipartGetPartURLsParams as MultipartGetPartURLsParams,
  };
}
