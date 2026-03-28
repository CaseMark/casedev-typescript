// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentTypesAPI from './agent-types';
import { AgentTypeCreateParams, AgentTypeListParams, AgentTypes } from './agent-types';
import * as LogAPI from './log';
import { Log, LogCreateParams, LogExportParams, LogExportResponse, LogListParams } from './log';
import * as MatterPartiesAPI from './matter-parties';
import { MatterParties, MatterPartyCreateParams } from './matter-parties';
import * as PartiesAPI from './parties';
import { Parties, PartyCreateParams, PartyListParams } from './parties';
import * as SharesAPI from './shares';
import { ShareCreateParams, ShareDeleteParams, Shares } from './shares';
import * as TypesAPI from './types';
import { TypeCreateParams, TypeListParams, TypeUpdateParams, Types } from './types';
import * as WorkItemsAPI from './work-items';
import {
  WorkItemCreateParams,
  WorkItemDecideParams,
  WorkItemListExecutionsParams,
  WorkItemListParams,
  WorkItemRetrieveParams,
  WorkItemUpdateParams,
  WorkItems,
} from './work-items';
import * as EventsAPI from './events/events';
import { Events } from './events/events';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class V1 extends APIResource {
  agentTypes: AgentTypesAPI.AgentTypes = new AgentTypesAPI.AgentTypes(this._client);
  parties: PartiesAPI.Parties = new PartiesAPI.Parties(this._client);
  types: TypesAPI.Types = new TypesAPI.Types(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  log: LogAPI.Log = new LogAPI.Log(this._client);
  matterParties: MatterPartiesAPI.MatterParties = new MatterPartiesAPI.MatterParties(this._client);
  shares: SharesAPI.Shares = new SharesAPI.Shares(this._client);
  workItems: WorkItemsAPI.WorkItems = new WorkItemsAPI.WorkItems(this._client);

  /**
   * Create a new legal matter and provision its primary vault.
   */
  create(body: V1CreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/matters/v1', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a single matter by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/matters/v1/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update mutable matter fields.
   */
  update(id: string, body: V1UpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/matters/v1/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List matters for the authenticated organization.
   */
  list(query: V1ListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/matters/v1', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1CreateParams {
  title: string;

  billing?: { [key: string]: unknown };

  client_name?: string;

  client_party_id?: string | null;

  custom_fields?: { [key: string]: unknown };

  description?: string;

  display_id?: string;

  important_dates?: { [key: string]: unknown };

  jurisdiction?: { [key: string]: unknown };

  matter_type?: string;

  metadata?: { [key: string]: unknown };

  practice_area?: string;

  responsible_attorney_id?: string;

  status?: 'intake' | 'open' | 'pending' | 'closed' | 'archived';

  subtype?: string;

  vault?: V1CreateParams.Vault;
}

export namespace V1CreateParams {
  export interface Vault {
    description?: string;

    enableGraph?: boolean;

    enableIndexing?: boolean;

    metadata?: { [key: string]: unknown };
  }
}

export interface V1UpdateParams {
  archived_at?: string | null;

  billing?: { [key: string]: unknown };

  client_name?: string;

  client_party_id?: string | null;

  custom_fields?: { [key: string]: unknown };

  description?: string;

  display_id?: string;

  important_dates?: { [key: string]: unknown };

  jurisdiction?: { [key: string]: unknown };

  matter_type?: string;

  metadata?: { [key: string]: unknown };

  practice_area?: string;

  responsible_attorney_id?: string;

  status?: 'intake' | 'open' | 'pending' | 'closed' | 'archived';

  subtype?: string;

  title?: string;
}

export interface V1ListParams {
  matter_type?: string;

  practice_area?: string;

  query?: string;

  status?: string;
}

V1.AgentTypes = AgentTypes;
V1.Parties = Parties;
V1.Types = Types;
V1.Events = Events;
V1.Log = Log;
V1.MatterParties = MatterParties;
V1.Shares = Shares;
V1.WorkItems = WorkItems;

export declare namespace V1 {
  export {
    type V1CreateParams as V1CreateParams,
    type V1UpdateParams as V1UpdateParams,
    type V1ListParams as V1ListParams,
  };

  export {
    AgentTypes as AgentTypes,
    type AgentTypeCreateParams as AgentTypeCreateParams,
    type AgentTypeListParams as AgentTypeListParams,
  };

  export {
    Parties as Parties,
    type PartyCreateParams as PartyCreateParams,
    type PartyListParams as PartyListParams,
  };

  export {
    Types as Types,
    type TypeCreateParams as TypeCreateParams,
    type TypeUpdateParams as TypeUpdateParams,
    type TypeListParams as TypeListParams,
  };

  export { Events as Events };

  export {
    Log as Log,
    type LogExportResponse as LogExportResponse,
    type LogCreateParams as LogCreateParams,
    type LogListParams as LogListParams,
    type LogExportParams as LogExportParams,
  };

  export { MatterParties as MatterParties, type MatterPartyCreateParams as MatterPartyCreateParams };

  export {
    Shares as Shares,
    type ShareCreateParams as ShareCreateParams,
    type ShareDeleteParams as ShareDeleteParams,
  };

  export {
    WorkItems as WorkItems,
    type WorkItemCreateParams as WorkItemCreateParams,
    type WorkItemRetrieveParams as WorkItemRetrieveParams,
    type WorkItemUpdateParams as WorkItemUpdateParams,
    type WorkItemListParams as WorkItemListParams,
    type WorkItemDecideParams as WorkItemDecideParams,
    type WorkItemListExecutionsParams as WorkItemListExecutionsParams,
  };
}
