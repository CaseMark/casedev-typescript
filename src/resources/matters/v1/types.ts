// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class Types extends APIResource {
  /**
   * Create a matter type with plain-English operating instructions and seeded work.
   */
  create(body: TypeCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/matters/v1/types', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a single matter type.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/matters/v1/types/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a matter type.
   */
  update(id: string, body: TypeUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/matters/v1/types/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List matter types for the authenticated organization.
   */
  list(query: TypeListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/matters/v1/types', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TypeCreateParams {
  name: string;

  default_agent_type_id?: string;

  default_metadata?: { [key: string]: unknown };

  default_work_items?: Array<{ [key: string]: unknown }>;

  description?: string;

  exit_criteria?: Array<string>;

  instructions?: string;

  intake_requirements?: Array<string>;

  is_active?: boolean;

  orchestration_mode?: 'auto' | 'human';

  review_agent_type_id?: string;

  review_criteria?: Array<string>;

  skill_refs?: Array<string>;

  slug?: string;
}

export interface TypeUpdateParams {
  default_agent_type_id?: string | null;

  default_metadata?: { [key: string]: unknown };

  default_work_items?: Array<{ [key: string]: unknown }>;

  description?: string | null;

  exit_criteria?: Array<string>;

  instructions?: string | null;

  intake_requirements?: Array<string>;

  is_active?: boolean;

  name?: string;

  orchestration_mode?: 'auto' | 'human';

  review_agent_type_id?: string | null;

  review_criteria?: Array<string>;

  skill_refs?: Array<string>;

  slug?: string;
}

export interface TypeListParams {
  active?: boolean;
}

export declare namespace Types {
  export {
    type TypeCreateParams as TypeCreateParams,
    type TypeUpdateParams as TypeUpdateParams,
    type TypeListParams as TypeListParams,
  };
}
