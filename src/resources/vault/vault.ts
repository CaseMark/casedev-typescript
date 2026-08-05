// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GroupsAPI from './groups';
import { GroupCreateParams, GroupUpdateParams, Groups } from './groups';
import * as MemoryAPI from './memory';
import {
  Memory,
  MemoryCreateParams,
  MemoryCreateResponse,
  MemoryDeleteParams,
  MemoryListResponse,
  MemorySearchParams,
  MemorySearchResponse,
  MemoryUpdateParams,
} from './memory';
import * as MultipartAPI from './multipart';
import {
  Multipart,
  MultipartAbortParams,
  MultipartCompleteParams,
  MultipartGetPartURLsParams,
  MultipartGetPartURLsResponse,
  MultipartInitParams,
  MultipartInitResponse,
} from './multipart';
import * as ObjectsAPI from './objects';
import {
  ObjectAppendParams,
  ObjectAppendResponse,
  ObjectCreatePresignedURLParams,
  ObjectCreatePresignedURLResponse,
  ObjectDeleteParams,
  ObjectDeleteResponse,
  ObjectDownloadParams,
  ObjectGetChunksParams,
  ObjectGetChunksResponse,
  ObjectGetOcrWordsParams,
  ObjectGetOcrWordsResponse,
  ObjectGetPagesParams,
  ObjectGetPagesResponse,
  ObjectGetTextParams,
  ObjectGetTextResponse,
  ObjectListParams,
  ObjectListResponse,
  ObjectMergeParams,
  ObjectMergeResponse,
  ObjectRetrieveParams,
  ObjectRetrieveResponse,
  ObjectUpdateParams,
  ObjectUpdateResponse,
  Objects,
} from './objects';
import * as EventsAPI from './events/events';
import { Events } from './events/events';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Secure document storage with semantic search and GraphRAG
 */
export class Vault extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  multipart: MultipartAPI.Multipart = new MultipartAPI.Multipart(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  memory: MemoryAPI.Memory = new MemoryAPI.Memory(this._client);

  /**
   * Creates a new secure vault with dedicated S3 storage and vector search
   * capabilities. Each vault provides isolated document storage with semantic
   * search, OCR processing, and optional GraphRAG knowledge graph features for legal
   * document analysis and discovery.
   *
   * @example
   * ```ts
   * const vault = await client.vault.create({
   *   name: 'Contract Review Archive',
   * });
   * ```
   */
  create(body: VaultCreateParams, options?: RequestOptions): APIPromise<VaultCreateResponse> {
    return this._client.post('/vault', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific vault, including storage
   * configuration, chunking strategy, and usage statistics. Returns vault metadata,
   * bucket information, and vector storage details.
   *
   * @example
   * ```ts
   * const vault = await client.vault.retrieve('vault_abc123');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VaultRetrieveResponse> {
    return this._client.get(path`/vault/${id}`, options);
  }

  /**
   * Update vault settings including name, description, and enableGraph. Changing
   * enableGraph only affects future document uploads - existing documents retain
   * their current graph/non-graph state.
   *
   * @example
   * ```ts
   * const vault = await client.vault.update('id', {
   *   name: 'Updated Vault Name',
   * });
   * ```
   */
  update(id: string, body: VaultUpdateParams, options?: RequestOptions): APIPromise<VaultUpdateResponse> {
    return this._client.patch(path`/vault/${id}`, { body, ...options });
  }

  /**
   * List all vaults for the authenticated organization. Returns vault metadata
   * including name, description, storage configuration, and usage statistics.
   *
   * @example
   * ```ts
   * const vaults = await client.vault.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<VaultListResponse> {
    return this._client.get('/vault', options);
  }

  /**
   * Permanently deletes a vault and all its contents including documents, vectors,
   * graph data, and S3 buckets. This operation cannot be undone. For large vaults,
   * use the async=true query parameter to queue deletion in the background.
   *
   * @example
   * ```ts
   * const vault = await client.vault.delete('id');
   * ```
   */
  delete(
    id: string,
    params: VaultDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VaultDeleteResponse> {
    const { async } = params ?? {};
    return this._client.delete(path`/vault/${id}`, { query: { async }, ...options });
  }

  /**
   * Confirm whether a direct-to-S3 vault upload succeeded or failed. This endpoint
   * emits vault.upload.completed or vault.upload.failed events and is idempotent for
   * repeated confirmations. Conditional fields: when success=true, sizeBytes is
   * required; when success=false, errorCode and errorMessage are required. These
   * rules are enforced server-side with specific 400 responses.
   *
   * @example
   * ```ts
   * const response = await client.vault.confirmUpload(
   *   'objectId',
   *   { id: 'id', success: true },
   * );
   * ```
   */
  confirmUpload(
    objectID: string,
    params: VaultConfirmUploadParams,
    options?: RequestOptions,
  ): APIPromise<VaultConfirmUploadResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/vault/${id}/upload/${objectID}/confirm`, { body, ...options });
  }

  /**
   * Triggers ingestion workflow for a vault object to extract text, generate chunks,
   * and create embeddings. For supported file types (PDF, DOCX, PPTX, XLSX, TXT,
   * RTF, XML, HTML, Markdown, CSV/TSV, JSON/YAML/TOML, common source code files,
   * ZIP, audio, video), processing happens asynchronously. ZIP archives are unpacked
   * recursively up to 5 levels, and each extracted file is created as an independent
   * vault object and ingested via the normal pipeline. For unsupported types
   * (images, etc.), the file is marked as completed immediately without text
   * extraction.
   *
   * @example
   * ```ts
   * const response = await client.vault.ingest('objectId', {
   *   id: 'id',
   * });
   * ```
   */
  ingest(
    objectID: string,
    params: VaultIngestParams,
    options?: RequestOptions,
  ): APIPromise<VaultIngestResponse> {
    const { id } = params;
    return this._client.post(path`/vault/${id}/ingest/${objectID}`, options);
  }

  /**
   * Search across vault documents using multiple methods including hybrid vector +
   * graph search, GraphRAG global search, entity-based search, and fast similarity
   * search. Returns relevant documents and contextual answers based on the search
   * method.
   *
   * @example
   * ```ts
   * const response = await client.vault.search('id', {
   *   query: 'query',
   * });
   * ```
   */
  search(id: string, body: VaultSearchParams, options?: RequestOptions): APIPromise<VaultSearchResponse> {
    return this._client.post(path`/vault/${id}/search`, { body, ...options });
  }

  /**
   * Generate a presigned URL for uploading files directly to a vault's S3 storage.
   * After uploading to S3, confirm the upload result via POST
   * /vault/:vaultId/upload/:objectId/confirm before triggering ingestion.
   *
   * @example
   * ```ts
   * const response = await client.vault.upload('id', {
   *   contentType: 'contentType',
   *   filename: 'filename',
   * });
   * ```
   */
  upload(id: string, params: VaultUploadParams, options?: RequestOptions): APIPromise<VaultUploadResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post(path`/vault/${id}/upload`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface VaultCreateResponse {
  /**
   * Unique vault identifier
   */
  id?: string;

  /**
   * Vault creation timestamp
   */
  createdAt?: string;

  /**
   * Vault description
   */
  description?: string;

  /**
   * The resolved embedding profile for this vault. Null for storage-only vaults.
   */
  embeddingProfile?: VaultCreateResponse.EmbeddingProfile | null;

  /**
   * Whether vector indexing is enabled for this vault
   */
  enableIndexing?: boolean;

  /**
   * S3 bucket name for document storage
   */
  filesBucket?: string;

  /**
   * Vector search index name. Null for storage-only vaults.
   */
  indexName?: string | null;

  /**
   * Vault display name
   */
  name?: string;

  /**
   * AWS region for storage
   */
  region?: string;

  /**
   * S3 bucket name for vector embeddings. Null for storage-only vaults.
   */
  vectorBucket?: string | null;
}

export namespace VaultCreateResponse {
  /**
   * The resolved embedding profile for this vault. Null for storage-only vaults.
   */
  export interface EmbeddingProfile {
    /**
     * Vector dimension used by this vault
     */
    dimensions?: number;

    /**
     * Embedding model catalog key
     */
    model?: string;

    /**
     * Embedding provider
     */
    provider?: string;
  }
}

export interface VaultRetrieveResponse {
  /**
   * Vault identifier
   */
  id: string;

  /**
   * Vault creation timestamp
   */
  createdAt: string;

  /**
   * S3 bucket for document storage
   */
  filesBucket: string;

  /**
   * Vault name
   */
  name: string;

  /**
   * AWS region
   */
  region: string;

  /**
   * Document chunking strategy configuration
   */
  chunkStrategy?: VaultRetrieveResponse.ChunkStrategy;

  /**
   * Vault description
   */
  description?: string;

  /**
   * Whether GraphRAG is enabled
   */
  enableGraph?: boolean;

  /**
   * Search index name
   */
  indexName?: string;

  /**
   * KMS key for encryption
   */
  kmsKeyId?: string;

  /**
   * Additional vault metadata
   */
  metadata?: unknown;

  /**
   * Total storage size in bytes
   */
  totalBytes?: number;

  /**
   * Number of stored documents
   */
  totalObjects?: number;

  /**
   * Number of vector embeddings
   */
  totalVectors?: number;

  /**
   * Last update timestamp
   */
  updatedAt?: string;

  /**
   * S3 bucket for vector embeddings
   */
  vectorBucket?: string | null;
}

export namespace VaultRetrieveResponse {
  /**
   * Document chunking strategy configuration
   */
  export interface ChunkStrategy {
    /**
     * Target size for each chunk in tokens
     */
    chunkSize?: number;

    /**
     * Chunking method (e.g., 'semantic', 'fixed')
     */
    method?: string;

    /**
     * Minimum chunk size in tokens
     */
    minChunkSize?: number;

    /**
     * Number of overlapping tokens between chunks
     */
    overlap?: number;
  }
}

export interface VaultUpdateResponse {
  /**
   * Vault identifier
   */
  id?: string;

  /**
   * Document chunking strategy configuration
   */
  chunkStrategy?: unknown;

  /**
   * Vault creation timestamp
   */
  createdAt?: string;

  /**
   * Vault description
   */
  description?: string | null;

  /**
   * Whether GraphRAG is enabled for future uploads
   */
  enableGraph?: boolean;

  /**
   * S3 bucket for document storage
   */
  filesBucket?: string;

  /**
   * Search index name
   */
  indexName?: string;

  /**
   * KMS key for encryption
   */
  kmsKeyId?: string;

  /**
   * Additional vault metadata
   */
  metadata?: unknown;

  /**
   * Vault name
   */
  name?: string;

  /**
   * AWS region
   */
  region?: string;

  /**
   * Total storage size in bytes
   */
  totalBytes?: number;

  /**
   * Number of stored documents
   */
  totalObjects?: number;

  /**
   * Number of vector embeddings
   */
  totalVectors?: number;

  /**
   * Last update timestamp
   */
  updatedAt?: string;

  /**
   * S3 bucket for vector embeddings
   */
  vectorBucket?: string | null;
}

export interface VaultListResponse {
  /**
   * Total number of vaults
   */
  total?: number;

  vaults?: Array<VaultListResponse.Vault>;
}

export namespace VaultListResponse {
  export interface Vault {
    /**
     * Vault identifier
     */
    id?: string;

    /**
     * Vault creation timestamp
     */
    createdAt?: string;

    /**
     * Vault description
     */
    description?: string;

    /**
     * Whether GraphRAG is enabled
     */
    enableGraph?: boolean;

    /**
     * Vault name
     */
    name?: string;

    /**
     * Total storage size in bytes
     */
    totalBytes?: number;

    /**
     * Number of stored documents
     */
    totalObjects?: number;
  }
}

export interface VaultDeleteResponse {
  deletedVault?: VaultDeleteResponse.DeletedVault;

  /**
   * Either 'deleted' or 'deletion_queued'
   */
  status?: string;

  success?: boolean;
}

export namespace VaultDeleteResponse {
  export interface DeletedVault {
    id?: string;

    bytesFreed?: number;

    name?: string;

    objectsDeleted?: number;

    vectorsDeleted?: number;
  }
}

export interface VaultConfirmUploadResponse {
  alreadyConfirmed?: boolean;

  /**
   * Present when autoIngest was requested on a successful confirmation
   */
  ingest?: VaultConfirmUploadResponse.Ingest;

  objectId?: string;

  status?: 'completed' | 'failed';

  vaultId?: string;
}

export namespace VaultConfirmUploadResponse {
  /**
   * Present when autoIngest was requested on a successful confirmation
   */
  export interface Ingest {
    error?: string;

    triggered?: boolean;

    workflowId?: string | null;
  }
}

export interface VaultIngestResponse {
  /**
   * Always false; retained for response compatibility
   */
  enableGraphRAG: boolean;

  /**
   * Human-readable status message
   */
  message: string;

  /**
   * ID of the vault object being processed
   */
  objectId: string;

  /**
   * Current ingestion status. 'stored' for file types without text extraction (no
   * chunks/vectors created).
   */
  status: 'processing' | 'stored';

  /**
   * Workflow run ID for tracking progress. Null for file types that skip processing.
   */
  workflowId: string | null;
}

export interface VaultSearchResponse {
  /**
   * Relevant text chunks with similarity scores and page locations
   */
  chunks?: Array<VaultSearchResponse.Chunk>;

  /**
   * Search method used
   */
  method?: string;

  /**
   * Original search query
   */
  query?: string;

  /**
   * AI-generated answer based on search results (for global/entity methods)
   */
  response?: string;

  sources?: Array<VaultSearchResponse.Source>;

  /**
   * ID of the searched vault
   */
  vault_id?: string;
}

export namespace VaultSearchResponse {
  export interface Chunk {
    /**
     * Index of the chunk within the document (0-based)
     */
    chunk_index?: number;

    /**
     * Vector similarity distance (lower is more similar)
     */
    distance?: number;

    /**
     * Source media timestamp for the last word in the chunk. Present only for
     * media-backed transcripts with real word timing.
     */
    end_ms?: number;

    /**
     * ID of the source document
     */
    object_id?: string;

    /**
     * PDF page number where the chunk ends (1-indexed). Null for non-PDF documents or
     * documents ingested before page tracking was added.
     */
    page_end?: number | null;

    /**
     * PDF page number where the chunk begins (1-indexed). Null for non-PDF documents
     * or documents ingested before page tracking was added.
     */
    page_start?: number | null;

    /**
     * Relevance score (deprecated, use distance or hybridScore)
     */
    score?: number;

    /**
     * Source identifier (deprecated, use object_id)
     */
    source?: string;

    /**
     * Source media timestamp for the first word in the chunk. Present only for
     * media-backed transcripts with real word timing.
     */
    start_ms?: number;

    /**
     * Preview of the chunk text (up to 500 characters)
     */
    text?: string;

    /**
     * Ending word index (0-based) in the OCR word list. Use with GET
     * /vault/:id/objects/:objectId/ocr-words to retrieve bounding boxes for
     * highlighting.
     */
    word_end_index?: number | null;

    /**
     * Starting word index (0-based) in the OCR word list. Use with GET
     * /vault/:id/objects/:objectId/ocr-words to retrieve bounding boxes for
     * highlighting.
     */
    word_start_index?: number | null;
  }

  export interface Source {
    id?: string;

    chunkCount?: number;

    createdAt?: string;

    filename?: string;

    ingestionCompletedAt?: string;

    pageCount?: number;

    textLength?: number;
  }
}

export interface VaultUploadResponse {
  /**
   * True when this idempotency key already identifies a confirmed upload
   */
  alreadyUploaded?: boolean;

  /**
   * Whether the file will be automatically indexed
   */
  auto_index?: boolean;

  /**
   * Whether the vault supports indexing. False for storage-only vaults.
   */
  enableIndexing?: boolean;

  /**
   * URL expiration time in seconds
   */
  expiresIn?: number;

  instructions?: VaultUploadResponse.Instructions | null;

  /**
   * Whether the file is marked as AI-generated work product
   */
  is_ai_generated?: boolean;

  /**
   * Next API endpoint to call for processing
   */
  next_step?: string | null;

  /**
   * Unique identifier for the uploaded object
   */
  objectId?: string;

  /**
   * Folder path for hierarchy if provided
   */
  path?: string | null;

  /**
   * S3 object key for the file
   */
  s3Key?: string;

  /**
   * Presigned URL for uploading the file
   */
  uploadUrl?: string | null;
}

export namespace VaultUploadResponse {
  export interface Instructions {
    headers?: unknown;

    method?: string;

    note?: string;
  }
}

export interface VaultCreateParams {
  /**
   * Display name for the vault
   */
  name: string;

  /**
   * Optional description of the vault's purpose
   */
  description?: string;

  /**
   * Optional embedding model for this vault. Defaults to casemark/embed-v1.
   * Determines the S3 Vectors index dimension and which model is used at both ingest
   * and search time. The vault is locked to this model after creation — use a
   * re-embed flow to change later. Ignored when enableIndexing is false. Note:
   * `casemark/llama-nemotron-embed-vl-1b-v2` is a deprecated alias for
   * `casemark/embed-v1` (retained for SDK backward compatibility); new integrations
   * should use `casemark/embed-v1` directly.
   */
  embeddingModel?:
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | 'voyage/voyage-3.5'
    | 'voyage/voyage-law-2'
    | 'cohere/embed-v4.0'
    | 'google/gemini-embedding-2'
    | 'casemark/embed-v1'
    | 'casemark/llama-nemotron-embed-vl-1b-v2';

  /**
   * Enable knowledge graph for entity relationship mapping. Only applies when
   * enableIndexing is true.
   */
  enableGraph?: boolean;

  /**
   * Enable vector indexing and search capabilities. Set to false for storage-only
   * vaults.
   */
  enableIndexing?: boolean;

  /**
   * Assign the vault to a vault group for access control. Required when using a
   * group-scoped API key.
   */
  groupId?: string;

  /**
   * Optional metadata to attach to the vault (e.g., { containsPHI: true } for HIPAA
   * compliance tracking)
   */
  metadata?: unknown;
}

export interface VaultUpdateParams {
  /**
   * New description for the vault. Set to null to remove.
   */
  description?: string | null;

  /**
   * Whether to enable GraphRAG for future document uploads
   */
  enableGraph?: boolean;

  /**
   * Move the vault to a different group, or set to null to remove from its current
   * group.
   */
  groupId?: string | null;

  /**
   * New name for the vault
   */
  name?: string;
}

export interface VaultDeleteParams {
  /**
   * If true and vault has many objects, queue deletion in background and return
   * immediately
   */
  async?: boolean;
}

export interface VaultConfirmUploadParams {
  /**
   * Path param: Vault ID
   */
  id: string;

  /**
   * Body param: Whether the upload succeeded
   */
  success: boolean;

  /**
   * Body param: When true and the object was uploaded with auto_index, trigger
   * ingestion immediately after a successful confirmation (no separate ingest call
   * needed). The ingest outcome is reported in the `ingest` response field; an
   * ingest failure does not fail the confirmation.
   */
  autoIngest?: boolean;

  /**
   * Body param: Client-side error code. Required when success=false.
   */
  errorCode?: string;

  /**
   * Body param: Client-side error message. Required when success=false.
   */
  errorMessage?: string;

  /**
   * Body param: S3 ETag for the uploaded object (optional if client cannot access
   * ETag header). Only meaningful when success=true.
   */
  etag?: string;

  /**
   * Body param: Uploaded file size in bytes. Required when success=true.
   */
  sizeBytes?: number;
}

export interface VaultIngestParams {
  /**
   * Vault ID
   */
  id: string;
}

export interface VaultSearchParams {
  /**
   * Search query or question to find relevant documents
   */
  query: string;

  /**
   * Filters to narrow search results to specific documents
   */
  filters?: VaultSearchParams.Filters;

  /**
   * Search method: 'global' for comprehensive questions, 'entity' for specific
   * entities, 'fast' for quick similarity search, 'hybrid' for combined approach
   */
  method?: 'vector' | 'graph' | 'hybrid' | 'global' | 'local' | 'fast' | 'entity';

  /**
   * Maximum number of results to return. Hybrid search supports 1 to 50; other
   * methods may support up to 100.
   */
  topK?: number;
}

export namespace VaultSearchParams {
  /**
   * Filters to narrow search results to specific documents
   */
  export interface Filters {
    /**
     * Filter to specific document(s) by object ID. Accepts a single ID or array of
     * IDs.
     */
    object_id?: string | Array<string>;

    [k: string]: unknown;
  }
}

export interface VaultUploadParams {
  /**
   * Body param: MIME type of the file (e.g., application/pdf, image/jpeg)
   */
  contentType: string;

  /**
   * Body param: Name of the file to upload
   */
  filename: string;

  /**
   * Body param: Whether to automatically process and index the file for search
   */
  auto_index?: boolean;

  /**
   * Body param: Marks the file as AI-generated work product (e.g. uploaded by an
   * agent) rather than a user-provided source document. Persisted on the object and
   * returned by object listings so clients can distinguish provenance.
   */
  is_ai_generated?: boolean;

  /**
   * Body param: Additional metadata to associate with the file
   */
  metadata?: unknown;

  /**
   * Body param: Optional folder path for hierarchy preservation. Allows integrations
   * to maintain source folder structure from systems like NetDocs, Clio, or
   * Smokeball. Example: '/Discovery/Depositions/2024'
   */
  path?: string;

  /**
   * Body param: File size in bytes (optional, max 5GB for single PUT uploads). When
   * provided, enforces exact file size at S3 level.
   */
  sizeBytes?: number;

  /**
   * Header param: Optional stable key for safely retrying upload initialization
   */
  'Idempotency-Key'?: string;
}

Vault.Events = Events;
Vault.Groups = Groups;
Vault.Multipart = Multipart;
Vault.Objects = Objects;
Vault.Memory = Memory;

export declare namespace Vault {
  export {
    type VaultCreateResponse as VaultCreateResponse,
    type VaultRetrieveResponse as VaultRetrieveResponse,
    type VaultUpdateResponse as VaultUpdateResponse,
    type VaultListResponse as VaultListResponse,
    type VaultDeleteResponse as VaultDeleteResponse,
    type VaultConfirmUploadResponse as VaultConfirmUploadResponse,
    type VaultIngestResponse as VaultIngestResponse,
    type VaultSearchResponse as VaultSearchResponse,
    type VaultUploadResponse as VaultUploadResponse,
    type VaultCreateParams as VaultCreateParams,
    type VaultUpdateParams as VaultUpdateParams,
    type VaultDeleteParams as VaultDeleteParams,
    type VaultConfirmUploadParams as VaultConfirmUploadParams,
    type VaultIngestParams as VaultIngestParams,
    type VaultSearchParams as VaultSearchParams,
    type VaultUploadParams as VaultUploadParams,
  };

  export { Events as Events };

  export {
    Groups as Groups,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
  };

  export {
    Multipart as Multipart,
    type MultipartGetPartURLsResponse as MultipartGetPartURLsResponse,
    type MultipartInitResponse as MultipartInitResponse,
    type MultipartAbortParams as MultipartAbortParams,
    type MultipartCompleteParams as MultipartCompleteParams,
    type MultipartGetPartURLsParams as MultipartGetPartURLsParams,
    type MultipartInitParams as MultipartInitParams,
  };

  export {
    Objects as Objects,
    type ObjectRetrieveResponse as ObjectRetrieveResponse,
    type ObjectUpdateResponse as ObjectUpdateResponse,
    type ObjectListResponse as ObjectListResponse,
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectAppendResponse as ObjectAppendResponse,
    type ObjectCreatePresignedURLResponse as ObjectCreatePresignedURLResponse,
    type ObjectGetChunksResponse as ObjectGetChunksResponse,
    type ObjectGetOcrWordsResponse as ObjectGetOcrWordsResponse,
    type ObjectGetPagesResponse as ObjectGetPagesResponse,
    type ObjectGetTextResponse as ObjectGetTextResponse,
    type ObjectMergeResponse as ObjectMergeResponse,
    type ObjectRetrieveParams as ObjectRetrieveParams,
    type ObjectUpdateParams as ObjectUpdateParams,
    type ObjectListParams as ObjectListParams,
    type ObjectDeleteParams as ObjectDeleteParams,
    type ObjectAppendParams as ObjectAppendParams,
    type ObjectCreatePresignedURLParams as ObjectCreatePresignedURLParams,
    type ObjectDownloadParams as ObjectDownloadParams,
    type ObjectGetChunksParams as ObjectGetChunksParams,
    type ObjectGetOcrWordsParams as ObjectGetOcrWordsParams,
    type ObjectGetPagesParams as ObjectGetPagesParams,
    type ObjectGetTextParams as ObjectGetTextParams,
    type ObjectMergeParams as ObjectMergeParams,
  };

  export {
    Memory as Memory,
    type MemoryCreateResponse as MemoryCreateResponse,
    type MemoryListResponse as MemoryListResponse,
    type MemorySearchResponse as MemorySearchResponse,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryDeleteParams as MemoryDeleteParams,
    type MemorySearchParams as MemorySearchParams,
  };
}
