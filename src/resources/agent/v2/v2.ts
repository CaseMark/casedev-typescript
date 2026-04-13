// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ExecuteAPI from './execute';
import { Execute, ExecuteCreateParams, ExecuteCreateResponse } from './execute';
import * as RunAPI from './run';
import {
  Run,
  RunCreateParams,
  RunCreateResponse,
  RunEventsParams,
  RunEventsResponse,
  RunExecResponse,
  RunGetDetailsResponse,
  RunGetStatusResponse,
} from './run';
import * as ChatAPI from './chat/chat';
import {
  Chat,
  ChatCancelResponse,
  ChatCreateParams,
  ChatCreateResponse,
  ChatCreateStreamTokenResponse,
  ChatDeleteResponse,
  ChatReplyToQuestionParams,
  ChatRespondParams,
  ChatRespondResponse,
  ChatSendMessageParams,
  ChatStreamParams,
  ChatStreamResponse,
} from './chat/chat';

export class V2 extends APIResource {
  run: RunAPI.Run = new RunAPI.Run(this._client);
  execute: ExecuteAPI.Execute = new ExecuteAPI.Execute(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
}

V2.Run = Run;
V2.Execute = Execute;
V2.Chat = Chat;

export declare namespace V2 {
  export {
    Run as Run,
    type RunCreateResponse as RunCreateResponse,
    type RunEventsResponse as RunEventsResponse,
    type RunExecResponse as RunExecResponse,
    type RunGetDetailsResponse as RunGetDetailsResponse,
    type RunGetStatusResponse as RunGetStatusResponse,
    type RunCreateParams as RunCreateParams,
    type RunEventsParams as RunEventsParams,
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
    type ChatCreateStreamTokenResponse as ChatCreateStreamTokenResponse,
    type ChatRespondResponse as ChatRespondResponse,
    type ChatStreamResponse as ChatStreamResponse,
    type ChatCreateParams as ChatCreateParams,
    type ChatReplyToQuestionParams as ChatReplyToQuestionParams,
    type ChatRespondParams as ChatRespondParams,
    type ChatSendMessageParams as ChatSendMessageParams,
    type ChatStreamParams as ChatStreamParams,
  };
}
