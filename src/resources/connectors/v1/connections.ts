// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Import and export between provider folders and vaults
 */
export class Connections extends APIResource {
  /**
   * Create a pending provider connection and return a one-time connect_url for the
   * hosted OAuth flow. The user completes provider consent at connect_url and is
   * redirected to return_url with ?connection_id=.
   */
  create(params: ConnectionCreateParams, options?: RequestOptions): APIPromise<ConnectionCreateResponse> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...body } = params;
    return this._client.post('/connectors/v1/connections', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xCaseConnectorSubject != null ?
            { 'x-case-connector-subject': xCaseConnectorSubject }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve one provider connection, including account identity and health.
   */
  retrieve(
    id: string,
    params: ConnectionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'x-case-connector-subject': xCaseConnectorSubject } = params ?? {};
    return this._client.get(path`/connectors/v1/connections/${id}`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xCaseConnectorSubject != null ?
            { 'x-case-connector-subject': xCaseConnectorSubject }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * List provider connections for the organization, with health status. Returns at
   * most `limit` connections (default 200, maximum 200). When `pagination.has_more`
   * is true, replay `pagination.next_cursor` as `?cursor=` to fetch the following
   * page. Cursors are opaque and are only valid for the exact filter set and
   * installation/subject scope they were issued under.
   */
  list(
    params: ConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionListResponse> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...query } = params ?? {};
    return this._client.get('/connectors/v1/connections', {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(xCaseConnectorSubject != null ?
            { 'x-case-connector-subject': xCaseConnectorSubject }
          : undefined),
        },
        options?.headers,
      ]),
    });
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
    const { purge, 'x-case-connector-subject': xCaseConnectorSubject } = params ?? {};
    return this._client.delete(path`/connectors/v1/connections/${id}`, {
      query: { purge },
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xCaseConnectorSubject != null ?
            { 'x-case-connector-subject': xCaseConnectorSubject }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Browse the provider one level at a time. Without a site, container, or parent,
   * returns top-level resources. Pass the stable browse_ref fields returned by one
   * response to navigate into the next level. Returns 403
   * provider_scope_insufficient when the connection scope cannot browse server-side.
   * Clio browsing shares request capacity with background runs; throttled responses
   * include Retry-After when a retry deadline is known.
   */
  browse(
    id: string,
    params: ConnectionBrowseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionBrowseResponse> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...query } = params ?? {};
    return this._client.get(path`/connectors/v1/connections/${id}/browse`, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(xCaseConnectorSubject != null ?
            { 'x-case-connector-subject': xCaseConnectorSubject }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Enable or disable new runs and scheduled syncs for one provider across the
   * authenticated organization or installation. This organization-wide operation
   * requires explicit confirmation. Existing credentials, links, and imported files
   * are preserved; active runs are not interrupted.
   */
  updateAll(body: ConnectionUpdateAllParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/connectors/v1/connections', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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

  /**
   * @deprecated Mirror of `pagination.next_cursor`. Prefer `pagination`.
   */
  cursor?: string | null;

  pagination?: ConnectionListResponse.Pagination;

  /**
   * Available import providers and their adapter-declared capabilities.
   */
  providers?: Array<ConnectionListResponse.Provider>;
}

export namespace ConnectionListResponse {
  export interface Capabilities {
    google_drive_folder_mirroring?: boolean;
  }

  export interface Pagination {
    has_more?: boolean;

    limit?: number;

    next_cursor?: string | null;
  }

  export interface Provider {
    id?: string;

    resource_types?: Array<string>;

    scope_tier?: string;

    supports_export?: boolean;
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

    description?: string | null;

    /**
     * Importable container root, when different from its browse reference.
     */
    import_ref?: unknown | null;

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
  /**
   * Body param
   */
  provider: 'box' | 'clio' | 'dropbox' | 'gdrive' | 'microsoft' | 'smokeball';

  /**
   * Body param: HTTPS URL the user is sent back to after consent.
   */
  return_url: string;

  /**
   * Body param: Provider-specific OAuth permission tier. Omit to use the provider's
   * default. Microsoft defaults to organizational OneDrive/SharePoint; use
   * microsoft.personal.read for a personal Microsoft account's own OneDrive.
   * Microsoft write tiers are a separately gated private pilot; exports and paired
   * sync are not yet available.
   */
  scope_tier?:
    | 'box.readwrite'
    | 'box.readwrite.webhooks'
    | 'clio.us'
    | 'dropbox.readwrite'
    | 'drive'
    | 'microsoft.read'
    | 'microsoft.personal.read'
    | 'microsoft.write'
    | 'microsoft.personal.write'
    | 'smokeball.us'
    | 'smokeball.us.staging';

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface ConnectionRetrieveParams {
  /**
   * Trusted server-to-server application-user assertion. Derive it from the
   * authenticated application session, never browser input. Omit only for the legacy
   * organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface ConnectionListParams {
  /**
   * Query param: Opaque continuation cursor from `pagination.next_cursor` of the
   * previous page. Must be replayed with the same filters and scope that produced
   * it.
   */
  cursor?: string;

  /**
   * Query param: Connections per page (1-200). Defaults to 200.
   */
  limit?: number;

  /**
   * Query param
   */
  provider?: string;

  /**
   * Query param
   */
  status?: 'pending' | 'healthy' | 'reauth_required' | 'revoked' | 'throttled';

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface ConnectionDeleteParams {
  /**
   * Query param
   */
  purge?: boolean;

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface ConnectionBrowseParams {
  /**
   * Query param: Container id to list, or the container containing parent
   */
  container?: string;

  /**
   * Query param
   */
  cursor?: string;

  /**
   * Query param
   */
  page_size?: number;

  /**
   * Query param: Folder id to list
   */
  parent?: string;

  /**
   * Query param: Optional provider-supported search text
   */
  query?: string;

  /**
   * Query param: Site id to list
   */
  site?: string;

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface ConnectionUpdateAllParams {
  /**
   * Confirms that this change applies to every user connection in scope.
   */
  confirm_organization_wide: true;

  enabled: boolean;

  provider: string;
}

export declare namespace Connections {
  export {
    type ConnectionCreateResponse as ConnectionCreateResponse,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionBrowseResponse as ConnectionBrowseResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionRetrieveParams as ConnectionRetrieveParams,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionDeleteParams as ConnectionDeleteParams,
    type ConnectionBrowseParams as ConnectionBrowseParams,
    type ConnectionUpdateAllParams as ConnectionUpdateAllParams,
  };
}
