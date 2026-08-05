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
  Connections,
} from './connections';
import * as LinksAPI from './links';
import { LinkDeleteParams, LinkListObjectsParams, LinkListParams, LinkUpdateParams, Links } from './links';
import * as InstallationsAPI from './installations/installations';
import {
  InstallationEnsureParams,
  InstallationListParams,
  Installations,
} from './installations/installations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Import and export between provider folders (Google Drive) and vaults
 */
export class V1 extends APIResource {
  installations: InstallationsAPI.Installations = new InstallationsAPI.Installations(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  links: LinksAPI.Links = new LinksAPI.Links(this._client);

  /**
   * Standing promise: backfill now, then stay current (the sync sweeper re-runs
   * synced links on a schedule). Same body as /transfer minus run_mode. Upserts the
   * link identified by (connection_id, direction, remote, vault_id); an existing
   * once-link is upgraded in place with its ledger and cursor preserved. Downgrade
   * or pause via PATCH /links/{id}.
   */
  syncLink(body: V1SyncLinkParams, options?: RequestOptions): APIPromise<V1SyncLinkResponse> {
    return this._client.post('/connectors/v1/sync-link', { body, ...options });
  }

  /**
   * One-shot import (provider folder → vault) or export (vault → provider folder).
   * Upserts the link identified by (connection_id, direction, remote, vault_id):
   * first call backfills, later calls move only new/changed files via the ledger.
   * Poll GET /links/{id} → active_run for progress.
   */
  transfer(body: V1TransferParams, options?: RequestOptions): APIPromise<V1TransferResponse> {
    return this._client.post('/connectors/v1/transfer', { body, ...options });
  }
}

export interface V1SyncLinkResponse {
  links?: Array<unknown>;
}

export interface V1TransferResponse {
  links?: Array<unknown>;
}

export interface V1SyncLinkParams {
  connection_id: string;

  direction: 'import' | 'export';

  remote: V1SyncLinkParams.Remote;

  vault_id: string;

  matter_id?: string | null;

  policy?: V1SyncLinkParams.Policy;
}

export namespace V1SyncLinkParams {
  export interface Remote {
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
      exclude_mime?: Array<string>;

      max_size_bytes?: number;
    }
  }
}

export interface V1TransferParams {
  connection_id: string;

  direction: 'import' | 'export';

  remote: V1TransferParams.Remote;

  vault_id: string;

  matter_id?: string | null;

  policy?: V1TransferParams.Policy;

  run_mode?: 'auto' | 'full_reconcile';
}

export namespace V1TransferParams {
  export interface Remote {
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
      exclude_mime?: Array<string>;

      max_size_bytes?: number;
    }
  }
}

V1.Installations = Installations;
V1.Connections = Connections;
V1.Links = Links;

export declare namespace V1 {
  export {
    type V1SyncLinkResponse as V1SyncLinkResponse,
    type V1TransferResponse as V1TransferResponse,
    type V1SyncLinkParams as V1SyncLinkParams,
    type V1TransferParams as V1TransferParams,
  };

  export {
    Installations as Installations,
    type InstallationListParams as InstallationListParams,
    type InstallationEnsureParams as InstallationEnsureParams,
  };

  export {
    Connections as Connections,
    type ConnectionCreateResponse as ConnectionCreateResponse,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionBrowseResponse as ConnectionBrowseResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionDeleteParams as ConnectionDeleteParams,
    type ConnectionBrowseParams as ConnectionBrowseParams,
  };

  export {
    Links as Links,
    type LinkUpdateParams as LinkUpdateParams,
    type LinkListParams as LinkListParams,
    type LinkDeleteParams as LinkDeleteParams,
    type LinkListObjectsParams as LinkListObjectsParams,
  };
}
