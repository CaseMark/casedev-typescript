// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create, manage, and execute AI agents with tool access, sandbox environments, and async run workflows
 */
export class Inboxes extends APIResource {
  /**
   * Create an inbox owned by the authenticated organization.
   */
  create(body: InboxCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/mail/v1/inboxes', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get an inbox owned by the authenticated organization.
   */
  retrieve(inboxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/mail/v1/inboxes/${inboxID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List inboxes owned by the authenticated organization.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/mail/v1/inboxes', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete an inbox owned by the authenticated organization.
   */
  delete(inboxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/mail/v1/inboxes/${inboxID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get attachment metadata for a message in an inbox owned by the authenticated
   * organization.
   */
  getAttachment(
    attachmentID: string,
    params: InboxGetAttachmentParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { inboxId, messageId } = params;
    return this._client.get(
      path`/mail/v1/inboxes/${inboxId}/messages/${messageId}/attachments/${attachmentID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Get a message for an inbox owned by the authenticated organization.
   */
  getMessage(messageID: string, params: InboxGetMessageParams, options?: RequestOptions): APIPromise<void> {
    const { inboxId } = params;
    return this._client.get(path`/mail/v1/inboxes/${inboxId}/messages/${messageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List messages for an inbox owned by the authenticated organization.
   */
  listMessages(inboxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/mail/v1/inboxes/${inboxID}/messages`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Reply to a message in an inbox owned by the authenticated organization.
   */
  reply(messageID: string, params: InboxReplyParams, options?: RequestOptions): APIPromise<void> {
    const { inboxId } = params;
    return this._client.post(path`/mail/v1/inboxes/${inboxId}/messages/${messageID}/reply`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send a message from an inbox owned by the authenticated organization.
   */
  send(inboxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mail/v1/inboxes/${inboxID}/messages/send`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InboxCreateParams {
  address?: string;

  displayName?: string;
}

export interface InboxGetAttachmentParams {
  inboxId: string;

  messageId: string;
}

export interface InboxGetMessageParams {
  inboxId: string;
}

export interface InboxReplyParams {
  inboxId: string;
}

export declare namespace Inboxes {
  export {
    type InboxCreateParams as InboxCreateParams,
    type InboxGetAttachmentParams as InboxGetAttachmentParams,
    type InboxGetMessageParams as InboxGetMessageParams,
    type InboxReplyParams as InboxReplyParams,
  };
}
