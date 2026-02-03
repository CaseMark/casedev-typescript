// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  /**
   * Analyzes text or vault documents for legal privilege. Detects attorney-client
   * privilege, work product doctrine, common interest privilege, and litigation hold
   * materials.
   *
   * Returns structured privilege flags with confidence scores and policy-friendly
   * rationale suitable for discovery workflows and privilege logs.
   *
   * **Size Limit:** Maximum 200,000 characters (larger documents rejected).
   *
   * **Permissions:** Requires `chat` permission. When using `document_id`, also
   * requires `vault` permission.
   *
   * **Note:** When analyzing vault documents, results are automatically stored in
   * the document's `privilege_analysis` metadata field.
   */
  detect(body: V1DetectParams, options?: RequestOptions): APIPromise<V1DetectResponse> {
    return this._client.post('/privilege/v1/detect', { body, ...options });
  }
}

export interface V1DetectResponse {
  categories: Array<V1DetectResponse.Category>;

  /**
   * Overall confidence score (0-1)
   */
  confidence: number;

  /**
   * Policy-friendly explanation for privilege log
   */
  policy_rationale: string;

  /**
   * Whether any privilege was detected
   */
  privileged: boolean;

  /**
   * Recommended action for discovery
   */
  recommendation: 'withhold' | 'redact' | 'produce' | 'review';
}

export namespace V1DetectResponse {
  export interface Category {
    /**
     * Confidence for this category (0-1)
     */
    confidence?: number;

    /**
     * Whether this privilege type was detected
     */
    detected?: boolean;

    /**
     * Specific phrases or patterns found
     */
    indicators?: Array<string>;

    /**
     * Explanation of detection result
     */
    rationale?: string;

    /**
     * Privilege category
     */
    type?: string;
  }
}

export interface V1DetectParams {
  /**
   * Privilege categories to check. Defaults to all: attorney_client, work_product,
   * common_interest, litigation_hold
   */
  categories?: Array<'attorney_client' | 'work_product' | 'common_interest' | 'litigation_hold'>;

  /**
   * Text content to analyze (required if document_id not provided)
   */
  content?: string;

  /**
   * Vault object ID to analyze (required if content not provided)
   */
  document_id?: string;

  /**
   * Include detailed rationale for each category
   */
  include_rationale?: boolean;

  /**
   * Jurisdiction for privilege rules
   */
  jurisdiction?: 'US-Federal';

  /**
   * LLM model to use for analysis
   */
  model?: string;

  /**
   * Vault ID (required when using document_id)
   */
  vault_id?: string;
}

export declare namespace V1 {
  export { type V1DetectResponse as V1DetectResponse, type V1DetectParams as V1DetectParams };
}
