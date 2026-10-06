// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Import and export between provider folders and vaults
 */
export class Links extends APIResource {
  /**
   * Retrieve one link: state, counts, and embedded active_run/last_run. Poll this
   * after POST /transfer.
   */
  retrieve(
    id: string,
    params: LinkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'x-case-connector-subject': xCaseConnectorSubject } = params ?? {};
    return this._client.get(path`/connectors/v1/links/${id}`, {
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
   * Pause/resume a link (state "paused" | "ready"), change its mode (synced -> once
   * is the sync downgrade), or edit its policy in place.
   */
  update(id: string, params: LinkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...body } = params;
    return this._client.patch(path`/connectors/v1/links/${id}`, {
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
   * List transfer links, filterable by vault, connection, direction, mode, and
   * state.
   */
  list(params: LinkListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...query } = params ?? {};
    return this._client.get('/connectors/v1/links', {
      query,
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
   * Delete a link and its ledger. vault_docs=delete additionally removes the vault
   * documents an import link brought in (default: keep).
   */
  delete(
    id: string,
    params: LinkDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { vault_docs, 'x-case-connector-subject': xCaseConnectorSubject } = params ?? {};
    return this._client.delete(path`/connectors/v1/links/${id}`, {
      query: { vault_docs },
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
   * Per-file transfer ledger for a link: provider item, vault object, path, content
   * version, state, and error.
   */
  listObjects(
    id: string,
    params: LinkListObjectsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'x-case-connector-subject': xCaseConnectorSubject, ...query } = params ?? {};
    return this._client.get(path`/connectors/v1/links/${id}/objects`, {
      query,
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
}

export interface LinkRetrieveParams {
  /**
   * Trusted server-to-server application-user assertion. Derive it from the
   * authenticated application session, never browser input. Omit only for the legacy
   * organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface LinkUpdateParams {
  /**
   * Body param
   */
  mode?: 'once' | 'synced';

  /**
   * Body param: Replaces the entire stored policy; omitted fields return to
   * defaults. Repeat deletes, collisions and filters that should be retained.
   * Folder/file exclusions require deletes: preserve (the default).
   */
  policy?: unknown;

  /**
   * Body param
   */
  state?: 'paused' | 'ready';

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface LinkListParams {
  /**
   * Query param
   */
  connection_id?: string;

  /**
   * Query param: Opaque cursor from the previous page.
   */
  cursor?: string;

  /**
   * Query param
   */
  direction?: 'import' | 'export';

  /**
   * Query param
   */
  mode?: 'once' | 'synced';

  /**
   * Query param
   */
  pair_id?: string;

  /**
   * Query param
   */
  state?: 'ready' | 'running' | 'active' | 'paused' | 'orphaned' | 'error';

  /**
   * Query param
   */
  vault_id?: string;

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface LinkDeleteParams {
  /**
   * Query param
   */
  vault_docs?: 'keep' | 'delete';

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export interface LinkListObjectsParams {
  /**
   * Query param
   */
  cursor?: string;

  /**
   * Query param
   */
  state?: 'pending' | 'transferring' | 'ingesting' | 'synced' | 'skipped' | 'failed' | 'tombstoned';

  /**
   * Header param: Trusted server-to-server application-user assertion. Derive it
   * from the authenticated application session, never browser input. Omit only for
   * the legacy organization-scoped namespace.
   */
  'x-case-connector-subject'?: string;
}

export declare namespace Links {
  export {
    type LinkRetrieveParams as LinkRetrieveParams,
    type LinkUpdateParams as LinkUpdateParams,
    type LinkListParams as LinkListParams,
    type LinkDeleteParams as LinkDeleteParams,
    type LinkListObjectsParams as LinkListObjectsParams,
  };
}
