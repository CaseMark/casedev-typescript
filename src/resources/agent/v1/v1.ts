// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from './agents';
import {
  AgentCreateParams,
  AgentCreateResponse,
  AgentDeleteResponse,
  AgentListResponse,
  AgentRetrieveResponse,
  AgentUpdateParams,
  AgentUpdateResponse,
  Agents,
} from './agents';
import * as RunAPI from './run';
import {
  Run,
  RunCancelResponse,
  RunCreateParams,
  RunCreateResponse,
  RunExecResponse,
  RunGetDetailsResponse,
  RunGetStatusResponse,
  RunWatchParams,
  RunWatchResponse,
} from './run';

export class V1 extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  run: RunAPI.Run = new RunAPI.Run(this._client);
}

V1.Agents = Agents;
V1.Run = Run;

export declare namespace V1 {
  export {
    Agents as Agents,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
  };

  export {
    Run as Run,
    type RunCreateResponse as RunCreateResponse,
    type RunCancelResponse as RunCancelResponse,
    type RunExecResponse as RunExecResponse,
    type RunGetDetailsResponse as RunGetDetailsResponse,
    type RunGetStatusResponse as RunGetStatusResponse,
    type RunWatchResponse as RunWatchResponse,
    type RunCreateParams as RunCreateParams,
    type RunWatchParams as RunWatchParams,
  };
}
