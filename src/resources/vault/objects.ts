// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
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
   * const object = await client.vault.objects.retrieve(
   *   'objectId',
   *   { id: 'id' },
   * );
   * ```
   */
  retrieve(
    objectID: string,
    params: ObjectRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ObjectRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/vault/${id}/objects/${objectID}`, options);
  }

  /**
   * Retrieve all objects stored in a specific vault, including document metadata,
   * ingestion status, and processing statistics.
   *
   * @example
   * ```ts
   * const objects = await client.vault.objects.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<ObjectListResponse> {
    return this._client.get(path`/vault/${id}/objects`, options);
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
   * const response = await client.vault.objects.download(
   *   'objectId',
   *   { id: 'id' },
   * );
   * ```
   */
  download(objectID: string, params: ObjectDownloadParams, options?: RequestOptions): APIPromise<string> {
    const { id } = params;
    return this._client.get(path`/vault/${id}/objects/${objectID}/download`, options);
  }

  /**
   * Retrieves the full extracted text content from a processed vault object. Returns
   * the concatenated text from all chunks, useful for document review, analysis, or
   * export. The object must have completed processing before text can be retrieved.
   *
   * @example
   * ```ts
   * const response = await client.vault.objects.getText(
   *   'objectId',
   *   { id: 'id' },
   * );
   * ```
   */
  getText(
    objectID: string,
    params: ObjectGetTextParams,
    options?: RequestOptions,
  ): APIPromise<ObjectGetTextResponse> {
    const { id } = params;
    return this._client.get(path`/vault/${id}/objects/${objectID}/text`, options);
  }
}

export interface ObjectRetrieveResponse {
  /**
   * Object ID
   */
  id: string;

  /**
   * MIME type
   */
  contentType: string;

  /**
   * Upload timestamp
   */
  createdAt: string;

  /**
   * Presigned S3 download URL
   */
  downloadUrl: string;

  /**
   * URL expiration time in seconds
   */
  expiresIn: number;

  /**
   * Original filename
   */
  filename: string;

  /**
   * Processing status (pending, processing, completed, failed)
   */
  ingestionStatus: string;

  /**
   * Vault ID
   */
  vaultId: string;

  /**
   * Number of text chunks created
   */
  chunkCount?: number;

  /**
   * Additional metadata
   */
  metadata?: unknown;

  /**
   * Number of pages (for documents)
   */
  pageCount?: number;

  /**
   * Optional folder path for hierarchy preservation
   */
  path?: string | null;

  /**
   * File size in bytes
   */
  sizeBytes?: number;

  /**
   * Length of extracted text
   */
  textLength?: number;

  /**
   * Number of embedding vectors generated
   */
  vectorCount?: number;
}

export interface ObjectListResponse {
  /**
   * Total number of objects in the vault
   */
  count: number;

  objects: Array<ObjectListResponse.Object>;

  /**
   * The ID of the vault
   */
  vaultId: string;
}

export namespace ObjectListResponse {
  export interface Object {
    /**
     * Unique object identifier
     */
    id: string;

    /**
     * MIME type of the document
     */
    contentType: string;

    /**
     * Document upload timestamp
     */
    createdAt: string;

    /**
     * Original filename of the uploaded document
     */
    filename: string;

    /**
     * Processing status of the document
     */
    ingestionStatus: string;

    /**
     * Number of text chunks created for vectorization
     */
    chunkCount?: number;

    /**
     * Processing completion timestamp
     */
    ingestionCompletedAt?: string;

    /**
     * Custom metadata associated with the document
     */
    metadata?: unknown;

    /**
     * Number of pages in the document
     */
    pageCount?: number;

    /**
     * Optional folder path for hierarchy preservation from source systems
     */
    path?: string | null;

    /**
     * File size in bytes
     */
    sizeBytes?: number;

    /**
     * Custom tags associated with the document
     */
    tags?: Array<string>;

    /**
     * Total character count of extracted text
     */
    textLength?: number;

    /**
     * Number of vectors generated for semantic search
     */
    vectorCount?: number;
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

export type ObjectDownloadResponse = Uploadable;

export interface ObjectGetTextResponse {
  metadata: ObjectGetTextResponse.Metadata;

  /**
   * Full concatenated text content from all chunks
   */
  text: string;
}

export namespace ObjectGetTextResponse {
  export interface Metadata {
    /**
     * Number of text chunks the document was split into
     */
    chunk_count: number;

    /**
     * Original filename of the document
     */
    filename: string;

    /**
     * Total character count of the extracted text
     */
    length: number;

    /**
     * The object ID
     */
    object_id: string;

    /**
     * The vault ID
     */
    vault_id: string;

    /**
     * When the document processing completed
     */
    ingestion_completed_at?: string;
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

  /**
   * Body param: File size in bytes (optional, max 5GB for single PUT uploads). When
   * provided for PUT operations, enforces exact file size at S3 level.
   */
  sizeBytes?: number;
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
    type ObjectRetrieveResponse as ObjectRetrieveResponse,
    type ObjectListResponse as ObjectListResponse,
    type ObjectCreatePresignedURLResponse as ObjectCreatePresignedURLResponse,
    type ObjectDownloadResponse as ObjectDownloadResponse,
    type ObjectGetTextResponse as ObjectGetTextResponse,
    type ObjectRetrieveParams as ObjectRetrieveParams,
    type ObjectCreatePresignedURLParams as ObjectCreatePresignedURLParams,
    type ObjectDownloadParams as ObjectDownloadParams,
    type ObjectGetTextParams as ObjectGetTextParams,
  };
}
