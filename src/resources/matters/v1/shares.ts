// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class Shares extends APIResource {
  /**
   * Grant another organization scoped access to this matter and its primary vault.
   */
  create(id: string, body: ShareCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/matters/v1/${id}/shares`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List cross-org shares for a matter. Owner only.
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/matters/v1/${id}/shares`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Revoke a matter share and its linked vault share.
   */
  delete(shareID: string, params: ShareDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/matters/v1/${id}/shares/${shareID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ShareCreateParams {
  target_org_id: string;

  expires_at?: string | null;

  permission?: 'read' | 'edit';
}

export interface ShareDeleteParams {
  id: string;
}

export declare namespace Shares {
  export { type ShareCreateParams as ShareCreateParams, type ShareDeleteParams as ShareDeleteParams };
}
