// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InboxesAPI from './inboxes';
import {
  InboxCreateParams,
  InboxGetAttachmentParams,
  InboxGetMessageParams,
  InboxReplyParams,
  InboxSetPolicyParams,
  Inboxes,
} from './inboxes';

export class V1 extends APIResource {
  inboxes: InboxesAPI.Inboxes = new InboxesAPI.Inboxes(this._client);
}

V1.Inboxes = Inboxes;

export declare namespace V1 {
  export {
    Inboxes as Inboxes,
    type InboxCreateParams as InboxCreateParams,
    type InboxGetAttachmentParams as InboxGetAttachmentParams,
    type InboxGetMessageParams as InboxGetMessageParams,
    type InboxReplyParams as InboxReplyParams,
    type InboxSetPolicyParams as InboxSetPolicyParams,
  };
}
