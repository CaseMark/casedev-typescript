// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Search and read legal AI skills for agents
 */
export class Custom extends APIResource {
  /**
   * List all custom skills for the authenticated organization. Supports cursor-based
   * pagination.
   */
  list(
    query: CustomListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomListResponse> {
    return this._client.get('/skills/custom', { query, ...options });
  }
}

export interface CustomListResponse {
  has_more?: boolean;

  next_cursor?: string | null;

  skills?: Array<CustomListResponse.Skill>;
}

export namespace CustomListResponse {
  export interface Skill {
    created_at?: string;

    metadata?: unknown;

    name?: string;

    slug?: string;

    summary?: string | null;

    tags?: Array<string>;

    updated_at?: string;

    version?: number;
  }
}

export interface CustomListParams {
  /**
   * Cursor for pagination (skill ID from previous page)
   */
  cursor?: string;

  /**
   * Maximum number of results (1-100)
   */
  limit?: number;

  /**
   * Filter by tag
   */
  tag?: string;
}

export declare namespace Custom {
  export { type CustomListResponse as CustomListResponse, type CustomListParams as CustomListParams };
}
