// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create, manage, and execute AI agents with tool access, sandbox environments, and async run workflows
 */
export class Sessions extends APIResource {
  /**
   * Creates a Daytona-backed native Linc session with scoped Case.dev credentials.
   * This endpoint starts the sandbox actor only; messages and event replay use
   * separate endpoints.
   */
  create(body: SessionCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/linc/v1/sessions', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * End native Linc session
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/linc/v1/sessions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancel native Linc session turn
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/linc/v1/sessions/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Runtime ingest endpoint for sandbox runtimes. Frames are persisted for replay;
   * terminal frames emit the durable Linc session ended webhook.
   */
  ingestEvents(id: string, body: SessionIngestEventsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/linc/v1/sessions/${id}/events/ingest`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns persisted native Pi/Linc event envelopes after the requested cursor.
   * Live delivery is handled by the Linc stream service.
   */
  retrieveEvents(
    id: string,
    query: SessionRetrieveEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/linc/v1/sessions/${id}/events`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns completed Pi/Linc message entries derived from durable native Linc
   * events. This is the stable session-message read model for callers that need to
   * persist or recover chat history without depending on a live SSE stream.
   */
  retrieveMessages(
    id: string,
    query: SessionRetrieveMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/linc/v1/sessions/${id}/messages`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get native Linc session state
   */
  retrieveState(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/linc/v1/sessions/${id}/state`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Forwards a native Pi/Linc RPC command object to the sandbox-local Linc bridge
   * unchanged. The route returns after Pi accepts or rejects the command; native
   * events are read through the events endpoint.
   */
  sendRpc(id: string, body: SessionSendRpcParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/linc/v1/sessions/${id}/rpc`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SessionCreateParams {
  /**
   * Specific document template slugs to inject into the using-document-templates
   * skill.
   */
  documentTemplateSlugs?: Array<string> | null;

  idleTimeoutMs?: number | null;

  /**
   * When true, inject all active org document templates into the
   * using-document-templates skill.
   */
  includeDocumentTemplates?: boolean | null;

  /**
   * Privileged C3-only hidden app instructions to append to the sandbox AGENTS.md.
   */
  instructions?: string | null;

  model?: string | null;

  /**
   * Optional caller-provided scoped Case.dev API key for the runtime.
   */
  scopedApiKey?: string | null;

  /**
   * Skills API slugs to install into the runtime sandbox before the native session
   * starts.
   */
  skillSlugs?: Array<string> | null;

  title?: string;

  vaultIds?: Array<string> | null;
}

export interface SessionIngestEventsParams {
  /**
   * Native Linc event frames to persist for replay.
   */
  frames: Array<SessionIngestEventsParams.Frame>;
}

export namespace SessionIngestEventsParams {
  export interface Frame {
    /**
     * Native Linc event payload.
     */
    event: { [key: string]: unknown };

    /**
     * Monotonic native event sequence number.
     */
    seq: number;

    /**
     * Native Linc event type.
     */
    type: string;
  }
}

export interface SessionRetrieveEventsParams {
  /**
   * Alias for cursor. Ignored when cursor is also provided.
   */
  afterSeq?: number;

  /**
   * Replay events with a sequence number greater than this cursor.
   */
  cursor?: number;

  /**
   * Comma-separated Linc event types to omit from replay.
   */
  excludeEventTypes?: Array<string>;

  /**
   * Maximum number of events to return.
   */
  limit?: number;
}

export interface SessionRetrieveMessagesParams {
  /**
   * Alias for cursor. Ignored when cursor is also provided.
   */
  afterSeq?: number;

  /**
   * Replay messages with a source event sequence number greater than this cursor.
   */
  cursor?: number;

  /**
   * Maximum number of source events to scan for completed messages.
   */
  limit?: number;
}

export interface SessionSendRpcParams {
  /**
   * Native Pi/Linc RPC command type. Prompt commands also require a string id for
   * idempotency.
   */
  type: string;

  /**
   * Command idempotency key. Required when type is prompt.
   */
  id?: string;

  [k: string]: unknown;
}

export declare namespace Sessions {
  export {
    type SessionCreateParams as SessionCreateParams,
    type SessionIngestEventsParams as SessionIngestEventsParams,
    type SessionRetrieveEventsParams as SessionRetrieveEventsParams,
    type SessionRetrieveMessagesParams as SessionRetrieveMessagesParams,
    type SessionSendRpcParams as SessionSendRpcParams,
  };
}
