// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Graphrag extends APIResource {
  /**
   * Retrieve GraphRAG (Graph Retrieval-Augmented Generation) statistics for a
   * specific vault. This includes metrics about the knowledge graph structure,
   * entity relationships, and processing status that enable advanced semantic search
   * and AI-powered document analysis.
   *
   * @example
   * ```ts
   * const response = await client.vault.graphrag.getStats('id');
   * ```
   */
  getStats(id: string, options?: RequestOptions): APIPromise<GraphragGetStatsResponse> {
    return this._client.get(path`/vault/${id}/graphrag/stats`, options);
  }

  /**
   * Initialize a GraphRAG workspace for a vault to enable advanced knowledge graph
   * and retrieval-augmented generation capabilities. This creates the necessary
   * infrastructure for semantic document analysis and graph-based querying within
   * the vault.
   *
   * @example
   * ```ts
   * const response = await client.vault.graphrag.init('id');
   * ```
   */
  init(id: string, options?: RequestOptions): APIPromise<GraphragInitResponse> {
    return this._client.post(path`/vault/${id}/graphrag/init`, options);
  }
}

export interface GraphragGetStatsResponse {
  /**
   * Number of entity communities identified
   */
  communities?: number;

  /**
   * Number of processed documents
   */
  documents?: number;

  /**
   * Total number of entities extracted from documents
   */
  entities?: number;

  /**
   * Timestamp of last GraphRAG processing
   */
  lastProcessed?: string;

  /**
   * Total number of relationships between entities
   */
  relationships?: number;

  /**
   * Current processing status
   */
  status?: 'processing' | 'completed' | 'error';
}

export interface GraphragInitResponse {
  message?: string;

  status?: string;

  success?: boolean;

  vault_id?: string;
}

export declare namespace Graphrag {
  export {
    type GraphragGetStatsResponse as GraphragGetStatsResponse,
    type GraphragInitResponse as GraphragInitResponse,
  };
}
