// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SessionsAPI from './sessions';
import {
  SessionCancelParams,
  SessionCreateParams,
  SessionIngestEventsParams,
  SessionRetrieveEventsParams,
  SessionRetrieveMessagesParams,
  SessionSendRpcParams,
  Sessions,
} from './sessions';

export class V1 extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
}

V1.Sessions = Sessions;

export declare namespace V1 {
  export {
    Sessions as Sessions,
    type SessionCreateParams as SessionCreateParams,
    type SessionCancelParams as SessionCancelParams,
    type SessionIngestEventsParams as SessionIngestEventsParams,
    type SessionRetrieveEventsParams as SessionRetrieveEventsParams,
    type SessionRetrieveMessagesParams as SessionRetrieveMessagesParams,
    type SessionSendRpcParams as SessionSendRpcParams,
  };
}
