// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transcription extends APIResource {
  /**
   * Creates an asynchronous transcription job for audio files. Supports two modes:
   *
   * **Vault-based (recommended)**: Pass `vault_id` and `object_id` to transcribe
   * audio from your vault. The transcript will automatically be saved back to the
   * vault when complete.
   *
   * **Direct URL (legacy)**: Pass `audio_url` for direct transcription without
   * automatic storage.
   *
   * @example
   * ```ts
   * const transcription =
   *   await client.voice.transcription.create();
   * ```
   */
  create(body: TranscriptionCreateParams, options?: RequestOptions): APIPromise<TranscriptionCreateResponse> {
    return this._client.post('/voice/transcription', { body, ...options });
  }

  /**
   * Retrieve the status and result of an audio transcription job. For vault-based
   * jobs, returns status and result_object_id when complete. For legacy direct URL
   * jobs, returns the full transcription data.
   *
   * @example
   * ```ts
   * const transcription =
   *   await client.voice.transcription.retrieve(
   *     'tr_abc123def456',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TranscriptionRetrieveResponse> {
    return this._client.get(path`/voice/transcription/${id}`, options);
  }

  /**
   * Deletes a transcription job. For managed vault jobs (tr\_\*), also removes local
   * job records and managed transcript result objects. Idempotent: returns success
   * if already deleted.
   *
   * @example
   * ```ts
   * await client.voice.transcription.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/voice/transcription/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TranscriptionCreateResponse {
  /**
   * Unique transcription job ID
   */
  id?: string;

  /**
   * Source audio object ID (only for vault-based transcription)
   */
  source_object_id?: string;

  /**
   * Current status of the transcription job
   */
  status?: 'queued' | 'processing' | 'completed' | 'error';

  /**
   * Vault ID (only for vault-based transcription)
   */
  vault_id?: string;
}

export interface TranscriptionRetrieveResponse {
  /**
   * Unique transcription job ID
   */
  id: string;

  /**
   * Current status of the transcription job
   */
  status: 'queued' | 'processing' | 'completed' | 'failed';

  /**
   * Duration of the audio file in seconds
   */
  audio_duration?: number;

  /**
   * Overall confidence score (0-100)
   */
  confidence?: number;

  /**
   * Error message (only present when status is failed)
   */
  error?: string;

  /**
   * Result transcript object ID (vault-based jobs, when completed)
   */
  result_object_id?: string;

  /**
   * Source audio object ID (vault-based jobs only)
   */
  source_object_id?: string;

  /**
   * Full transcription text (legacy direct URL jobs only)
   */
  text?: string;

  /**
   * Vault ID (vault-based jobs only)
   */
  vault_id?: string;

  /**
   * Number of words in the transcript
   */
  word_count?: number;

  /**
   * Word-level timestamps (legacy direct URL jobs only)
   */
  words?: Array<unknown>;
}

export interface TranscriptionCreateParams {
  /**
   * URL of the audio file to transcribe (legacy mode, no auto-storage)
   */
  audio_url?: string;

  /**
   * Automatically extract key phrases and topics
   */
  auto_highlights?: boolean;

  /**
   * How much to boost custom vocabulary
   */
  boost_param?: 'low' | 'default' | 'high';

  /**
   * Enable content moderation and safety labeling
   */
  content_safety_labels?: boolean;

  /**
   * Output format for the transcript when using vault mode
   */
  format?: 'json' | 'text';

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
   * Object ID of the audio file in the vault (use with vault_id)
   */
  object_id?: string;

  /**
   * Add punctuation to the transcript
   */
  punctuate?: boolean;

  /**
   * Enable speaker identification and labeling
   */
  speaker_labels?: boolean;

  /**
   * Expected number of speakers (improves accuracy when known)
   */
  speakers_expected?: number;

  /**
   * Vault ID containing the audio file (use with object_id)
   */
  vault_id?: string;

  /**
   * Custom vocabulary words to boost (e.g., legal terms)
   */
  word_boost?: Array<string>;
}

export declare namespace Transcription {
  export {
    type TranscriptionCreateResponse as TranscriptionCreateResponse,
    type TranscriptionRetrieveResponse as TranscriptionRetrieveResponse,
    type TranscriptionCreateParams as TranscriptionCreateParams,
  };
}
