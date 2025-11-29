// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TemplatesAPI from './templates';
import { TemplateCreateParams, TemplateCreateResponse, TemplateListParams, Templates } from './templates';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);

  /**
   * Convert Markdown, JSON, or text content to professionally formatted PDF, DOCX,
   * or HTML documents. Supports template components with variable interpolation for
   * creating consistent legal documents like contracts, briefs, and reports.
   */
  createDocument(body: V1CreateDocumentParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/format/v1/document', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface V1CreateDocumentParams {
  /**
   * The source content to format
   */
  content: string;

  /**
   * Desired output format
   */
  output_format: 'pdf' | 'docx' | 'html_preview';

  /**
   * Format of the input content
   */
  input_format?: 'md' | 'json' | 'text';

  options?: V1CreateDocumentParams.Options;
}

export namespace V1CreateDocumentParams {
  export interface Options {
    /**
     * Template components with variables
     */
    components?: Array<Options.Component>;
  }

  export namespace Options {
    export interface Component {
      /**
       * Inline template content
       */
      content?: string;

      /**
       * Custom styling options
       */
      styles?: unknown;

      /**
       * ID of saved template component
       */
      templateId?: string;

      /**
       * Variables for template interpolation
       */
      variables?: unknown;
    }
  }
}

V1.Templates = Templates;

export declare namespace V1 {
  export { type V1CreateDocumentParams as V1CreateDocumentParams };

  export {
    Templates as Templates,
    type TemplateCreateResponse as TemplateCreateResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateListParams as TemplateListParams,
  };
}
