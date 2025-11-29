// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  /**
   * Retrieve metadata for a published workflow by ID. Returns workflow configuration
   * including input/output schemas, but excludes the prompt template for security.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/workflows/v1/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a paginated list of available workflows with optional filtering by
   * category, subcategory, type, and publication status. Workflows are pre-built
   * document processing pipelines optimized for legal use cases.
   */
  list(query: V1ListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/workflows/v1', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute a pre-built workflow with custom input data. Workflows automate common
   * legal document processing tasks like contract analysis, due diligence reviews,
   * and document classification.
   *
   * **Available Workflows:**
   *
   * - Contract analysis and risk assessment
   * - Document classification and tagging
   * - Legal research and case summarization
   * - Due diligence document review
   * - Compliance checking and reporting
   */
  execute(id: string, body: V1ExecuteParams, options?: RequestOptions): APIPromise<V1ExecuteResponse> {
    return this._client.post(path`/workflows/v1/${id}/execute`, { body, ...options });
  }

  /**
   * Retrieves the status and details of a workflow execution. This endpoint is
   * designed for future asynchronous execution support and currently returns a 501
   * Not Implemented status since all executions are synchronous.
   */
  retrieveExecution(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/workflows/v1/executions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Perform semantic search across available workflows to find the most relevant
   * pre-built document processing pipelines for your legal use case.
   */
  search(body: V1SearchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/workflows/v1/search', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1ExecuteResponse {
  /**
   * Workflow output (structure varies by workflow type)
   */
  result?: unknown;

  status?: 'completed' | 'failed';

  usage?: V1ExecuteResponse.Usage;

  /**
   * Name of the executed workflow
   */
  workflow_name?: string;
}

export namespace V1ExecuteResponse {
  export interface Usage {
    completion_tokens?: number;

    /**
     * Total cost in USD
     */
    cost?: number;

    prompt_tokens?: number;

    total_tokens?: number;
  }
}

export interface V1ListParams {
  /**
   * Filter workflows by category (e.g., 'legal', 'compliance', 'contract')
   */
  category?: string;

  /**
   * Maximum number of workflows to return
   */
  limit?: number;

  /**
   * Number of workflows to skip for pagination
   */
  offset?: number;

  /**
   * Include only published workflows
   */
  published?: boolean;

  /**
   * Filter workflows by subcategory (e.g., 'due-diligence', 'litigation', 'mergers')
   */
  sub_category?: string;

  /**
   * Filter workflows by type (e.g., 'document-review', 'contract-analysis',
   * 'compliance-check')
   */
  type?: string;
}

export interface V1ExecuteParams {
  /**
   * Input data for the workflow (structure varies by workflow type)
   */
  input: unknown;

  options?: V1ExecuteParams.Options;
}

export namespace V1ExecuteParams {
  export interface Options {
    /**
     * Output format preference
     */
    format?: 'json' | 'text';

    /**
     * LLM model to use for processing
     */
    model?: string;
  }
}

export interface V1SearchParams {
  /**
   * Search query to find relevant workflows
   */
  query: string;

  /**
   * Optional category filter to narrow results
   */
  category?: string;

  /**
   * Maximum number of results to return (default: 10, max: 50)
   */
  limit?: number;
}

export declare namespace V1 {
  export {
    type V1ExecuteResponse as V1ExecuteResponse,
    type V1ListParams as V1ListParams,
    type V1ExecuteParams as V1ExecuteParams,
    type V1SearchParams as V1SearchParams,
  };
}
