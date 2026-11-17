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
  ): APIPromise<ConnectionRetrieveResponse> {
    const { 'x-case-connector-subject': xCaseConnectorSubject } = params ?? {};
    return this._client.get(path`/connectors/v1/connections/${id}`, {
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
   * Create one folder at the provider directly under a browse location, then export
   * into it with POST /connectors/v1/transfer. Name the parent with the same site,
   * container, and parent fields browse accepts (for Clio and Smokeball, a matter
   * root is the browse_ref the matter returned). A folder of the same name already
   * under the parent is returned with 200 instead of a duplicate; a new folder
   * returns 201. Smokeball creates folders asynchronously: when the new folder is
   * not listed yet the response is 202 with code folder_creation_pending and no
   * folder. Repeat the request after a short wait to get it with 200; a repeat sent
   * while it is still not listed asks Smokeball again and can leave two folders with
   * that name, so space repeats out. Returns 403 provider_scope_insufficient when
   * the connection was granted read access only; reconnect with write access.
   */
  createFolder(id: string, params: ConnectionCreateFolderParams, options?: RequestOptions): APIPromise<void> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...body } = params;
    return this._client.post(path`/connectors/v1/connections/${id}/folders`, {
      body,
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
   * Create a seven-day, replaceable IT approval link for a pending Microsoft
   * connection. Approval does not connect an account. Only delegated document read
   * scopes are requested.
   */
  createMicrosoftAdminApproval(
    id: string,
    params: ConnectionCreateMicrosoftAdminApprovalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionCreateMicrosoftAdminApprovalResponse> {
    const { 'x-case-connector-subject': xCaseConnectorSubject } = params ?? {};
    return this._client.post(path`/connectors/v1/connections/${id}/microsoft-admin-approval`, {
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
   * List every file under one folder, at any depth, as a flat paginated list, to
   * preview what importing that folder would bring in. Pass the browse_ref fields of
   * a folder or container. Each file carries its path relative to that folder. A
   * page returns as soon as it holds files, so it may be shorter than page_size
   * while cursor is still set; keep requesting until cursor is null. The listing
   * stops after 10,000 files and sets truncated. Returns 422 contents_not_supported
   * when the provider cannot list folder contents, and shares the provider request
   * budget with browsing and background runs.
   */
  listContents(
    id: string,
    params: ConnectionListContentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionListContentsResponse> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...query } = params ?? {};
    return this._client.get(path`/connectors/v1/connections/${id}/contents`, {
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
   * Resolve a pasted provider folder link to that folder's browse item, including
   * its browse_ref, name, and path when the provider reports it cheaply. Supports
   * Google Drive folder and open?id= links, Box folder and shared links, Dropbox
   * shared links, and OneDrive/SharePoint sharing links. Returns 400
   * link_not_recognized for links of another provider or form, 422 link_not_folder
   * for file links, 422 link_not_in_account when a Dropbox or Box shared folder is
   * not in the connected account, 404 link_not_accessible when the account cannot
   * see it, and 422 link_resolve_not_supported for providers without folder links.
   * Shares the provider request budget with browsing.
   */
  resolveLink(
    id: string,
    params: ConnectionResolveLinkParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionResolveLinkResponse> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...query } = params;
    return this._client.get(path`/connectors/v1/connections/${id}/resolve`, {
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
   * Search the provider's files by name, and by content where the provider supports
   * it; with kind=folder, search folders by name. Without a scope, searches
   * everything the connection can see; pass the browse_ref fields of a folder or
   * container to search inside it. Folder results carry a browse_ref to open them
   * with browse. Each response states whether its folder scope covers the whole
   * subtree. Returns 422 search_not_supported when the provider has no search and
   * search_kind_not_supported when it cannot search folders, and shares the provider
   * request budget with browsing and background runs.
   */
  search(
    id: string,
    params: ConnectionSearchParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionSearchResponse> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...query } = params;
    return this._client.get(path`/connectors/v1/connections/${id}/search`, {
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

export interface ConnectionRetrieveResponse {
  /**
   * Authenticated organization owning this connection; server-side approval binding
   * uses this identifier.
   */
  organization_id?: string;

  [k: string]: unknown;
}

export interface ConnectionListResponse {
  capabilities?: ConnectionListResponse.Capabilities;

  connections?: Array<ConnectionListResponse.Connection>;

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

  export interface Connection {
    /**
     * Authenticated organization owning this connection; server-side approval binding
     * uses this identifier.
     */
    organization_id?: string;

    [k: string]: unknown;
  }

  export interface Pagination {
    has_more?: boolean;

    limit?: number;

    next_cursor?: string | null;
  }

  export interface Provider {
    id?: string;

    /**
     * Adapter-declared consent choices, filtered by deployment and organization
     * policy.
     */
    authorization_options?: Array<Provider.AuthorizationOption>;

    /**
     * Exact enabled tiers accepted by the adapter browse policy.
     */
    browse_scope_tiers?: Array<string>;

    resource_types?: Array<string>;

    scope_tier?: string;

    /**
     * Present when GET /connections/{id}/search works for this provider.
     */
    search?: Provider.Search | null;

    /**
     * True when POST /connections/{id}/folders can create folders for this provider.
     */
    supports_create_folder?: boolean;

    supports_export?: boolean;
  }

  export namespace Provider {
    export interface AuthorizationOption {
      label?: string;

      scope_tier?: string;

      /**
       * Explicit write-authorization upgrade for this account choice. Null means
       * unavailable by policy; omitted when no upgrade is required.
       */
      write_scope_tier?: string | null;
    }

    /**
     * Present when GET /connections/{id}/search works for this provider.
     */
    export interface Search {
      folder_scope_recursive?: boolean;

      full_text?: boolean;

      /**
       * Values the search kind parameter accepts.
       */
      kinds?: Array<'file' | 'folder'>;

      max_page_size?: number;

      scopes?: Array<'account' | 'folder'>;
    }
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

    /**
     * Signed reference to this file for POST /connectors/v1/fetch. Null for folders
     * and providers without single-file fetch. Pass it back exactly as received.
     */
    open_ref?: string | null;

    parent_ids?: Array<string>;

    path?: string | null;

    size_bytes?: number | null;
  }
}

export interface ConnectionCreateMicrosoftAdminApprovalResponse {
  approval_url: string;

  expires_at: string;
}

export interface ConnectionListContentsResponse {
  cursor?: string | null;

  items?: Array<ConnectionListContentsResponse.Item>;

  /**
   * The listed folder, as a browse_ref
   */
  scope_ref?: unknown;

  /**
   * True when the listing stopped before every file was listed, at the 10,000-file
   * limit or because the folder tree was too wide to page through
   */
  truncated?: boolean;
}

export namespace ConnectionListContentsResponse {
  export interface Item {
    id?: string;

    container_id?: string | null;

    kind?: 'file';

    mime_type?: string | null;

    modified_at?: string | null;

    name?: string;

    /**
     * Signed reference to this file for POST /connectors/v1/fetch. Null for providers
     * without single-file fetch. Pass it back exactly as received.
     */
    open_ref?: string | null;

    parent_ids?: Array<string>;

    /**
     * Path relative to the listed folder, ending in the file's name
     */
    path?: string;

    size_bytes?: number | null;

    /**
     * Set when an import would skip the file (for example a Box note)
     */
    unsupported_reason?: string | null;
  }
}

export interface ConnectionResolveLinkResponse {
  id?: string;

  /**
   * Pass these fields to browse to open the folder
   */
  browse_ref?: unknown;

  container_id?: string | null;

  description?: string | null;

  import_ref?: unknown | null;

  kind?: 'folder';

  mime_type?: string | null;

  modified_at?: string | null;

  name?: string;

  /**
   * Always null for folders
   */
  open_ref?: string | null;

  parent_ids?: Array<string>;

  /**
   * Display path in the account, when the provider reports it
   */
  path?: string | null;

  size_bytes?: number | null;
}

export interface ConnectionSearchResponse {
  cursor?: string | null;

  /**
   * False when a folder scope covers its direct children only
   */
  folder_scope_recursive?: boolean;

  /**
   * Whether the provider matches file contents, not only names. Always false for
   * kind=folder.
   */
  full_text?: boolean;

  items?: Array<ConnectionSearchResponse.Item>;

  scope?: 'account' | 'folder';

  scope_ref?: unknown | null;
}

export namespace ConnectionSearchResponse {
  export interface Item {
    id?: string;

    /**
     * Reference for GET /connectors/v1/connections/{id}/browse that opens this folder.
     * Null for files.
     */
    browse_ref?: unknown | null;

    container_id?: string | null;

    kind?: 'file' | 'folder';

    mime_type?: string | null;

    modified_at?: string | null;

    name?: string;

    /**
     * Signed reference to this file for POST /connectors/v1/fetch. Null for providers
     * without single-file fetch. Pass it back exactly as received.
     */
    open_ref?: string | null;

    parent_ids?: Array<string>;

    path?: string | null;

    size_bytes?: number | null;

    /**
     * Set when the file cannot be imported (for example a Box note)
     */
    unsupported_reason?: string | null;
  }
}

export interface ConnectionCreateParams {
  /**
   * Body param
   */
  provider: 'box' | 'clio' | 'dropbox' | 'gdrive' | 'microsoft' | 'sharefile' | 'smokeball';

  /**
   * Body param: HTTPS URL the user is sent back to after consent.
   */
  return_url: string;

  /**
   * Body param: Provider-specific OAuth permission tier. Omit to use the provider's
   * default. Use microsoft.account.read to let Microsoft choose a personal or
   * work/school account. Existing explicit microsoft.read and
   * microsoft.personal.read tiers remain supported. Microsoft write tiers require
   * the separate write switch and explicit authorization for bounded exports and
   * paired sync.
   */
  scope_tier?:
    | 'box.readwrite'
    | 'box.readwrite.webhooks'
    | 'clio.us'
    | 'dropbox.readwrite'
    | 'drive'
    | 'microsoft.account.read'
    | 'microsoft.read'
    | 'microsoft.personal.read'
    | 'microsoft.write'
    | 'microsoft.personal.write'
    | 'sharefile'
    | 'smokeball.us'
    | 'smokeball.us.staging'
    | 'smokeball.us.staging.write'
    | 'smokeball.us.write';

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

export interface ConnectionCreateFolderParams {
  /**
   * Body param: Folder name. Trimmed; 1-255 characters; no '/', '\', or control
   * characters; not '.' or '..'. Providers may refuse further characters.
   */
  name: string;

  /**
   * Body param: Container id of the parent, from its browse_ref
   */
  container?: string;

  /**
   * Body param: Folder id of the parent, from its browse_ref. Omit for a container
   * root.
   */
  parent?: string;

  /**
   * Body param: Site id of the parent, from its browse_ref
   */
  site?: string;

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface ConnectionCreateMicrosoftAdminApprovalParams {
  /**
   * Trusted application-user assertion derived from the authenticated application
   * session.
   */
  'x-case-connector-subject'?: string;
}

export interface ConnectionListContentsParams {
  /**
   * Query param: Container to list, or the container holding parent
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
   * Query param: Folder to list
   */
  parent?: string;

  /**
   * Query param: Site of the folder
   */
  site?: string;

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface ConnectionResolveLinkParams {
  /**
   * Query param: Folder link copied from the provider, including any query string
   */
  url: string;

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface ConnectionSearchParams {
  /**
   * Query param: Search text
   */
  query: string;

  /**
   * Query param: Container to search in, or the container holding parent
   */
  container?: string;

  /**
   * Query param
   */
  cursor?: string;

  /**
   * Query param: What to search for: files, or folders by name
   */
  kind?: 'file' | 'folder';

  /**
   * Query param
   */
  page_size?: number;

  /**
   * Query param: Folder to search in
   */
  parent?: string;

  /**
   * Query param: Site to search in
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
    type ConnectionRetrieveResponse as ConnectionRetrieveResponse,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionBrowseResponse as ConnectionBrowseResponse,
    type ConnectionCreateMicrosoftAdminApprovalResponse as ConnectionCreateMicrosoftAdminApprovalResponse,
    type ConnectionListContentsResponse as ConnectionListContentsResponse,
    type ConnectionResolveLinkResponse as ConnectionResolveLinkResponse,
    type ConnectionSearchResponse as ConnectionSearchResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionRetrieveParams as ConnectionRetrieveParams,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionDeleteParams as ConnectionDeleteParams,
    type ConnectionBrowseParams as ConnectionBrowseParams,
    type ConnectionCreateFolderParams as ConnectionCreateFolderParams,
    type ConnectionCreateMicrosoftAdminApprovalParams as ConnectionCreateMicrosoftAdminApprovalParams,
    type ConnectionListContentsParams as ConnectionListContentsParams,
    type ConnectionResolveLinkParams as ConnectionResolveLinkParams,
    type ConnectionSearchParams as ConnectionSearchParams,
    type ConnectionUpdateAllParams as ConnectionUpdateAllParams,
  };
}
