// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class AgentTypes extends APIResource {
  /**
   * Create a reusable agent role for legal matter orchestration.
   */
  create(body: AgentTypeCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/matters/v1/agent-types', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List reusable agent roles for the authenticated organization.
   */
  list(query: AgentTypeListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/matters/v1/agent-types', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AgentTypeCreateParams {
  instructions: string;

  name: string;

  description?: string;

  disabled_tools?: Array<string>;

  enabled_tools?: Array<string>;

  is_active?: boolean;

  is_default?: boolean;

  metadata?: { [key: string]: unknown };

  model?: string;

  skill_refs?: Array<string>;

  slug?: string;
}

export interface AgentTypeListParams {
  active?: boolean;
}

export declare namespace AgentTypes {
  export {
    type AgentTypeCreateParams as AgentTypeCreateParams,
    type AgentTypeListParams as AgentTypeListParams,
  };
}
