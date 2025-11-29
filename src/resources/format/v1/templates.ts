// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Templates extends APIResource {
  /**
   * Create a new format template for document formatting. Templates support
   * variables using `{{variable}}` syntax and can be used for captions, signatures,
   * letterheads, certificates, footers, or custom formatting needs.
   */
  create(body: TemplateCreateParams, options?: RequestOptions): APIPromise<TemplateCreateResponse> {
    return this._client.post('/format/v1/templates', { body, ...options });
  }

  /**
   * Retrieve a specific document format template by ID. Format templates define how
   * documents should be structured and formatted for specific legal use cases such
   * as contracts, briefs, or pleadings.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/format/v1/templates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all format templates for the organization. Templates define reusable
   * document formatting patterns with customizable variables for consistent legal
   * document generation.
   *
   * Filter by type to get specific template categories like contracts, pleadings, or
   * correspondence.
   */
  list(query: TemplateListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/format/v1/templates', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TemplateCreateResponse {
  /**
   * Template ID
   */
  id?: string;

  /**
   * Creation timestamp
   */
  createdAt?: string;

  /**
   * Template name
   */
  name?: string;

  /**
   * Template type
   */
  type?: string;

  /**
   * Detected template variables
   */
  variables?: Array<string>;
}

export interface TemplateCreateParams {
  /**
   * Template content with {{variable}} placeholders
   */
  content: string;

  /**
   * Template name
   */
  name: string;

  /**
   * Template type
   */
  type: 'caption' | 'signature' | 'letterhead' | 'certificate' | 'footer' | 'custom';

  /**
   * Template description
   */
  description?: string;

  /**
   * CSS styles for the template
   */
  styles?: unknown;

  /**
   * Template tags for organization
   */
  tags?: Array<string>;

  /**
   * Template variables (auto-detected if not provided)
   */
  variables?: Array<string>;
}

export interface TemplateListParams {
  /**
   * Filter templates by type (e.g., contract, pleading, letter)
   */
  type?: string;
}

export declare namespace Templates {
  export {
    type TemplateCreateResponse as TemplateCreateResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateListParams as TemplateListParams,
  };
}
