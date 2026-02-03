// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';

export class V1 extends APIResource {
  /**
   * Populate fields inside a DOCX template using SuperDoc annotations. Supports
   * text, images, dates, and numbers. Can target individual fields by ID or multiple
   * fields by group.
   */
  annotate(body: V1AnnotateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/superdoc/v1/annotate', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Convert documents between formats using SuperDoc. Supports DOCX to PDF, Markdown
   * to DOCX, and HTML to DOCX conversions.
   */
  convert(body: V1ConvertParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(
      '/superdoc/v1/convert',
      maybeMultipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
          __binaryResponse: true,
        },
        this._client,
      ),
    );
  }
}

export interface V1AnnotateParams {
  /**
   * Document source - provide either URL or base64
   */
  document: V1AnnotateParams.Document;

  /**
   * Fields to populate in the template
   */
  fields: Array<V1AnnotateParams.Field>;

  /**
   * Output format for the annotated document
   */
  output_format?: 'docx' | 'pdf';
}

export namespace V1AnnotateParams {
  /**
   * Document source - provide either URL or base64
   */
  export interface Document {
    /**
     * Base64-encoded DOCX template
     */
    base64?: string;

    /**
     * URL to the DOCX template
     */
    url?: string;
  }

  export interface Field {
    /**
     * Field data type
     */
    type: 'text' | 'image' | 'date' | 'number';

    /**
     * Value to populate
     */
    value: string | number;

    /**
     * Target field ID (for single field)
     */
    id?: string;

    /**
     * Target field group (for multiple fields with same tag)
     */
    group?: string;

    /**
     * Optional configuration (e.g., image dimensions)
     */
    options?: Field.Options;
  }

  export namespace Field {
    /**
     * Optional configuration (e.g., image dimensions)
     */
    export interface Options {
      /**
       * Image height in pixels
       */
      height?: number;

      /**
       * Image width in pixels
       */
      width?: number;
    }
  }
}

export interface V1ConvertParams {
  /**
   * Source format of the document
   */
  from: 'docx' | 'md' | 'html';

  /**
   * Base64-encoded document content
   */
  document_base64?: string;

  /**
   * URL to the document to convert
   */
  document_url?: string;

  /**
   * Target format for conversion
   */
  to?: 'pdf' | 'docx';
}

export declare namespace V1 {
  export { type V1AnnotateParams as V1AnnotateParams, type V1ConvertParams as V1ConvertParams };
}
