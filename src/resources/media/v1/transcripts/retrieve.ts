// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Transcript retrieval and captioned media clip generation
 */
export class Retrieve extends APIResource {
  /**
   * Retrieves the full transcript text for a vault transcript object or an
   * audio/video source object with a completed transcription job. When object_id is
   * a source media object, access to that source object grants access to its
   * generated transcript artifact.
   */
  create(body: RetrieveCreateParams, options?: RequestOptions): APIPromise<RetrieveCreateResponse> {
    return this._client.post('/media/v1/transcripts/retrieve', { body, ...options });
  }
}

export interface RetrieveCreateResponse {
  /**
   * Requested object ID.
   */
  object_id: string;

  status: 'completed';

  /**
   * Full transcript text.
   */
  text: string;

  vault_id: string;

  audio_duration?: number;

  confidence?: number;

  filename?: string;

  /**
   * Source media object ID when known.
   */
  source_object_id?: string;

  /**
   * Transcript object ID when known.
   */
  transcript_object_id?: string;

  /**
   * Transcription job ID when known.
   */
  transcription_job_id?: string;

  word_count?: number;
}

export interface RetrieveCreateParams {
  /**
   * Object ID for either the source audio/video file or transcript artifact.
   */
  object_id: string;

  /**
   * Vault ID containing the source media or transcript object.
   */
  vault_id: string;

  /**
   * Alternative nested transcript object reference.
   */
  transcript?: RetrieveCreateParams.Transcript;
}

export namespace RetrieveCreateParams {
  /**
   * Alternative nested transcript object reference.
   */
  export interface Transcript {
    object_id?: string;

    vault_id?: string;
  }
}

export declare namespace Retrieve {
  export {
    type RetrieveCreateResponse as RetrieveCreateResponse,
    type RetrieveCreateParams as RetrieveCreateParams,
  };
}
