// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Extract text from PDFs, images, and scanned documents
 */
export class V1 extends APIResource {
  /**
   * Retrieve the status and results of an OCR job. Returns job progress and
   * metadata; full extracted text is included only when include_text=true.
   *
   * @example
   * ```ts
   * const v1 = await client.ocr.v1.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: V1RetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1RetrieveResponse> {
    return this._client.get(path`/ocr/v1/${id}`, { query, ...options });
  }

  /**
   * Download OCR processing results in various formats by redirecting to the OCR
   * service download URL.
   *
   * @example
   * ```ts
   * const response = await client.ocr.v1.download('text', {
   *   id: 'id',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(
    type: 'text' | 'json' | 'pdf' | 'original',
    params: V1DownloadParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { id } = params;
    return this._client.get(path`/ocr/v1/${id}/download/${type}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Submit a document for OCR processing to extract text, detect tables, forms, and
   * other features. Supports PDFs, images, and scanned documents. Returns a job ID
   * that can be used to track processing status.
   *
   * @example
   * ```ts
   * const response = await client.ocr.v1.process({
   *   document_url: 'https://example.com/contract.pdf',
   * });
   * ```
   */
  process(body: V1ProcessParams, options?: RequestOptions): APIPromise<V1ProcessResponse> {
    return this._client.post('/ocr/v1/process', { body, ...options });
  }
}

export interface V1RetrieveResponse {
  /**
   * OCR job ID
   */
  id: string;

  /**
   * Job creation timestamp
   */
  created_at: string;

  /**
   * Current job status
   */
  status: 'pending' | 'processing' | 'completed' | 'failed';

  /**
   * Total number of OCR chunks.
   */
  chunk_count?: number;

  /**
   * Exact number of failed OCR chunks.
   */
  chunks_failed?: number;

  /**
   * Job completion timestamp
   */
  completed_at?: string;

  /**
   * Safe human-readable failure message; null when no failure is recorded.
   */
  error?: string | null;

  /**
   * Stable failure identifier, such as source_access_denied, invalid_pdf,
   * inference_failed, chunks_failed, or result_upload_failed. Historic failures may
   * be unclassified.
   */
  error_code?: string | null;

  /**
   * Operation that failed.
   */
  error_stage?:
    | 'dispatch'
    | 'download'
    | 'document_validation'
    | 'chunking'
    | 'engine_init'
    | 'inference'
    | 'feature_processing'
    | 'result_write'
    | 'chunk_processing'
    | 'result_assembly'
    | 'result_upload'
    | null;

  /**
   * Bounded failure samples. Page ranges are one-based and inclusive; chunks_failed
   * and chunk_count retain exact totals.
   */
  failed_chunks?: Array<V1RetrieveResponse.FailedChunk> | null;

  /**
   * Additional processing metadata
   */
  metadata?: unknown;

  /**
   * Number of pages processed
   */
  page_count?: number;

  /**
   * Whether retrying the same document may help. Unknown failures retain bounded
   * retry behavior.
   */
  retryable?: boolean | null;

  /**
   * Extracted text content when completed and include_text=true
   */
  text?: string;
}

export namespace V1RetrieveResponse {
  export interface FailedChunk {
    chunk_id?: string;

    error?: string;

    error_code?: string;

    error_stage?: string;

    page_end?: number;

    page_start?: number;

    retryable?: boolean;
  }
}

export interface V1ProcessResponse {
  /**
   * Unique job identifier
   */
  id?: string;

  /**
   * Job creation timestamp
   */
  created_at?: string;

  /**
   * Document identifier
   */
  document_id?: string;

  /**
   * OCR engine used
   */
  engine?: string;

  /**
   * Estimated completion time
   */
  estimated_completion?: string;

  /**
   * Number of pages detected
   */
  page_count?: number;

  /**
   * Current job status
   */
  status?: 'queued' | 'processing' | 'completed' | 'failed';
}

export interface V1RetrieveParams {
  /**
   * Include full OCR text in completed responses (default: false)
   */
  include_text?: 'true' | 'false';
}

export interface V1DownloadParams {
  /**
   * OCR job ID returned from the initial OCR request
   */
  id: string;
}

export interface V1ProcessParams {
  /**
   * URL or S3 path to the document to process
   */
  document_url: string;

  /**
   * URL to receive completion webhook
   */
  callback_url?: string;

  /**
   * Optional custom document identifier
   */
  document_id?: string;

  /**
   * OCR engine to use
   */
  engine?: 'doctr' | 'paddleocr';

  /**
   * Additional processing options
   */
  features?: V1ProcessParams.Features;

  /**
   * S3 bucket to store results
   */
  result_bucket?: string;

  /**
   * S3 key prefix for results
   */
  result_prefix?: string;
}

export namespace V1ProcessParams {
  /**
   * Additional processing options
   */
  export interface Features {
    /**
     * Generate searchable PDF with text layer
     */
    embed?: { [key: string]: unknown };

    /**
     * Detect and extract form fields
     */
    forms?: { [key: string]: unknown };

    /**
     * Extract tables as structured data
     */
    tables?: Features.Tables;
  }

  export namespace Features {
    /**
     * Extract tables as structured data
     */
    export interface Tables {
      /**
       * Output format for extracted tables
       */
      format?: 'csv' | 'json';

      [k: string]: unknown;
    }
  }
}

export declare namespace V1 {
  export {
    type V1RetrieveResponse as V1RetrieveResponse,
    type V1ProcessResponse as V1ProcessResponse,
    type V1RetrieveParams as V1RetrieveParams,
    type V1DownloadParams as V1DownloadParams,
    type V1ProcessParams as V1ProcessParams,
  };
}
