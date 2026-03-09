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
import * as ChatAPI from './chat';
import {
  Chat,
  ChatCancelResponse,
  ChatCreateParams,
  ChatCreateResponse,
  ChatDeleteResponse,
  ChatReplyToQuestionParams,
  ChatRespondParams,
  ChatRespondResponse,
  ChatSendMessageParams,
  ChatStreamParams,
  ChatStreamResponse,
  ChatUiStreamParams,
  ChatUiStreamResponse,
} from './chat';
import * as ExecuteAPI from './execute';
import { Execute, ExecuteCreateParams, ExecuteCreateResponse } from './execute';
import * as RunAPI from './run';
import {
  Run,
  RunCancelResponse,
  RunCreateParams,
  RunCreateResponse,
  RunEventsParams,
  RunEventsResponse,
  RunExecResponse,
  RunGetDetailsResponse,
  RunGetStatusResponse,
  RunWatchParams,
  RunWatchResponse,
} from './run';

export class V1 extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  run: RunAPI.Run = new RunAPI.Run(this._client);
  execute: ExecuteAPI.Execute = new ExecuteAPI.Execute(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
}

V1.Agents = Agents;
V1.Run = Run;
V1.Execute = Execute;
V1.Chat = Chat;

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
    type RunEventsResponse as RunEventsResponse,
    type RunExecResponse as RunExecResponse,
    type RunGetDetailsResponse as RunGetDetailsResponse,
    type RunGetStatusResponse as RunGetStatusResponse,
    type RunWatchResponse as RunWatchResponse,
    type RunCreateParams as RunCreateParams,
    type RunEventsParams as RunEventsParams,
    type RunWatchParams as RunWatchParams,
  };

  export {
    Execute as Execute,
    type ExecuteCreateResponse as ExecuteCreateResponse,
    type ExecuteCreateParams as ExecuteCreateParams,
  };

  export {
    Chat as Chat,
    type ChatCreateResponse as ChatCreateResponse,
    type ChatDeleteResponse as ChatDeleteResponse,
    type ChatCancelResponse as ChatCancelResponse,
    type ChatRespondResponse as ChatRespondResponse,
    type ChatStreamResponse as ChatStreamResponse,
    type ChatUiStreamResponse as ChatUiStreamResponse,
    type ChatCreateParams as ChatCreateParams,
    type ChatReplyToQuestionParams as ChatReplyToQuestionParams,
    type ChatRespondParams as ChatRespondParams,
    type ChatSendMessageParams as ChatSendMessageParams,
    type ChatStreamParams as ChatStreamParams,
    type ChatUiStreamParams as ChatUiStreamParams,
  };
}
