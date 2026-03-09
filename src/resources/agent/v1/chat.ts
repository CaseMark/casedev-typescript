// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { Stream } from '../../../core/streaming';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Chat extends APIResource {
  /**
   * Creates a persistent OpenCode chat session in a Modal sandbox. Session state is
   * retained and can be resumed across requests.
   */
  create(
    body: ChatCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChatCreateResponse> {
    return this._client.post('/agent/v1/chat', { body, ...options });
  }

  /**
   * Snapshots and terminates the active sandbox (if any), then marks the chat as
   * ended.
   */
  delete(id: string, options?: RequestOptions): APIPromise<ChatDeleteResponse> {
    return this._client.delete(path`/agent/v1/chat/${id}`, options);
  }

  /**
   * Aborts the active OpenCode generation for this chat session.
   */
  cancel(id: string, options?: RequestOptions): APIPromise<ChatCancelResponse> {
    return this._client.post(path`/agent/v1/chat/${id}/cancel`, options);
  }

  /**
   * Answers a pending OpenCode question for the chat session bound to this agent
   * chat.
   */
  replyToQuestion(
    requestID: string,
    params: ChatReplyToQuestionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.post(path`/agent/v1/chat/${id}/question/${requestID}/reply`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Streams a single assistant turn as normalized state events with stable turn,
   * message, and part ids. Emits session.usage before turn.completed when token data
   * is available.
   */
  respond(
    id: string,
    params: ChatRespondParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ChatRespondResponse>> {
    const { body } = params;
    return this._client.post(path`/agent/v1/chat/${id}/respond`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<ChatRespondResponse>>;
  }

  /**
   * Proxies a message to the OpenCode session bound to this chat.
   */
  sendMessage(id: string, params: ChatSendMessageParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post(path`/agent/v1/chat/${id}/message`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Relays OpenCode SSE events for this chat. Supports replay from buffered events
   * using Last-Event-ID.
   */
  stream(
    id: string,
    query: ChatStreamParams | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Stream<ChatStreamResponse>> {
    return this._client.get(path`/agent/v1/chat/${id}/stream`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<ChatStreamResponse>>;
  }

  /**
   * Streams a single assistant turn as AI SDK UIMessageChunk SSE events for direct
   * client rendering.
   */
  uiStream(
    id: string,
    params: ChatUiStreamParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ChatUiStreamResponse>> {
    const { body } = params;
    return this._client.post(path`/agent/v1/chat/${id}/ui-stream`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<ChatUiStreamResponse>>;
  }
}

export interface ChatCreateResponse {
  id?: string;

  createdAt?: string;

  idleTimeoutMs?: number;

  status?: string;
}

export interface ChatDeleteResponse {
  id?: string;

  cost?: number;

  runtimeMs?: number;

  snapshotImageId?: string | null;

  status?: string;
}

export interface ChatCancelResponse {
  id?: string;

  ok?: boolean;
}

export type ChatRespondResponse = string;

export type ChatStreamResponse = string;

export type ChatUiStreamResponse = string;

export interface ChatCreateParams {
  /**
   * Idle timeout before session is eligible for snapshot/termination. Defaults to 15
   * minutes.
   */
  idleTimeoutMs?: number | null;

  /**
   * Optional model override for the OpenCode session
   */
  model?: string | null;

  /**
   * Optional human-readable session title
   */
  title?: string;

  /**
   * Restrict the chat session to specific vault IDs
   */
  vaultIds?: Array<string> | null;
}

export interface ChatReplyToQuestionParams {
  /**
   * Path param: Chat session ID
   */
  id: string;

  /**
   * Body param
   */
  answers: Array<Array<string>>;
}

export interface ChatRespondParams {
  /**
   * OpenCode message payload. Passed through 1:1.
   */
  body: unknown;
}

export interface ChatSendMessageParams {
  /**
   * OpenCode message payload. Passed through 1:1.
   */
  body: unknown;
}

export interface ChatStreamParams {
  /**
   * Replay events after this sequence number
   */
  lastEventId?: number;
}

export interface ChatUiStreamParams {
  /**
   * OpenCode message payload. Passed through 1:1.
   */
  body: unknown;
}

export declare namespace Chat {
  export {
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
