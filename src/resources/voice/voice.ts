// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StreamingAPI from './streaming';
import { Streaming, StreamingGetURLResponse } from './streaming';
import * as TranscriptionAPI from './transcription';
import {
  Transcription,
  TranscriptionCreateParams,
  TranscriptionCreateResponse,
  TranscriptionRetrieveResponse,
} from './transcription';
import * as V1API from './v1/v1';
import { V1, V1ListVoicesParams, V1ListVoicesResponse } from './v1/v1';

export class Voice extends APIResource {
  streaming: StreamingAPI.Streaming = new StreamingAPI.Streaming(this._client);
  transcription: TranscriptionAPI.Transcription = new TranscriptionAPI.Transcription(this._client);
  v1: V1API.V1 = new V1API.V1(this._client);
}

Voice.Streaming = Streaming;
Voice.Transcription = Transcription;
Voice.V1 = V1;

export declare namespace Voice {
  export { Streaming as Streaming, type StreamingGetURLResponse as StreamingGetURLResponse };

  export {
    Transcription as Transcription,
    type TranscriptionCreateResponse as TranscriptionCreateResponse,
    type TranscriptionRetrieveResponse as TranscriptionRetrieveResponse,
    type TranscriptionCreateParams as TranscriptionCreateParams,
  };

  export {
    V1 as V1,
    type V1ListVoicesResponse as V1ListVoicesResponse,
    type V1ListVoicesParams as V1ListVoicesParams,
  };
}
