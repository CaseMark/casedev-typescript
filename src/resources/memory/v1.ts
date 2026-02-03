// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  /**
   * Store memories from conversation messages. Automatically extracts facts and
   * handles deduplication.
   *
   * Use tag_1 through tag_12 for filtering - these are generic indexed fields you
   * can use for any purpose:
   *
   * - Legal app: tag_1=client_id, tag_2=matter_id
   * - Healthcare: tag_1=patient_id, tag_2=encounter_id
   * - E-commerce: tag_1=customer_id, tag_2=order_id
   */
  create(body: V1CreateParams, options?: RequestOptions): APIPromise<V1CreateResponse> {
    return this._client.post('/memory/v1', { body, ...options });
  }

  /**
   * Retrieve a single memory by its ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<V1RetrieveResponse> {
    return this._client.get(path`/memory/v1/${id}`, options);
  }

  /**
   * List all memories with optional filtering by tags and category.
   */
  list(query: V1ListParams | null | undefined = {}, options?: RequestOptions): APIPromise<V1ListResponse> {
    return this._client.get('/memory/v1', { query, ...options });
  }

  /**
   * Delete a single memory by its ID.
   */
  delete(id: string, options?: RequestOptions): APIPromise<V1DeleteResponse> {
    return this._client.delete(path`/memory/v1/${id}`, options);
  }

  /**
   * Delete multiple memories matching tag filter criteria. CAUTION: This will delete
   * all matching memories for your organization.
   */
  deleteAll(
    params: V1DeleteAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1DeleteAllResponse> {
    const { tag_1, tag_10, tag_11, tag_12, tag_2, tag_3, tag_4, tag_5, tag_6, tag_7, tag_8, tag_9 } =
      params ?? {};
    return this._client.delete('/memory/v1', {
      query: { tag_1, tag_10, tag_11, tag_12, tag_2, tag_3, tag_4, tag_5, tag_6, tag_7, tag_8, tag_9 },
      ...options,
    });
  }

  /**
   * Search memories using semantic similarity. Filter by tag fields to narrow
   * results.
   *
   * Use tag_1 through tag_12 for filtering - these are generic indexed fields you
   * define:
   *
   * - Legal app: tag_1=client_id, tag_2=matter_id
   * - Healthcare: tag_1=patient_id, tag_2=encounter_id
   */
  search(body: V1SearchParams, options?: RequestOptions): APIPromise<V1SearchResponse> {
    return this._client.post('/memory/v1/search', { body, ...options });
  }
}

export interface V1CreateResponse {
  results?: Array<V1CreateResponse.Result>;
}

export namespace V1CreateResponse {
  export interface Result {
    /**
     * Memory ID
     */
    id?: string;

    /**
     * What happened to this memory
     */
    event?: 'ADD' | 'UPDATE' | 'DELETE' | 'NONE';

    /**
     * Extracted memory text
     */
    memory?: string;
  }
}

export interface V1RetrieveResponse {
  /**
   * Memory ID
   */
  id?: string;

  created_at?: string;

  /**
   * Memory content
   */
  memory?: string;

  /**
   * Memory metadata
   */
  metadata?: unknown;

  updated_at?: string;
}

export interface V1ListResponse {
  /**
   * Total count matching filters
   */
  count?: number;

  results?: Array<V1ListResponse.Result>;
}

export namespace V1ListResponse {
  export interface Result {
    id?: string;

    created_at?: string;

    memory?: string;

    metadata?: unknown;

    tags?: unknown;

    updated_at?: string;
  }
}

export interface V1DeleteResponse {
  message?: string;

  success?: boolean;
}

export interface V1DeleteAllResponse {
  /**
   * Number of memories deleted
   */
  deleted?: number;
}

export interface V1SearchResponse {
  results?: Array<V1SearchResponse.Result>;
}

export namespace V1SearchResponse {
  export interface Result {
    /**
     * Memory ID
     */
    id?: string;

    created_at?: string;

    /**
     * Memory content
     */
    memory?: string;

    /**
     * Additional metadata
     */
    metadata?: unknown;

    /**
     * Similarity score (0-1)
     */
    score?: number;

    /**
     * Tag values for this memory
     */
    tags?: Result.Tags;

    updated_at?: string;
  }

  export namespace Result {
    /**
     * Tag values for this memory
     */
    export interface Tags {
      tag_1?: string;

      tag_10?: string;

      tag_11?: string;

      tag_12?: string;

      tag_2?: string;

      tag_3?: string;

      tag_4?: string;

      tag_5?: string;

      tag_6?: string;

      tag_7?: string;

      tag_8?: string;

      tag_9?: string;
    }
  }
}

export interface V1CreateParams {
  /**
   * Conversation messages to extract memories from
   */
  messages: Array<V1CreateParams.Message>;

  /**
   * Custom category (e.g., "fact", "preference", "deadline")
   */
  category?: string;

  /**
   * Optional custom prompt for fact extraction
   */
  extraction_prompt?: string;

  /**
   * Whether to extract facts from messages (default: true)
   */
  infer?: boolean;

  /**
   * Additional metadata (not indexed)
   */
  metadata?: { [key: string]: unknown };

  /**
   * Generic indexed filter field 1 (you decide what it means)
   */
  tag_1?: string;

  /**
   * Generic indexed filter field 10
   */
  tag_10?: string;

  /**
   * Generic indexed filter field 11
   */
  tag_11?: string;

  /**
   * Generic indexed filter field 12
   */
  tag_12?: string;

  /**
   * Generic indexed filter field 2
   */
  tag_2?: string;

  /**
   * Generic indexed filter field 3
   */
  tag_3?: string;

  /**
   * Generic indexed filter field 4
   */
  tag_4?: string;

  /**
   * Generic indexed filter field 5
   */
  tag_5?: string;

  /**
   * Generic indexed filter field 6
   */
  tag_6?: string;

  /**
   * Generic indexed filter field 7
   */
  tag_7?: string;

  /**
   * Generic indexed filter field 8
   */
  tag_8?: string;

  /**
   * Generic indexed filter field 9
   */
  tag_9?: string;
}

export namespace V1CreateParams {
  export interface Message {
    /**
     * Message content
     */
    content: string;

    /**
     * Message role
     */
    role: 'user' | 'assistant' | 'system';
  }
}

export interface V1ListParams {
  /**
   * Filter by category
   */
  category?: string;

  /**
   * Number of results
   */
  limit?: number;

  /**
   * Pagination offset
   */
  offset?: number;

  /**
   * Filter by tag_1
   */
  tag_1?: string;

  /**
   * Filter by tag_10
   */
  tag_10?: string;

  /**
   * Filter by tag_11
   */
  tag_11?: string;

  /**
   * Filter by tag_12
   */
  tag_12?: string;

  /**
   * Filter by tag_2
   */
  tag_2?: string;

  /**
   * Filter by tag_3
   */
  tag_3?: string;

  /**
   * Filter by tag_4
   */
  tag_4?: string;

  /**
   * Filter by tag_5
   */
  tag_5?: string;

  /**
   * Filter by tag_6
   */
  tag_6?: string;

  /**
   * Filter by tag_7
   */
  tag_7?: string;

  /**
   * Filter by tag_8
   */
  tag_8?: string;

  /**
   * Filter by tag_9
   */
  tag_9?: string;
}

export interface V1DeleteAllParams {
  /**
   * Filter by tag_1
   */
  tag_1?: string;

  /**
   * Filter by tag_10
   */
  tag_10?: string;

  /**
   * Filter by tag_11
   */
  tag_11?: string;

  /**
   * Filter by tag_12
   */
  tag_12?: string;

  /**
   * Filter by tag_2
   */
  tag_2?: string;

  /**
   * Filter by tag_3
   */
  tag_3?: string;

  /**
   * Filter by tag_4
   */
  tag_4?: string;

  /**
   * Filter by tag_5
   */
  tag_5?: string;

  /**
   * Filter by tag_6
   */
  tag_6?: string;

  /**
   * Filter by tag_7
   */
  tag_7?: string;

  /**
   * Filter by tag_8
   */
  tag_8?: string;

  /**
   * Filter by tag_9
   */
  tag_9?: string;
}

export interface V1SearchParams {
  /**
   * Search query for semantic matching
   */
  query: string;

  /**
   * Filter by category
   */
  category?: string;

  /**
   * Filter by tag_1
   */
  tag_1?: string;

  /**
   * Filter by tag_10
   */
  tag_10?: string;

  /**
   * Filter by tag_11
   */
  tag_11?: string;

  /**
   * Filter by tag_12
   */
  tag_12?: string;

  /**
   * Filter by tag_2
   */
  tag_2?: string;

  /**
   * Filter by tag_3
   */
  tag_3?: string;

  /**
   * Filter by tag_4
   */
  tag_4?: string;

  /**
   * Filter by tag_5
   */
  tag_5?: string;

  /**
   * Filter by tag_6
   */
  tag_6?: string;

  /**
   * Filter by tag_7
   */
  tag_7?: string;

  /**
   * Filter by tag_8
   */
  tag_8?: string;

  /**
   * Filter by tag_9
   */
  tag_9?: string;

  /**
   * Maximum number of results to return
   */
  top_k?: number;
}

export declare namespace V1 {
  export {
    type V1CreateResponse as V1CreateResponse,
    type V1RetrieveResponse as V1RetrieveResponse,
    type V1ListResponse as V1ListResponse,
    type V1DeleteResponse as V1DeleteResponse,
    type V1DeleteAllResponse as V1DeleteAllResponse,
    type V1SearchResponse as V1SearchResponse,
    type V1CreateParams as V1CreateParams,
    type V1ListParams as V1ListParams,
    type V1DeleteAllParams as V1DeleteAllParams,
    type V1SearchParams as V1SearchParams,
  };
}
