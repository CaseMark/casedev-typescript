// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { Stream } from '../../../core/streaming';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create, manage, and execute AI agents with tool access, sandbox environments, and async run workflows
 */
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
   * Streams a single assistant turn as normalized SSE events with stable turn,
   * message, and part IDs. Emits events: `turn.started`, `turn.status`,
   * `message.created`, `message.part.updated`, `message.completed`, `session.usage`,
   * `turn.completed`.
   *
   * **When to use this endpoint:** Recommended for building custom chat UIs that
   * need real-time streaming progress. This is the primary streaming endpoint for
   * new integrations.
   *
   * **Alternatives:**
   *
   * - `POST /chat/:id/message` — synchronous, returns complete response as JSON
   *   (best for server-to-server)
   */
  respond(
    id: string,
    body: ChatRespondParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ChatRespondResponse>> {
    return this._client.post(path`/agent/v1/chat/${id}/respond`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<ChatRespondResponse>>;
  }

  /**
   * Sends a message and returns the complete response as a single JSON body. Blocks
   * until the agent turn completes.
   *
   * **When to use this endpoint:** Best for server-to-server integrations,
   * background processing, or any context where you want the full response in one
   * call without managing an SSE stream.
   *
   * **Alternatives:**
   *
   * - `POST /chat/:id/respond` — streaming SSE with normalized events (recommended
   *   for custom chat UIs)
   */
  sendMessage(id: string, body: ChatSendMessageParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/agent/v1/chat/${id}/message`, {
      body,
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
   * Message content parts. Currently only "text" type is supported. Additional types
   * (e.g. file, image) may be added in future versions.
   */
  parts?: Array<ChatRespondParams.Part>;
}

export namespace ChatRespondParams {
  export interface Part {
    /**
     * The message text content
     */
    text: string;

    /**
     * Part type. Currently only "text" is supported.
     */
    type: 'text';
  }
}

export interface ChatSendMessageParams {
  /**
   * Message content parts. Currently only "text" type is supported. Additional types
   * (e.g. file, image) may be added in future versions.
   */
  parts?: Array<ChatSendMessageParams.Part>;
}

export namespace ChatSendMessageParams {
  export interface Part {
    /**
     * The message text content
     */
    text: string;

    /**
     * Part type. Currently only "text" is supported.
     */
    type: 'text';
  }
}

export interface ChatStreamParams {
  /**
   * Replay events after this sequence number
   */
  lastEventId?: number;
}

export declare namespace Chat {
  export {
    type ChatCreateResponse as ChatCreateResponse,
    type ChatDeleteResponse as ChatDeleteResponse,
    type ChatCancelResponse as ChatCancelResponse,
    type ChatRespondResponse as ChatRespondResponse,
    type ChatStreamResponse as ChatStreamResponse,
    type ChatCreateParams as ChatCreateParams,
    type ChatReplyToQuestionParams as ChatReplyToQuestionParams,
    type ChatRespondParams as ChatRespondParams,
    type ChatSendMessageParams as ChatSendMessageParams,
    type ChatStreamParams as ChatStreamParams,
  };
}
