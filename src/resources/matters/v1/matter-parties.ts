// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class MatterParties extends APIResource {
  /**
   * Attach a reusable party to a matter with a matter-specific role.
   */
  create(id: string, body: MatterPartyCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/matters/v1/${id}/parties`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List parties attached to a matter.
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/matters/v1/${id}/parties`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MatterPartyCreateParams {
  party_id: string;

  role:
    | 'client'
    | 'prospect'
    | 'opposing_party'
    | 'opposing_counsel'
    | 'co_counsel'
    | 'judge'
    | 'expert'
    | 'witness'
    | 'vendor'
    | 'insurer'
    | 'other';

  custom_fields?: { [key: string]: unknown } | null;

  is_primary?: boolean;

  metadata?: { [key: string]: unknown };

  notes?: string | null;

  set_as_client?: boolean;
}

export declare namespace MatterParties {
  export { type MatterPartyCreateParams as MatterPartyCreateParams };
}
