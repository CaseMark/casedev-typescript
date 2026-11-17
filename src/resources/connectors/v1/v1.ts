// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConnectionsAPI from './connections';
import {
  ConnectionBrowseParams,
  ConnectionBrowseResponse,
  ConnectionCreateFolderParams,
  ConnectionCreateMicrosoftAdminApprovalParams,
  ConnectionCreateMicrosoftAdminApprovalResponse,
  ConnectionCreateParams,
  ConnectionCreateResponse,
  ConnectionDeleteParams,
  ConnectionListContentsParams,
  ConnectionListContentsResponse,
  ConnectionListParams,
  ConnectionListResponse,
  ConnectionResolveLinkParams,
  ConnectionResolveLinkResponse,
  ConnectionRetrieveParams,
  ConnectionRetrieveResponse,
  ConnectionSearchParams,
  ConnectionSearchResponse,
  ConnectionUpdateAllParams,
  Connections,
} from './connections';
import * as LinksAPI from './links';
import {
  LinkDeleteParams,
  LinkListObjectsParams,
  LinkListParams,
  LinkRetrieveParams,
  LinkRetrieveSelectionRootParams,
  LinkUpdateParams,
  Links,
} from './links';
import * as ApplicationsAPI from './applications/applications';
import { Applications } from './applications/applications';
import * as InstallationsAPI from './installations/installations';
import {
  InstallationEnsureParams,
  InstallationListParams,
  InstallationListResponse,
  Installations,
} from './installations/installations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Import and export between provider folders and vaults
 */
export class V1 extends APIResource {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  installations: InstallationsAPI.Installations = new InstallationsAPI.Installations(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  links: LinksAPI.Links = new LinksAPI.Links(this._client);

  /**
   * Copy one provider file, named by an open_ref from browse, into a Vault
   * (vault_id) or to a presigned S3 PUT URL (upload_url). Runs synchronously; files
   * over 100 MB return 413 and belong in a transfer. A repeat for an unchanged
   * provider version returns the first copy with 200. Vault copies are stored as
   * uploaded: call POST /vault/{id}/ingest/{objectId} to index them. Fetched copies
   * are never exported by a link.
   */
  fetch(params: V1FetchParams, options?: RequestOptions): APIPromise<void> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...body } = params;
    return this._client.post('/connectors/v1/fetch', {
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
   * Standing promise: backfill now, then stay current (the sync sweeper re-runs
   * synced links on a schedule). Direction both creates paired import/export links
   * and defaults export to a CaseMark Output subfolder. Same body as /transfer minus
   * run_mode. Upserts links by (connection_id, direction, remote, vault_id,
   * selection); existing once-links are upgraded in place with their ledger and
   * cursor preserved. Downgrade or pause via PATCH /links/{id}.
   */
  syncLink(params: V1SyncLinkParams, options?: RequestOptions): APIPromise<V1SyncLinkResponse> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...body } = params;
    return this._client.post('/connectors/v1/sync-link', {
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
   * One-shot import (provider folder → vault), export (vault → provider folder), or
   * both. Direction both creates paired import/export links and defaults export to a
   * CaseMark Output subfolder. Upserts links by (connection_id, direction, remote,
   * vault_id, selection): first call backfills, later calls move only new/changed
   * files via the ledger. Poll GET /links/{id} → active_run for progress.
   */
  transfer(params: V1TransferParams, options?: RequestOptions): APIPromise<V1TransferResponse> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...body } = params;
    return this._client.post('/connectors/v1/transfer', {
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
}

export interface SyncLinkLinkRun {
  link_id: string;

  started: boolean;

  backlog?: number;

  reason?: 'stale_run_recovery' | 'already_running' | 'ingestion_backlog';
}

/**
 * Whether a provider scan started or was deferred.
 */
export interface SyncLinkRun {
  started: boolean;

  backlog?: number;

  reason?: 'stale_run_recovery' | 'already_running' | 'ingestion_backlog';
}

export interface TransferLinkRun {
  link_id: string;

  started: boolean;

  backlog?: number;

  reason?: 'stale_run_recovery' | 'already_running' | 'ingestion_backlog';
}

/**
 * Whether a provider scan started or was deferred.
 */
export interface TransferRun {
  started: boolean;

  backlog?: number;

  reason?: 'stale_run_recovery' | 'already_running' | 'ingestion_backlog';
}

export interface V1SyncLinkResponse {
  /**
   * Links created or re-triggered. Each echoes selection ({object_ids?, folder?},
   * null for the whole vault).
   */
  links?: Array<unknown>;

  /**
   * Whether a provider scan started or was deferred.
   */
  run?: SyncLinkRun;

  /**
   * Start result for each link when direction is both.
   */
  runs?: Array<SyncLinkLinkRun>;
}

export interface V1TransferResponse {
  /**
   * Links created or re-triggered. Each echoes selection ({object_ids?, folder?},
   * null for the whole vault).
   */
  links?: Array<unknown>;

  /**
   * Whether a provider scan started or was deferred.
   */
  run?: TransferRun;

  /**
   * Start result for each link when direction is both.
   */
  runs?: Array<TransferLinkRun>;
}

export interface V1FetchParams {
  /**
   * Body param: From a browse item, exactly as received
   */
  open_ref: string;

  /**
   * Body param: Presigned HTTPS S3 PUT URL. Content-Type must not be a signed
   * header. Exactly one destination.
   */
  upload_url?: string;

  /**
   * Body param: Destination Vault. Exactly one destination.
   */
  vault_id?: string;

  /**
   * Header param: Trusted server-to-server application-user assertion. Must match
   * the subject the open_ref was minted for.
   */
  'x-case-connector-subject'?: string;
}

export interface V1SyncLinkParams {
  /**
   * Body param
   */
  connection_id: string;

  /**
   * Body param
   */
  direction: 'import' | 'export' | 'both';

  /**
   * Body param
   */
  remote: V1SyncLinkParams.Remote;

  /**
   * Body param
   */
  vault_id: string;

  /**
   * Body param: Optional destination for direction both. Defaults to CaseMark Output
   * under remote.
   */
  export_destination?: V1SyncLinkParams.ExportDestination;

  /**
   * Body param
   */
  matter_id?: string | null;

  /**
   * Body param
   */
  policy?: V1SyncLinkParams.Policy;

  /**
   * Body param: Export only part of the vault (direction export only; 400
   * selection_requires_export otherwise). Provide object_ids, folder, or both (their
   * intersection). The selection is part of link identity: each distinct selection
   * to the same destination is its own link, and repeating a selection re-runs that
   * link. Exported objects still exclude files still processing and
   * connector-imported or fetched copies. Destination paths: with folder, paths are
   * relative to that folder, so its contents land directly in remote; with
   * object_ids only, each object keeps its full vault path. Omit to export the whole
   * vault.
   */
  selection?: V1SyncLinkParams.Selection;

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export namespace V1SyncLinkParams {
  export interface Remote {
    folder_id: string;

    container_id?: string;

    path?: string;

    resource_type?: string;

    site_id?: string;
  }

  /**
   * Optional destination for direction both. Defaults to CaseMark Output under
   * remote.
   */
  export interface ExportDestination {
    folder_id: string;

    container_id?: string;

    path?: string;

    site_id?: string;
  }

  export interface Policy {
    /**
     * Export handling of a destination file with the same name that this export does
     * not own. version keeps both: the export is written as name (CaseMark).ext, then
     * name (CaseMark 2).ext, name (CaseMark 3).ext, using the first number the folder
     * does not use (up to 100). overwrite replaces the existing file; skip leaves it.
     * Any other value returns 400.
     */
    collisions?: 'version' | 'overwrite' | 'skip';

    deletes?: 'mirror' | 'preserve';

    filters?: Policy.Filters;
  }

  export namespace Policy {
    export interface Filters {
      /**
       * File extensions (e.g. ".exe") to import even though the engine skips Windows
       * executables, libraries, installers and disc metadata by default.
       */
      allow_extensions?: Array<string>;

      /**
       * Skip these stable document ids before download, including future versions.
       */
      exclude_file_ids?: Array<string>;

      /**
       * Skip these folders and all descendants during document imports.
       */
      exclude_folder_ids?: Array<string>;

      exclude_mime?: Array<string>;

      max_size_bytes?: number;
    }
  }

  /**
   * Export only part of the vault (direction export only; 400
   * selection_requires_export otherwise). Provide object_ids, folder, or both (their
   * intersection). The selection is part of link identity: each distinct selection
   * to the same destination is its own link, and repeating a selection re-runs that
   * link. Exported objects still exclude files still processing and
   * connector-imported or fetched copies. Destination paths: with folder, paths are
   * relative to that folder, so its contents land directly in remote; with
   * object_ids only, each object keeps its full vault path. Omit to export the whole
   * vault.
   */
  export interface Selection {
    /**
     * Vault folder path such as /Reports/Final; includes every subfolder. The vault
     * root is not a selection.
     */
    folder?: string;

    /**
     * Vault object ids from vault_id. Unknown ids return 400
     * selection_objects_not_found with data.error.count.
     */
    object_ids?: Array<string>;
  }
}

export interface V1TransferParams {
  /**
   * Body param
   */
  connection_id: string;

  /**
   * Body param
   */
  direction: 'import' | 'export' | 'both';

  /**
   * Body param
   */
  remote: V1TransferParams.Remote;

  /**
   * Body param
   */
  vault_id: string;

  /**
   * Body param: Optional destination for direction both. Defaults to CaseMark Output
   * under remote.
   */
  export_destination?: V1TransferParams.ExportDestination;

  /**
   * Body param
   */
  matter_id?: string | null;

  /**
   * Body param
   */
  policy?: V1TransferParams.Policy;

  /**
   * Body param
   */
  run_mode?: 'auto' | 'full_reconcile';

  /**
   * Body param: Export only part of the vault (direction export only; 400
   * selection_requires_export otherwise). Provide object_ids, folder, or both (their
   * intersection). The selection is part of link identity: each distinct selection
   * to the same destination is its own link, and repeating a selection re-runs that
   * link. Exported objects still exclude files still processing and
   * connector-imported or fetched copies. Destination paths: with folder, paths are
   * relative to that folder, so its contents land directly in remote; with
   * object_ids only, each object keeps its full vault path. Omit to export the whole
   * vault.
   */
  selection?: V1TransferParams.Selection;

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export namespace V1TransferParams {
  export interface Remote {
    folder_id: string;

    container_id?: string;

    path?: string;

    resource_type?: string;

    site_id?: string;
  }

  /**
   * Optional destination for direction both. Defaults to CaseMark Output under
   * remote.
   */
  export interface ExportDestination {
    folder_id: string;

    container_id?: string;

    path?: string;

    site_id?: string;
  }

  export interface Policy {
    /**
     * Export handling of a destination file with the same name that this export does
     * not own. version keeps both: the export is written as name (CaseMark).ext, then
     * name (CaseMark 2).ext, name (CaseMark 3).ext, using the first number the folder
     * does not use (up to 100). overwrite replaces the existing file; skip leaves it.
     * Any other value returns 400.
     */
    collisions?: 'version' | 'overwrite' | 'skip';

    deletes?: 'mirror' | 'preserve';

    filters?: Policy.Filters;
  }

  export namespace Policy {
    export interface Filters {
      /**
       * File extensions (e.g. ".exe") to import even though the engine skips Windows
       * executables, libraries, installers and disc metadata by default.
       */
      allow_extensions?: Array<string>;

      /**
       * Skip these stable document ids before download, including future versions.
       */
      exclude_file_ids?: Array<string>;

      /**
       * Skip these folders and all descendants during document imports.
       */
      exclude_folder_ids?: Array<string>;

      exclude_mime?: Array<string>;

      max_size_bytes?: number;
    }
  }

  /**
   * Export only part of the vault (direction export only; 400
   * selection_requires_export otherwise). Provide object_ids, folder, or both (their
   * intersection). The selection is part of link identity: each distinct selection
   * to the same destination is its own link, and repeating a selection re-runs that
   * link. Exported objects still exclude files still processing and
   * connector-imported or fetched copies. Destination paths: with folder, paths are
   * relative to that folder, so its contents land directly in remote; with
   * object_ids only, each object keeps its full vault path. Omit to export the whole
   * vault.
   */
  export interface Selection {
    /**
     * Vault folder path such as /Reports/Final; includes every subfolder. The vault
     * root is not a selection.
     */
    folder?: string;

    /**
     * Vault object ids from vault_id. Unknown ids return 400
     * selection_objects_not_found with data.error.count.
     */
    object_ids?: Array<string>;
  }
}

V1.Applications = Applications;
V1.Installations = Installations;
V1.Connections = Connections;
V1.Links = Links;

export declare namespace V1 {
  export {
    type SyncLinkLinkRun as SyncLinkLinkRun,
    type SyncLinkRun as SyncLinkRun,
    type TransferLinkRun as TransferLinkRun,
    type TransferRun as TransferRun,
    type V1SyncLinkResponse as V1SyncLinkResponse,
    type V1TransferResponse as V1TransferResponse,
    type V1FetchParams as V1FetchParams,
    type V1SyncLinkParams as V1SyncLinkParams,
    type V1TransferParams as V1TransferParams,
  };

  export { Applications as Applications };

  export {
    Installations as Installations,
    type InstallationListResponse as InstallationListResponse,
    type InstallationListParams as InstallationListParams,
    type InstallationEnsureParams as InstallationEnsureParams,
  };

  export {
    Connections as Connections,
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

  export {
    Links as Links,
    type LinkRetrieveParams as LinkRetrieveParams,
    type LinkUpdateParams as LinkUpdateParams,
    type LinkListParams as LinkListParams,
    type LinkDeleteParams as LinkDeleteParams,
    type LinkListObjectsParams as LinkListObjectsParams,
    type LinkRetrieveSelectionRootParams as LinkRetrieveSelectionRootParams,
  };
}
