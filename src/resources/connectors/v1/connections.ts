// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Import and export between provider folders (Google Drive) and vaults
 */
export class Connections extends APIResource {
  /**
   * Create a pending provider connection and return a one-time connect_url for the
   * hosted OAuth flow. The user completes provider consent at connect_url and is
   * redirected to return_url with ?connection_id=.
   */
  create(body: ConnectionCreateParams, options?: RequestOptions): APIPromise<ConnectionCreateResponse> {
    return this._client.post('/connectors/v1/connections', { body, ...options });
  }

  /**
   * Retrieve one provider connection, including account identity and health.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/connectors/v1/connections/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List provider connections for the organization, with health status.
   */
  list(
    query: ConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionListResponse> {
    return this._client.get('/connectors/v1/connections', { query, ...options });
  }

  /**
   * Unlink a provider account: revoke tokens at the provider and delete them.
   * purge=true additionally deletes the vault documents its import links brought in.
   */
  delete(
    id: string,
    params: ConnectionDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { purge } = params ?? {};
    return this._client.delete(path`/connectors/v1/connections/${id}`, {
      query: { purge },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Browse the provider one level at a time. Without a site, container, or parent,
   * returns top-level resources. Pass the stable browse_ref fields returned by one
   * response to navigate into the next level. Returns 403
   * provider_scope_insufficient when the connection scope cannot browse server-side.
   */
  browse(
    id: string,
    query: ConnectionBrowseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionBrowseResponse> {
    return this._client.get(path`/connectors/v1/connections/${id}/browse`, { query, ...options });
  }
}

export interface ConnectionCreateResponse {
  connect_url?: string;

  connection_id?: string;

  expires_at?: string;
}

export interface ConnectionListResponse {
  capabilities?: ConnectionListResponse.Capabilities;

  connections?: Array<unknown>;

  cursor?: string | null;
}

export namespace ConnectionListResponse {
  export interface Capabilities {
    google_drive_folder_mirroring?: boolean;
  }
}

export interface ConnectionBrowseResponse {
  cursor?: string | null;

  items?: Array<ConnectionBrowseResponse.Item>;
}

export namespace ConnectionBrowseResponse {
  export interface Item {
    id?: string;

    browse_ref?: unknown | null;

    container_id?: string | null;

    kind?: 'my_drive' | 'shared_drive' | 'matter' | 'site' | 'document_library' | 'folder' | 'file';

    mime_type?: string | null;

    modified_at?: string | null;

    name?: string;

    parent_ids?: Array<string>;

    path?: string | null;

    size_bytes?: number | null;
  }
}

export interface ConnectionCreateParams {
  provider: 'clio' | 'gdrive' | 'microsoft';

  /**
   * HTTPS URL the user is sent back to after consent.
   */
  return_url: string;

  /**
   * Provider-specific OAuth permission tier. Omit to use the provider's default.
   */
  scope_tier?: 'clio.us' | 'drive' | 'microsoft.read';
}

export interface ConnectionListParams {
  provider?: string;

  status?: 'pending' | 'healthy' | 'reauth_required' | 'revoked' | 'throttled';
}

export interface ConnectionDeleteParams {
  purge?: boolean;
}

export interface ConnectionBrowseParams {
  /**
   * Container id to list, or the container containing parent
   */
  container?: string;

  cursor?: string;

  page_size?: number;

  /**
   * Folder id to list
   */
  parent?: string;

  /**
   * Optional provider-supported search text
   */
  query?: string;

  /**
   * Site id to list
   */
  site?: string;
}

export declare namespace Connections {
  export {
    type ConnectionCreateResponse as ConnectionCreateResponse,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionBrowseResponse as ConnectionBrowseResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionDeleteParams as ConnectionDeleteParams,
    type ConnectionBrowseParams as ConnectionBrowseParams,
  };
}
