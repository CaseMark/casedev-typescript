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
   * Update a document's filename, path, or metadata. Use this to rename files or
   * organize them into virtual folders. The path is stored in metadata.path and can
   * be used to build folder hierarchies in your application.
   *
   * @example
   * ```ts
   * const object = await client.vault.objects.update(
   *   'objectId',
   *   {
   *     id: 'id',
   *     filename: 'deposition-smith-2024.pdf',
   *     path: '/Discovery/Depositions',
   *   },
   * );
   * ```
   */
  update(
    objectID: string,
    params: ObjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectUpdateResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/vault/${id}/objects/${objectID}`, { body, ...options });
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
   * Permanently deletes a document from the vault including all associated vectors,
   * chunks, graph data, and the original file. This operation cannot be undone.
   *
   * @example
   * ```ts
   * const object = await client.vault.objects.delete(
   *   'objectId',
   *   { id: 'id' },
   * );
   * ```
   */
  delete(
    objectID: string,
    params: ObjectDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ObjectDeleteResponse> {
    const { id, force } = params;
    return this._client.delete(path`/vault/${id}/objects/${objectID}`, { query: { force }, ...options });
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
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(objectID: string, params: ObjectDownloadParams, options?: RequestOptions): APIPromise<Response> {
    const { id } = params;
    return this._client.get(path`/vault/${id}/objects/${objectID}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieves word-level OCR bounding box data for a processed PDF document. Each
   * word includes its text, normalized bounding box coordinates (0-1 range),
   * confidence score, and global word index. Use this data to highlight specific
   * text ranges in a PDF viewer based on word indices from search results.
   *
   * @example
   * ```ts
   * const response = await client.vault.objects.getOcrWords(
   *   'objectId',
   *   { id: 'id' },
   * );
   * ```
   */
  getOcrWords(
    objectID: string,
    params: ObjectGetOcrWordsParams,
    options?: RequestOptions,
  ): APIPromise<ObjectGetOcrWordsResponse> {
    const { id, ...query } = params;
    return this._client.get(path`/vault/${id}/objects/${objectID}/ocr-words`, { query, ...options });
  }

  /**
   * Get the status of a CaseMark summary workflow job.
   *
   * @example
   * ```ts
   * const response = await client.vault.objects.getSummarizeJob(
   *   'jobId',
   *   { id: 'id', objectId: 'objectId' },
   * );
   * ```
   */
  getSummarizeJob(
    jobID: string,
    params: ObjectGetSummarizeJobParams,
    options?: RequestOptions,
  ): APIPromise<ObjectGetSummarizeJobResponse> {
    const { id, objectId } = params;
    return this._client.get(path`/vault/${id}/objects/${objectId}/summarize/${jobID}`, options);
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

export interface ObjectUpdateResponse {
  /**
   * Object ID
   */
  id?: string;

  /**
   * MIME type
   */
  contentType?: string;

  /**
   * Updated filename
   */
  filename?: string;

  /**
   * Processing status
   */
  ingestionStatus?: string;

  /**
   * Full metadata object
   */
  metadata?: unknown;

  /**
   * Folder path for hierarchy preservation
   */
  path?: string | null;

  /**
   * File size in bytes
   */
  sizeBytes?: number;

  /**
   * Last update timestamp
   */
  updatedAt?: string;

  /**
   * Vault ID
   */
  vaultId?: string;
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

export interface ObjectDeleteResponse {
  deletedObject?: ObjectDeleteResponse.DeletedObject;

  success?: boolean;
}

export namespace ObjectDeleteResponse {
  export interface DeletedObject {
    /**
     * Deleted object ID
     */
    id?: string;

    /**
     * Original filename
     */
    filename?: string;

    /**
     * Size of deleted file in bytes
     */
    sizeBytes?: number;

    /**
     * Number of vectors deleted
     */
    vectorsDeleted?: number;
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

export interface ObjectGetOcrWordsResponse {
  /**
   * When the OCR data was extracted
   */
  createdAt?: string;

  /**
   * The object ID
   */
  objectId?: string;

  /**
   * Total number of pages in the document
   */
  pageCount?: number;

  /**
   * Per-page word data with bounding boxes
   */
  pages?: Array<ObjectGetOcrWordsResponse.Page>;

  /**
   * Total number of words extracted from the document
   */
  totalWords?: number;
}

export namespace ObjectGetOcrWordsResponse {
  export interface Page {
    /**
     * Page number (1-indexed)
     */
    page?: number;

    words?: Array<Page.Word>;
  }

  export namespace Page {
    export interface Word {
      /**
       * Bounding box [x0, y0, x1, y1] normalized to 0-1 range
       */
      bbox?: Array<number>;

      /**
       * OCR confidence score (0-1)
       */
      confidence?: number | null;

      /**
       * The word text
       */
      text?: string;

      /**
       * Global word index across the entire document (0-based)
       */
      wordIndex?: number;
    }
  }
}

export interface ObjectGetSummarizeJobResponse {
  /**
   * When the job completed
   */
  completedAt?: string | null;

  /**
   * When the job was created
   */
  createdAt?: string;

  /**
   * Error message (if failed)
   */
  error?: string | null;

  /**
   * Case.dev job ID
   */
  jobId?: string;

  /**
   * Filename of the result document (if completed)
   */
  resultFilename?: string | null;

  /**
   * ID of the result document (if completed)
   */
  resultObjectId?: string | null;

  /**
   * ID of the source document
   */
  sourceObjectId?: string;

  /**
   * Current job status
   */
  status?: 'pending' | 'processing' | 'completed' | 'failed';

  /**
   * Type of workflow being executed
   */
  workflowType?: string;
}

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

export interface ObjectUpdateParams {
  /**
   * Path param: Vault ID
   */
  id: string;

  /**
   * Body param: New filename for the document (affects display name and downloads)
   */
  filename?: string;

  /**
   * Body param: Additional metadata to merge with existing metadata
   */
  metadata?: unknown;

  /**
   * Body param: Folder path for hierarchy preservation (e.g.,
   * '/Discovery/Depositions'). Set to null or empty string to remove.
   */
  path?: string | null;
}

export interface ObjectDeleteParams {
  /**
   * Path param: Vault ID
   */
  id: string;

  /**
   * Query param: Force delete a stuck document that is still in 'processing' state.
   * Use this if a document got stuck during ingestion (e.g., OCR timeout).
   */
  force?: 'true';
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

export interface ObjectGetOcrWordsParams {
  /**
   * Path param: The vault ID
   */
  id: string;

  /**
   * Query param: Filter to a specific page number (1-indexed). If omitted, returns
   * all pages.
   */
  page?: number;

  /**
   * Query param: Filter to words ending at this index (inclusive). Useful for
   * retrieving words for a specific chunk.
   */
  wordEnd?: number;

  /**
   * Query param: Filter to words starting at this index (inclusive). Useful for
   * retrieving words for a specific chunk.
   */
  wordStart?: number;
}

export interface ObjectGetSummarizeJobParams {
  /**
   * Vault ID
   */
  id: string;

  /**
   * Source object ID
   */
  objectId: string;
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
    type ObjectUpdateResponse as ObjectUpdateResponse,
    type ObjectListResponse as ObjectListResponse,
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectCreatePresignedURLResponse as ObjectCreatePresignedURLResponse,
    type ObjectGetOcrWordsResponse as ObjectGetOcrWordsResponse,
    type ObjectGetSummarizeJobResponse as ObjectGetSummarizeJobResponse,
    type ObjectGetTextResponse as ObjectGetTextResponse,
    type ObjectRetrieveParams as ObjectRetrieveParams,
    type ObjectUpdateParams as ObjectUpdateParams,
    type ObjectDeleteParams as ObjectDeleteParams,
    type ObjectCreatePresignedURLParams as ObjectCreatePresignedURLParams,
    type ObjectDownloadParams as ObjectDownloadParams,
    type ObjectGetOcrWordsParams as ObjectGetOcrWordsParams,
    type ObjectGetSummarizeJobParams as ObjectGetSummarizeJobParams,
    type ObjectGetTextParams as ObjectGetTextParams,
  };
}
