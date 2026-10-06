// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConnectionsAPI from './connections';
import {
  ConnectionBrowseParams,
  ConnectionBrowseResponse,
  ConnectionCreateParams,
  ConnectionCreateResponse,
  ConnectionDeleteParams,
  ConnectionListParams,
  ConnectionListResponse,
  ConnectionRetrieveParams,
  ConnectionUpdateAllParams,
  Connections,
} from './connections';
import * as LinksAPI from './links';
import {
  LinkDeleteParams,
  LinkListObjectsParams,
  LinkListParams,
  LinkRetrieveParams,
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
   * Standing promise: backfill now, then stay current (the sync sweeper re-runs
   * synced links on a schedule). Direction both creates paired import/export links
   * and defaults export to a CaseMark Output subfolder. Same body as /transfer minus
   * run_mode. Upserts links by (connection_id, direction, remote, vault_id);
   * existing once-links are upgraded in place with their ledger and cursor
   * preserved. Downgrade or pause via PATCH /links/{id}.
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
   * vault_id): first call backfills, later calls move only new/changed files via the
   * ledger. Poll GET /links/{id} → active_run for progress.
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
    collisions?: 'version' | 'overwrite' | 'skip';

    deletes?: 'mirror' | 'preserve';

    filters?: Policy.Filters;
  }

  export namespace Policy {
    export interface Filters {
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
    collisions?: 'version' | 'overwrite' | 'skip';

    deletes?: 'mirror' | 'preserve';

    filters?: Policy.Filters;
  }

  export namespace Policy {
    export interface Filters {
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
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionBrowseResponse as ConnectionBrowseResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionRetrieveParams as ConnectionRetrieveParams,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionDeleteParams as ConnectionDeleteParams,
    type ConnectionBrowseParams as ConnectionBrowseParams,
    type ConnectionUpdateAllParams as ConnectionUpdateAllParams,
  };

  export {
    Links as Links,
    type LinkRetrieveParams as LinkRetrieveParams,
    type LinkUpdateParams as LinkUpdateParams,
    type LinkListParams as LinkListParams,
    type LinkDeleteParams as LinkDeleteParams,
    type LinkListObjectsParams as LinkListObjectsParams,
  };
}
