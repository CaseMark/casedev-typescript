// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  /**
   * Generate comprehensive answers to questions using web search results. Supports
   * two modes: native provider answers or custom LLM-powered answers using
   * Case.dev's AI gateway. Perfect for legal research, fact-checking, and gathering
   * supporting evidence for cases.
   */
  answer(body: V1AnswerParams, options?: RequestOptions): APIPromise<V1AnswerResponse> {
    return this._client.post('/search/v1/answer', { body, ...options });
  }

  /**
   * Scrapes and extracts text content from web pages, PDFs, and documents. Useful
   * for legal research, evidence collection, and document analysis. Supports live
   * crawling, subpage extraction, and content summarization.
   */
  contents(body: V1ContentsParams, options?: RequestOptions): APIPromise<V1ContentsResponse> {
    return this._client.post('/search/v1/contents', { body, ...options });
  }

  /**
   * Performs deep research by conducting multi-step analysis, gathering information
   * from multiple sources, and providing comprehensive insights. Ideal for legal
   * research, case analysis, and due diligence investigations.
   */
  research(body: V1ResearchParams, options?: RequestOptions): APIPromise<V1ResearchResponse> {
    return this._client.post('/search/v1/research', { body, ...options });
  }

  /**
   * Retrieve the status and results of a deep research task by ID. Supports both
   * standard JSON responses and streaming for real-time updates as the research
   * progresses. Research tasks analyze topics comprehensively using web search and
   * AI synthesis.
   */
  retrieveResearch(
    id: string,
    query: V1RetrieveResearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/search/v1/research/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Executes intelligent web search queries with advanced filtering and
   * customization options. Ideal for legal research, case law discovery, and
   * gathering supporting documentation for litigation or compliance matters.
   */
  search(body: V1SearchParams, options?: RequestOptions): APIPromise<V1SearchResponse> {
    return this._client.post('/search/v1/search', { body, ...options });
  }

  /**
   * Find web pages and documents similar to a given URL. Useful for legal research
   * to discover related case law, statutes, or legal commentary that shares similar
   * themes or content structure.
   */
  similar(body: V1SimilarParams, options?: RequestOptions): APIPromise<V1SimilarResponse> {
    return this._client.post('/search/v1/similar', { body, ...options });
  }
}

export interface V1AnswerResponse {
  /**
   * The generated answer with citations
   */
  answer?: string;

  /**
   * Sources used to generate the answer
   */
  citations?: Array<V1AnswerResponse.Citation>;

  /**
   * Model used for answer generation
   */
  model?: string;

  /**
   * Type of search performed
   */
  searchType?: string;
}

export namespace V1AnswerResponse {
  export interface Citation {
    id?: string;

    publishedDate?: string;

    text?: string;

    title?: string;

    url?: string;
  }
}

export interface V1ContentsResponse {
  results?: Array<V1ContentsResponse.Result>;
}

export namespace V1ContentsResponse {
  export interface Result {
    /**
     * Content highlights if requested
     */
    highlights?: Array<string>;

    /**
     * Additional metadata about the content
     */
    metadata?: unknown;

    /**
     * Content summary if requested
     */
    summary?: string;

    /**
     * Extracted text content
     */
    text?: string;

    /**
     * Page title
     */
    title?: string;

    /**
     * Source URL
     */
    url?: string;
  }
}

export interface V1ResearchResponse {
  /**
   * Model used for research
   */
  model?: string;

  /**
   * Unique identifier for this research
   */
  researchId?: string;

  /**
   * Research findings and analysis
   */
  results?: unknown;
}

export interface V1SearchResponse {
  /**
   * Original search query
   */
  query?: string;

  /**
   * Array of search results
   */
  results?: Array<V1SearchResponse.Result>;

  /**
   * Total number of results found
   */
  totalResults?: number;
}

export namespace V1SearchResponse {
  export interface Result {
    /**
     * Domain of the source
     */
    domain?: string;

    /**
     * Publication date of the content
     */
    publishedDate?: string;

    /**
     * Brief excerpt from the content
     */
    snippet?: string;

    /**
     * Title of the search result
     */
    title?: string;

    /**
     * URL of the search result
     */
    url?: string;
  }
}

export interface V1SimilarResponse {
  processingTime?: number;

  results?: Array<V1SimilarResponse.Result>;

  totalResults?: number;
}

export namespace V1SimilarResponse {
  export interface Result {
    domain?: string;

    publishedDate?: string;

    similarityScore?: number;

    snippet?: string;

    text?: string;

    title?: string;

    url?: string;
  }
}

export interface V1AnswerParams {
  /**
   * The question or topic to research and answer
   */
  query: string;

  /**
   * Exclude these domains from search
   */
  excludeDomains?: Array<string>;

  /**
   * Only search within these domains
   */
  includeDomains?: Array<string>;

  /**
   * Maximum tokens for LLM response
   */
  maxTokens?: number;

  /**
   * LLM model to use when useCustomLLM is true
   */
  model?: string;

  /**
   * Number of search results to consider
   */
  numResults?: number;

  /**
   * Type of search to perform
   */
  searchType?: 'auto' | 'web' | 'news' | 'academic';

  /**
   * Stream the response (only for native provider answers)
   */
  stream?: boolean;

  /**
   * LLM temperature for answer generation
   */
  temperature?: number;

  /**
   * Include text content in response
   */
  text?: boolean;

  /**
   * Use Case.dev LLM for answer generation instead of provider's native answer
   */
  useCustomLLM?: boolean;
}

export interface V1ContentsParams {
  /**
   * Array of URLs to scrape and extract content from
   */
  urls: Array<string>;

  /**
   * Context to guide content extraction and summarization
   */
  context?: string;

  /**
   * Additional extraction options
   */
  extras?: unknown;

  /**
   * Whether to include content highlights
   */
  highlights?: boolean;

  /**
   * Whether to perform live crawling for dynamic content
   */
  livecrawl?: boolean;

  /**
   * Timeout in seconds for live crawling
   */
  livecrawlTimeout?: number;

  /**
   * Whether to extract content from linked subpages
   */
  subpages?: boolean;

  /**
   * Maximum number of subpages to crawl
   */
  subpageTarget?: number;

  /**
   * Whether to generate content summaries
   */
  summary?: boolean;

  /**
   * Whether to extract text content
   */
  text?: boolean;
}

export interface V1ResearchParams {
  /**
   * Research instructions or query
   */
  instructions: string;

  /**
   * Research quality level - fast (quick), normal (balanced), pro (comprehensive)
   */
  model?: 'fast' | 'normal' | 'pro';

  /**
   * Optional JSON schema to structure the research output
   */
  outputSchema?: unknown;

  /**
   * Alias for instructions (for convenience)
   */
  query?: string;
}

export interface V1RetrieveResearchParams {
  /**
   * Filter specific event types for streaming
   */
  events?: string;

  /**
   * Enable streaming for real-time updates
   */
  stream?: boolean;
}

export interface V1SearchParams {
  /**
   * Primary search query
   */
  query: string;

  /**
   * Additional related search queries to enhance results
   */
  additionalQueries?: Array<string>;

  /**
   * Category filter for search results
   */
  category?: string;

  /**
   * Specific content type to search for
   */
  contents?: string;

  /**
   * End date for crawl date filtering
   */
  endCrawlDate?: string;

  /**
   * End date for published date filtering
   */
  endPublishedDate?: string;

  /**
   * Domains to exclude from search results
   */
  excludeDomains?: Array<string>;

  /**
   * Domains to include in search results
   */
  includeDomains?: Array<string>;

  /**
   * Whether to include full text content in results
   */
  includeText?: boolean;

  /**
   * Number of search results to return
   */
  numResults?: number;

  /**
   * Start date for crawl date filtering
   */
  startCrawlDate?: string;

  /**
   * Start date for published date filtering
   */
  startPublishedDate?: string;

  /**
   * Type of search to perform
   */
  type?: 'auto' | 'search' | 'news';

  /**
   * Geographic location for localized results
   */
  userLocation?: string;
}

export interface V1SimilarParams {
  /**
   * The URL to find similar content for
   */
  url: string;

  /**
   * Additional content to consider for similarity matching
   */
  contents?: string;

  /**
   * Only include pages crawled before this date
   */
  endCrawlDate?: string;

  /**
   * Only include pages published before this date
   */
  endPublishedDate?: string;

  /**
   * Exclude results from these domains
   */
  excludeDomains?: Array<string>;

  /**
   * Only search within these domains
   */
  includeDomains?: Array<string>;

  /**
   * Whether to include extracted text content in results
   */
  includeText?: boolean;

  /**
   * Number of similar results to return
   */
  numResults?: number;

  /**
   * Only include pages crawled after this date
   */
  startCrawlDate?: string;

  /**
   * Only include pages published after this date
   */
  startPublishedDate?: string;
}

export declare namespace V1 {
  export {
    type V1AnswerResponse as V1AnswerResponse,
    type V1ContentsResponse as V1ContentsResponse,
    type V1ResearchResponse as V1ResearchResponse,
    type V1SearchResponse as V1SearchResponse,
    type V1SimilarResponse as V1SimilarResponse,
    type V1AnswerParams as V1AnswerParams,
    type V1ContentsParams as V1ContentsParams,
    type V1ResearchParams as V1ResearchParams,
    type V1RetrieveResearchParams as V1RetrieveResearchParams,
    type V1SearchParams as V1SearchParams,
    type V1SimilarParams as V1SimilarParams,
  };
}
