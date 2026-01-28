// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  /**
   * Retrieve the status and results of an OCR job. Returns job progress, extracted
   * text, and metadata when processing is complete.
   *
   * @example
   * ```ts
   * const v1 = await client.ocr.v1.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<V1RetrieveResponse> {
    return this._client.get(path`/ocr/v1/${id}`, options);
  }

  /**
   * Download OCR processing results in various formats. Returns the processed
   * document as text extraction, structured JSON with coordinates, searchable PDF
   * with text layer, or the original uploaded document.
   *
   * @example
   * ```ts
   * const response = await client.ocr.v1.download('text', {
   *   id: 'id',
   * });
   * ```
   */
  download(
    type: 'text' | 'json' | 'pdf' | 'original',
    params: V1DownloadParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { id } = params;
    return this._client.get(path`/ocr/v1/${id}/download/${type}`, options);
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
  id?: string;

  /**
   * Job completion timestamp
   */
  completed_at?: string;

  /**
   * Job creation timestamp
   */
  created_at?: string;

  /**
   * Additional processing metadata
   */
  metadata?: unknown;

  /**
   * Number of pages processed
   */
  page_count?: number;

  /**
   * Current job status
   */
  status?: 'pending' | 'processing' | 'completed' | 'failed';

  /**
   * Extracted text content (when completed)
   */
  text?: string;
}

export type V1DownloadResponse = Uploadable;

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
    type V1DownloadResponse as V1DownloadResponse,
    type V1ProcessResponse as V1ProcessResponse,
    type V1DownloadParams as V1DownloadParams,
    type V1ProcessParams as V1ProcessParams,
  };
}
