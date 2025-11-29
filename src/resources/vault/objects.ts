// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Objects extends APIResource {
  /**
   * Retrieves metadata for a specific document in a vault and generates a temporary
   * download URL. The download URL expires after 1 hour for security. This endpoint
   * also updates the file size if it wasn't previously calculated.
   *
   * @example
   * ```ts
   * await client.vault.objects.retrieve('objectId', {
   *   id: 'id',
   * });
   * ```
   */
  retrieve(objectID: string, params: ObjectRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.get(path`/vault/${id}/objects/${objectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all objects stored in a specific vault, including document metadata,
   * ingestion status, and processing statistics.
   *
   * @example
   * ```ts
   * await client.vault.objects.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/vault/${id}/objects`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generate presigned URLs for direct S3 operations (GET, PUT, DELETE, HEAD) on
   * vault objects. This allows secure, time-limited access to files without proxying
   * through the API. Essential for large document uploads/downloads in legal
   * workflows.
   *
   * @example
   * ```ts
   * const response =
   *   await client.vault.objects.createPresignedURL(
   *     'objectId',
   *     { id: 'id' },
   *   );
   * ```
   */
  createPresignedURL(
    objectID: string,
    params: ObjectCreatePresignedURLParams,
    options?: RequestOptions,
  ): APIPromise<ObjectCreatePresignedURLResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/vault/${id}/objects/${objectID}/presigned-url`, { body, ...options });
  }

  /**
   * Downloads a file from a vault. Returns the actual file content as a binary
   * stream with appropriate headers for file download. Useful for retrieving
   * contracts, depositions, case files, and other legal documents stored in your
   * vault.
   *
   * @example
   * ```ts
   * await client.vault.objects.download('objectId', {
   *   id: 'id',
   * });
   * ```
   */
  download(objectID: string, params: ObjectDownloadParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.get(path`/vault/${id}/objects/${objectID}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the full extracted text content from a processed vault object. Returns
   * the concatenated text from all chunks, useful for document review, analysis, or
   * export. The object must have completed processing before text can be retrieved.
   *
   * @example
   * ```ts
   * await client.vault.objects.getText('objectId', {
   *   id: 'id',
   * });
   * ```
   */
  getText(objectID: string, params: ObjectGetTextParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.get(path`/vault/${id}/objects/${objectID}/text`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ObjectCreatePresignedURLResponse {
  /**
   * URL expiration timestamp
   */
  expiresAt?: string;

  /**
   * URL expiration time in seconds
   */
  expiresIn?: number;

  /**
   * Original filename
   */
  filename?: string;

  /**
   * Usage instructions and examples
   */
  instructions?: unknown;

  metadata?: ObjectCreatePresignedURLResponse.Metadata;

  /**
   * The object identifier
   */
  objectId?: string;

  /**
   * The operation type
   */
  operation?: string;

  /**
   * The presigned URL for direct S3 access
   */
  presignedUrl?: string;

  /**
   * S3 object key
   */
  s3Key?: string;

  /**
   * The vault identifier
   */
  vaultId?: string;
}

export namespace ObjectCreatePresignedURLResponse {
  export interface Metadata {
    bucket?: string;

    contentType?: string;

    region?: string;

    sizeBytes?: number;
  }
}

export interface ObjectRetrieveParams {
  /**
   * Vault ID
   */
  id: string;
}

export interface ObjectCreatePresignedURLParams {
  /**
   * Path param: The unique identifier of the vault
   */
  id: string;

  /**
   * Body param: Content type for PUT operations (optional, defaults to object's
   * content type)
   */
  contentType?: string;

  /**
   * Body param: URL expiration time in seconds (1 minute to 7 days)
   */
  expiresIn?: number;

  /**
   * Body param: The S3 operation to generate URL for
   */
  operation?: 'GET' | 'PUT' | 'DELETE' | 'HEAD';
}

export interface ObjectDownloadParams {
  /**
   * Vault ID
   */
  id: string;
}

export interface ObjectGetTextParams {
  /**
   * The vault ID
   */
  id: string;
}

export declare namespace Objects {
  export {
    type ObjectCreatePresignedURLResponse as ObjectCreatePresignedURLResponse,
    type ObjectRetrieveParams as ObjectRetrieveParams,
    type ObjectCreatePresignedURLParams as ObjectCreatePresignedURLParams,
    type ObjectDownloadParams as ObjectDownloadParams,
    type ObjectGetTextParams as ObjectGetTextParams,
  };
}
