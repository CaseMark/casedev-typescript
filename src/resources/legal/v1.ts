// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  /**
   * Search for legal sources including cases, statutes, and regulations from
   * authoritative legal databases. Returns ranked candidates. Always verify with
   * legal.verify() before citing.
   */
  find(body: V1FindParams, options?: RequestOptions): APIPromise<V1FindResponse> {
    return this._client.post('/legal/v1/find', { body, ...options });
  }

  /**
   * Parses legal citations from text and returns structured Bluebook components
   * (case name, reporter, volume, page, year, court). Accepts either a single
   * citation or a full text block.
   */
  getCitations(body: V1GetCitationsParams, options?: RequestOptions): APIPromise<V1GetCitationsResponse> {
    return this._client.post('/legal/v1/citations', { body, ...options });
  }

  /**
   * Extract all legal citations and references from a document URL. Returns
   * structured citation data including case citations, statute references, and
   * regulatory citations.
   */
  getCitationsFromURL(
    body: V1GetCitationsFromURLParams,
    options?: RequestOptions,
  ): APIPromise<V1GetCitationsFromURLResponse> {
    return this._client.post('/legal/v1/citations-from-url', { body, ...options });
  }

  /**
   * Retrieve the full text content of a legal document. Use after verifying the
   * source with legal.verify(). Returns complete text with optional highlights and
   * AI summary.
   */
  getFullText(body: V1GetFullTextParams, options?: RequestOptions): APIPromise<V1GetFullTextResponse> {
    return this._client.post('/legal/v1/full-text', { body, ...options });
  }

  /**
   * Search for a jurisdiction by name. Returns matching jurisdictions with their IDs
   * for use in legal.find() and other legal research endpoints.
   */
  listJurisdictions(
    body: V1ListJurisdictionsParams,
    options?: RequestOptions,
  ): APIPromise<V1ListJurisdictionsResponse> {
    return this._client.post('/legal/v1/jurisdictions', { body, ...options });
  }

  /**
   * Search the USPTO Open Data Portal for US patent applications and granted
   * patents. Supports free-text queries, field-specific search, filters by
   * assignee/inventor/status/type, date ranges, and pagination. Covers applications
   * filed on or after January 1, 2001. Data is refreshed daily.
   */
  patentSearch(body: V1PatentSearchParams, options?: RequestOptions): APIPromise<V1PatentSearchResponse> {
    return this._client.post('/legal/v1/patent-search', { body, ...options });
  }

  /**
   * Perform comprehensive legal research with multiple query variations. Uses
   * advanced deep search to find relevant sources across different phrasings of the
   * legal issue.
   */
  research(body: V1ResearchParams, options?: RequestOptions): APIPromise<V1ResearchResponse> {
    return this._client.post('/legal/v1/research', { body, ...options });
  }

  /**
   * Find cases and documents similar to a given legal source. Useful for finding
   * citing cases, related precedents, or similar statutes.
   */
  similar(body: V1SimilarParams, options?: RequestOptions): APIPromise<V1SimilarResponse> {
    return this._client.post('/legal/v1/similar', { body, ...options });
  }

  /**
   * Look up trademark status and details from the USPTO Trademark Status & Document
   * Retrieval (TSDR) system. Supports lookup by serial number or registration
   * number. Returns mark text, status, owner, goods/services, Nice classification,
   * filing/registration dates, and more.
   */
  trademarkSearch(
    body: V1TrademarkSearchParams,
    options?: RequestOptions,
  ): APIPromise<V1TrademarkSearchResponse> {
    return this._client.post('/legal/v1/trademark-search', { body, ...options });
  }

  /**
   * Validates legal citations against authoritative case law sources (CourtListener
   * database of ~10M cases). Returns verification status and case metadata for each
   * citation found in the input text. Accepts either a single citation or a full
   * text block containing multiple citations.
   */
  verify(body: V1VerifyParams, options?: RequestOptions): APIPromise<V1VerifyResponse> {
    return this._client.post('/legal/v1/verify', { body, ...options });
  }
}

export interface V1FindResponse {
  candidates?: Array<V1FindResponse.Candidate>;

  /**
   * Number of candidates found
   */
  found?: number;

  /**
   * Usage guidance
   */
  hint?: string;

  /**
   * Jurisdiction filter applied
   */
  jurisdiction?: string;

  /**
   * Original search query
   */
  query?: string;
}

export namespace V1FindResponse {
  export interface Candidate {
    /**
     * Text excerpt from the document
     */
    snippet?: string;

    /**
     * Domain of the source
     */
    source?: string;

    /**
     * Title of the document
     */
    title?: string;

    /**
     * URL of the legal source
     */
    url?: string;
  }
}

export interface V1GetCitationsResponse {
  citations?: Array<V1GetCitationsResponse.Citation>;
}

export namespace V1GetCitationsResponse {
  export interface Citation {
    /**
     * Structured Bluebook components. Null if citation format is not recognized.
     */
    components?: Citation.Components | null;

    /**
     * Whether citation was found in CourtListener database
     */
    found?: boolean;

    /**
     * Normalized citation string
     */
    normalized?: string;

    /**
     * Original citation as found in text
     */
    original?: string;

    span?: Citation.Span;
  }

  export namespace Citation {
    /**
     * Structured Bluebook components. Null if citation format is not recognized.
     */
    export interface Components {
      /**
       * Case name, e.g., "Bush v. Gore"
       */
      caseName?: string;

      /**
       * Court identifier
       */
      court?: string;

      /**
       * Starting page number
       */
      page?: number;

      /**
       * Pin cite (specific page)
       */
      pinCite?: number;

      /**
       * Reporter abbreviation, e.g., "U.S."
       */
      reporter?: string;

      /**
       * Volume number
       */
      volume?: number;

      /**
       * Decision year
       */
      year?: number;
    }

    export interface Span {
      end?: number;

      start?: number;
    }
  }
}

export interface V1GetCitationsFromURLResponse {
  citations?: V1GetCitationsFromURLResponse.Citations;

  /**
   * External links found in the document
   */
  externalLinks?: Array<string>;

  /**
   * Usage guidance
   */
  hint?: string;

  /**
   * Document title
   */
  title?: string;

  /**
   * Total citations found
   */
  totalCitations?: number;

  /**
   * Source document URL
   */
  url?: string;
}

export namespace V1GetCitationsFromURLResponse {
  export interface Citations {
    cases?: Array<Citations.Case>;

    regulations?: Array<Citations.Regulation>;

    statutes?: Array<Citations.Statute>;
  }

  export namespace Citations {
    export interface Case {
      /**
       * The citation string
       */
      citation?: string;

      /**
       * Number of occurrences
       */
      count?: number;

      /**
       * Citation type (usReporter, federalReporter, etc.)
       */
      type?: string;
    }

    export interface Regulation {
      /**
       * The citation string
       */
      citation?: string;

      /**
       * Number of occurrences
       */
      count?: number;

      /**
       * Citation type (cfr)
       */
      type?: string;
    }

    export interface Statute {
      /**
       * The citation string
       */
      citation?: string;

      /**
       * Number of occurrences
       */
      count?: number;

      /**
       * Citation type (usc)
       */
      type?: string;
    }
  }
}

export interface V1GetFullTextResponse {
  /**
   * Author or court
   */
  author?: string | null;

  /**
   * Total characters in text
   */
  characterCount?: number;

  /**
   * Highlighted relevant passages
   */
  highlights?: Array<string>;

  /**
   * Publication date
   */
  publishedDate?: string | null;

  /**
   * AI-generated summary
   */
  summary?: string | null;

  /**
   * Full document text
   */
  text?: string;

  /**
   * Document title
   */
  title?: string;

  /**
   * Document URL
   */
  url?: string;
}

export interface V1ListJurisdictionsResponse {
  /**
   * Number of matching jurisdictions
   */
  found?: number;

  /**
   * Usage guidance
   */
  hint?: string;

  jurisdictions?: Array<V1ListJurisdictionsResponse.Jurisdiction>;

  /**
   * Original search query
   */
  query?: string;
}

export namespace V1ListJurisdictionsResponse {
  export interface Jurisdiction {
    /**
     * Jurisdiction ID to use in other endpoints
     */
    id?: string;

    /**
     * Jurisdiction level
     */
    level?: 'federal' | 'state' | 'county' | 'municipal';

    /**
     * Full jurisdiction name
     */
    name?: string;

    /**
     * State abbreviation (if applicable)
     */
    state?: string | null;
  }
}

export interface V1PatentSearchResponse {
  /**
   * Number of results returned
   */
  limit?: number;

  /**
   * Current pagination offset
   */
  offset?: number;

  /**
   * Original search query
   */
  query?: string;

  /**
   * Array of matching patent applications
   */
  results?: Array<V1PatentSearchResponse.Result>;

  /**
   * Total number of matching patent applications
   */
  totalResults?: number;
}

export namespace V1PatentSearchResponse {
  export interface Result {
    /**
     * Patent application serial number
     */
    applicationNumber?: string;

    /**
     * Application type (Utility, Design, Plant, etc.)
     */
    applicationType?: string;

    /**
     * List of assignee/owner names
     */
    assignees?: Array<string>;

    /**
     * Entity status (e.g. "Small Entity", "Micro Entity")
     */
    entityStatus?: string | null;

    /**
     * Date the application was filed
     */
    filingDate?: string | null;

    /**
     * Date the patent was granted
     */
    grantDate?: string | null;

    /**
     * List of inventor names
     */
    inventors?: Array<string>;

    /**
     * Granted patent number (if granted)
     */
    patentNumber?: string | null;

    /**
     * Current application status (e.g. "Patented Case", "Pending")
     */
    status?: string;

    /**
     * Invention title
     */
    title?: string;
  }
}

export interface V1ResearchResponse {
  /**
   * Additional queries used
   */
  additionalQueries?: Array<string> | null;

  candidates?: Array<V1ResearchResponse.Candidate>;

  /**
   * Number of candidates found
   */
  found?: number;

  /**
   * Usage guidance
   */
  hint?: string;

  /**
   * Jurisdiction filter applied
   */
  jurisdiction?: string;

  /**
   * Primary search query
   */
  query?: string;

  /**
   * Search type used (deep)
   */
  searchType?: string;
}

export namespace V1ResearchResponse {
  export interface Candidate {
    /**
     * Highlighted relevant passages
     */
    highlights?: Array<string>;

    /**
     * Publication date
     */
    publishedDate?: string | null;

    /**
     * Text excerpt from the document
     */
    snippet?: string;

    /**
     * Domain of the source
     */
    source?: string;

    /**
     * Title of the document
     */
    title?: string;

    /**
     * URL of the legal source
     */
    url?: string;
  }
}

export interface V1SimilarResponse {
  /**
   * Number of similar sources found
   */
  found?: number;

  /**
   * Usage guidance
   */
  hint?: string;

  /**
   * Jurisdiction filter applied
   */
  jurisdiction?: string;

  similarSources?: Array<V1SimilarResponse.SimilarSource>;

  /**
   * Original source URL
   */
  sourceUrl?: string;
}

export namespace V1SimilarResponse {
  export interface SimilarSource {
    /**
     * Publication date
     */
    publishedDate?: string | null;

    /**
     * Text excerpt from the document
     */
    snippet?: string;

    /**
     * Domain of the source
     */
    source?: string;

    /**
     * Title of the document
     */
    title?: string;

    /**
     * URL of the similar source
     */
    url?: string;
  }
}

export interface V1TrademarkSearchResponse {
  /**
   * Attorney of record
   */
  attorney?: string | null;

  /**
   * Date the application was filed
   */
  filingDate?: string | null;

  /**
   * Goods and services descriptions with class numbers
   */
  goodsAndServices?: Array<V1TrademarkSearchResponse.GoodsAndService>;

  /**
   * URL to the mark image on USPTO CDN
   */
  imageUrl?: string | null;

  /**
   * The text of the trademark
   */
  markText?: string | null;

  /**
   * Type of mark (e.g. "Standard Character Mark", "Design Mark")
   */
  markType?: string | null;

  /**
   * Nice classification class numbers
   */
  niceClasses?: Array<number>;

  /**
   * Current owner/applicant information
   */
  owner?: V1TrademarkSearchResponse.Owner | null;

  /**
   * Date the mark was registered
   */
  registrationDate?: string | null;

  /**
   * USPTO registration number (if registered)
   */
  registrationNumber?: string | null;

  /**
   * USPTO serial number
   */
  serialNumber?: string;

  /**
   * Current status (e.g. "Registered", "Pending", "Abandoned", "Cancelled")
   */
  status?: string | null;

  /**
   * Date of most recent status update
   */
  statusDate?: string | null;

  /**
   * Canonical TSDR link for this mark
   */
  usptoUrl?: string;
}

export namespace V1TrademarkSearchResponse {
  export interface GoodsAndService {
    classNumber?: string | null;

    description?: string | null;
  }

  /**
   * Current owner/applicant information
   */
  export interface Owner {
    address?: string | null;

    entityType?: string | null;

    name?: string | null;
  }
}

export interface V1VerifyResponse {
  citations?: Array<V1VerifyResponse.Citation>;

  summary?: V1VerifyResponse.Summary;
}

export namespace V1VerifyResponse {
  export interface Citation {
    /**
     * Multiple candidates (when multiple_matches or heuristic verification)
     */
    candidates?: Array<Citation.Candidate>;

    /**
     * Case metadata (when verified)
     */
    case?: Citation.Case;

    /**
     * Confidence score (1.0 for CourtListener, heuristic score for fallback).
     */
    confidence?: number;

    /**
     * Normalized citation string
     */
    normalized?: string;

    /**
     * Original citation as found in text
     */
    original?: string;

    span?: Citation.Span;

    status?: 'verified' | 'not_found' | 'multiple_matches';

    /**
     * Source of verification result (heuristic for fallback matches).
     */
    verificationSource?: 'courtlistener' | 'heuristic';
  }

  export namespace Citation {
    export interface Candidate {
      court?: string;

      dateDecided?: string;

      name?: string;

      url?: string;
    }

    /**
     * Case metadata (when verified)
     */
    export interface Case {
      id?: number;

      court?: string;

      dateDecided?: string;

      docketNumber?: string;

      name?: string;

      parallelCitations?: Array<string>;

      shortName?: string;

      url?: string;
    }

    export interface Span {
      end?: number;

      start?: number;
    }
  }

  export interface Summary {
    /**
     * Citations with multiple possible matches
     */
    multipleMatches?: number;

    /**
     * Citations not found in database
     */
    notFound?: number;

    /**
     * Total citations found
     */
    total?: number;

    /**
     * Citations verified against real cases
     */
    verified?: number;
  }
}

export interface V1FindParams {
  /**
   * Search query (e.g., "fair use copyright", "Miranda rights")
   */
  query: string;

  /**
   * Optional jurisdiction ID from resolveJurisdiction (e.g., "california",
   * "us-federal")
   */
  jurisdiction?: string;

  /**
   * Number of results 1-25 (default: 10)
   */
  numResults?: number;
}

export interface V1GetCitationsParams {
  /**
   * Text containing citations to extract. Can be a single citation (e.g., "531 U.S.
   * 98") or a full document with multiple citations.
   */
  text: string;
}

export interface V1GetCitationsFromURLParams {
  /**
   * URL of the legal document to extract citations from
   */
  url: string;
}

export interface V1GetFullTextParams {
  /**
   * URL of the verified legal document
   */
  url: string;

  /**
   * Optional query to extract relevant highlights (e.g., "What is the holding?")
   */
  highlightQuery?: string;

  /**
   * Maximum characters to return (default: 10000, max: 50000)
   */
  maxCharacters?: number;

  /**
   * Optional query for generating a summary (e.g., "Summarize the key ruling")
   */
  summaryQuery?: string;
}

export interface V1ListJurisdictionsParams {
  /**
   * Jurisdiction name (e.g., "California", "US Federal", "NY")
   */
  name: string;
}

export interface V1PatentSearchParams {
  /**
   * Free-text search across all patent fields, or field-specific query (e.g.
   * "applicationMetaData.patentNumber:11234567"). Supports AND, OR, NOT operators.
   */
  query: string;

  /**
   * Filter by application status (e.g. "Patented Case", "Abandoned", "Pending")
   */
  applicationStatus?: string;

  /**
   * Filter by application type
   */
  applicationType?: 'Utility' | 'Design' | 'Plant' | 'Provisional' | 'Reissue';

  /**
   * Filter by assignee/owner name (e.g. "Google LLC")
   */
  assignee?: string;

  /**
   * Start of filing date range (YYYY-MM-DD)
   */
  filingDateFrom?: string;

  /**
   * End of filing date range (YYYY-MM-DD)
   */
  filingDateTo?: string;

  /**
   * Start of grant date range (YYYY-MM-DD)
   */
  grantDateFrom?: string;

  /**
   * End of grant date range (YYYY-MM-DD)
   */
  grantDateTo?: string;

  /**
   * Filter by inventor name
   */
  inventor?: string;

  /**
   * Number of results to return (default 25, max 100)
   */
  limit?: number;

  /**
   * Starting position for pagination
   */
  offset?: number;

  /**
   * Field to sort results by
   */
  sortBy?: 'filingDate' | 'grantDate';

  /**
   * Sort order (default desc, newest first)
   */
  sortOrder?: 'asc' | 'desc';
}

export interface V1ResearchParams {
  /**
   * Primary search query
   */
  query: string;

  /**
   * Additional query variations to search (e.g., different phrasings of the legal
   * issue)
   */
  additionalQueries?: Array<string>;

  /**
   * Optional jurisdiction ID from resolveJurisdiction
   */
  jurisdiction?: string;

  /**
   * Number of results 1-25 (default: 10)
   */
  numResults?: number;
}

export interface V1SimilarParams {
  /**
   * URL of a legal document to find similar sources for
   */
  url: string;

  /**
   * Optional jurisdiction ID to filter results
   */
  jurisdiction?: string;

  /**
   * Number of results 1-25 (default: 10)
   */
  numResults?: number;

  /**
   * Optional ISO date to find only newer documents (e.g., "2020-01-01")
   */
  startPublishedDate?: string;
}

export interface V1TrademarkSearchParams {
  /**
   * USPTO registration number (e.g. "6123456"). Provide either serialNumber or
   * registrationNumber.
   */
  registrationNumber?: string;

  /**
   * USPTO serial number (e.g. "97123456"). Provide either serialNumber or
   * registrationNumber.
   */
  serialNumber?: string;
}

export interface V1VerifyParams {
  /**
   * Text containing citations to verify. Can be a single citation (e.g., "531 U.S.
   * 98") or a full document with multiple citations.
   */
  text: string;
}

export declare namespace V1 {
  export {
    type V1FindResponse as V1FindResponse,
    type V1GetCitationsResponse as V1GetCitationsResponse,
    type V1GetCitationsFromURLResponse as V1GetCitationsFromURLResponse,
    type V1GetFullTextResponse as V1GetFullTextResponse,
    type V1ListJurisdictionsResponse as V1ListJurisdictionsResponse,
    type V1PatentSearchResponse as V1PatentSearchResponse,
    type V1ResearchResponse as V1ResearchResponse,
    type V1SimilarResponse as V1SimilarResponse,
    type V1TrademarkSearchResponse as V1TrademarkSearchResponse,
    type V1VerifyResponse as V1VerifyResponse,
    type V1FindParams as V1FindParams,
    type V1GetCitationsParams as V1GetCitationsParams,
    type V1GetCitationsFromURLParams as V1GetCitationsFromURLParams,
    type V1GetFullTextParams as V1GetFullTextParams,
    type V1ListJurisdictionsParams as V1ListJurisdictionsParams,
    type V1PatentSearchParams as V1PatentSearchParams,
    type V1ResearchParams as V1ResearchParams,
    type V1SimilarParams as V1SimilarParams,
    type V1TrademarkSearchParams as V1TrademarkSearchParams,
    type V1VerifyParams as V1VerifyParams,
  };
}
