// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transcription extends APIResource {
  /**
   * Creates an asynchronous transcription job for audio files. Supports various
   * audio formats and advanced features like speaker identification, content
   * moderation, and automatic highlights. Returns a job ID for checking
   * transcription status and retrieving results.
   *
   * @example
   * ```ts
   * await client.voice.transcription.create({
   *   audio_url: 'audio_url',
   * });
   * ```
   */
  create(body: TranscriptionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/voice/transcription', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the status and result of an audio transcription job. Returns the
   * transcription text when complete, or status information for pending jobs.
   *
   * @example
   * ```ts
   * const transcription =
   *   await client.voice.transcription.retrieve(
   *     '5551902f-fc65-4a61-81b2-e002d4e464e5',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TranscriptionRetrieveResponse> {
    return this._client.get(path`/voice/transcription/${id}`, options);
  }
}

export interface TranscriptionRetrieveResponse {
  /**
   * Unique transcription job ID
   */
  id: string;

  /**
   * Current status of the transcription job
   */
  status: 'queued' | 'processing' | 'completed' | 'error';

  /**
   * Duration of the audio file in seconds
   */
  audio_duration?: number;

  /**
   * Overall confidence score for the transcription
   */
  confidence?: number;

  /**
   * Error message (only present when status is error)
   */
  error?: string;

  /**
   * Full transcription text (only present when status is completed)
   */
  text?: string;

  /**
   * Word-level timestamps and confidence scores
   */
  words?: Array<TranscriptionRetrieveResponse.Word>;
}

export namespace TranscriptionRetrieveResponse {
  export interface Word {
    confidence?: number;

    end?: number;

    start?: number;

    text?: string;
  }
}

export interface TranscriptionCreateParams {
  /**
   * URL of the audio file to transcribe
   */
  audio_url: string;

  /**
   * Automatically extract key phrases and topics
   */
  auto_highlights?: boolean;

  /**
   * Enable content moderation and safety labeling
   */
  content_safety_labels?: boolean;

  /**
   * Format text with proper capitalization
   */
  format_text?: boolean;

  /**
   * Language code (e.g., 'en_us', 'es', 'fr'). If not specified, language will be
   * auto-detected
   */
  language_code?: string;

  /**
   * Enable automatic language detection
   */
  language_detection?: boolean;

  /**
   * Add punctuation to the transcript
   */
  punctuate?: boolean;

  /**
   * Enable speaker identification and labeling
   */
  speaker_labels?: boolean;
}

export declare namespace Transcription {
  export {
    type TranscriptionRetrieveResponse as TranscriptionRetrieveResponse,
    type TranscriptionCreateParams as TranscriptionCreateParams,
  };
}
