// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ClipsAPI from './clips';
import { Clips } from './clips';
import * as TranscriptsAPI from './transcripts/transcripts';
import { Transcripts } from './transcripts/transcripts';

export class V1 extends APIResource {
  clips: ClipsAPI.Clips = new ClipsAPI.Clips(this._client);
  transcripts: TranscriptsAPI.Transcripts = new TranscriptsAPI.Transcripts(this._client);
}

V1.Clips = Clips;
V1.Transcripts = Transcripts;

export declare namespace V1 {
  export { Clips as Clips };

  export { Transcripts as Transcripts };
}
