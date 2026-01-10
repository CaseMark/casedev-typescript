// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GraphragAPI from './graphrag';
import { Graphrag } from './graphrag';
import * as ObjectsAPI from './objects';
import {
  ObjectCreatePresignedURLParams,
  ObjectCreatePresignedURLResponse,
  ObjectDownloadParams,
  ObjectGetTextParams,
  ObjectRetrieveParams,
  Objects,
} from './objects';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Vault extends APIResource {
  graphrag: GraphragAPI.Graphrag = new GraphragAPI.Graphrag(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);

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
   * await client.vault.retrieve('vault_abc123');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/vault/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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
   * Triggers OCR ingestion workflow for a vault object to extract text, generate
   * chunks, and create embeddings. Processing happens asynchronously. GraphRAG
   * indexing must be triggered separately via POST /vault/:id/graphrag/:objectId.
   * Returns immediately with workflow tracking information.
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
   * This endpoint creates a temporary upload URL that allows secure file uploads
   * without exposing credentials. Files can be automatically indexed for semantic
   * search or stored for manual processing.
   *
   * @example
   * ```ts
   * const response = await client.vault.upload('id', {
   *   contentType: 'contentType',
   *   filename: 'filename',
   * });
   * ```
   */
  upload(id: string, body: VaultUploadParams, options?: RequestOptions): APIPromise<VaultUploadResponse> {
    return this._client.post(path`/vault/${id}/upload`, { body, ...options });
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

export interface VaultIngestResponse {
  /**
   * Always false - GraphRAG must be triggered separately via POST
   * /vault/:id/graphrag/:objectId
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
   * Current ingestion status
   */
  status: 'processing';

  /**
   * Workflow run ID for tracking progress
   */
  workflowId: string;
}

export interface VaultSearchResponse {
  /**
   * Relevant text chunks with similarity scores
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
    score?: number;

    source?: string;

    text?: string;
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

  instructions?: VaultUploadResponse.Instructions;

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
  uploadUrl?: string;
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
   * Optional metadata to attach to the vault (e.g., { containsPHI: true } for HIPAA
   * compliance tracking)
   */
  metadata?: unknown;
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
   * Maximum number of results to return
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
   * MIME type of the file (e.g., application/pdf, image/jpeg)
   */
  contentType: string;

  /**
   * Name of the file to upload
   */
  filename: string;

  /**
   * Whether to automatically process and index the file for search
   */
  auto_index?: boolean;

  /**
   * Additional metadata to associate with the file
   */
  metadata?: unknown;

  /**
   * Optional folder path for hierarchy preservation. Allows integrations to maintain
   * source folder structure from systems like NetDocs, Clio, or Smokeball. Example:
   * '/Discovery/Depositions/2024'
   */
  path?: string;

  /**
   * Estimated file size in bytes for cost calculation
   */
  sizeBytes?: number;
}

Vault.Graphrag = Graphrag;
Vault.Objects = Objects;

export declare namespace Vault {
  export {
    type VaultCreateResponse as VaultCreateResponse,
    type VaultListResponse as VaultListResponse,
    type VaultIngestResponse as VaultIngestResponse,
    type VaultSearchResponse as VaultSearchResponse,
    type VaultUploadResponse as VaultUploadResponse,
    type VaultCreateParams as VaultCreateParams,
    type VaultIngestParams as VaultIngestParams,
    type VaultSearchParams as VaultSearchParams,
    type VaultUploadParams as VaultUploadParams,
  };

  export { Graphrag as Graphrag };

  export {
    Objects as Objects,
    type ObjectCreatePresignedURLResponse as ObjectCreatePresignedURLResponse,
    type ObjectRetrieveParams as ObjectRetrieveParams,
    type ObjectCreatePresignedURLParams as ObjectCreatePresignedURLParams,
    type ObjectDownloadParams as ObjectDownloadParams,
    type ObjectGetTextParams as ObjectGetTextParams,
  };
}
