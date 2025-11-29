// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Speak extends APIResource {
  /**
   * Convert text to natural-sounding audio using ElevenLabs voices. Ideal for
   * creating audio summaries of legal documents, client presentations, or
   * accessibility features. Supports multiple languages and voice customization.
   *
   * @example
   * ```ts
   * const speak = await client.voice.v1.speak.create({
   *   text: 'text',
   * });
   *
   * const content = await speak.blob();
   * console.log(content);
   * ```
   */
  create(body: SpeakCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/voice/v1/speak', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'audio/mpeg' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Convert text to speech using ElevenLabs AI voices with streaming for real-time
   * playback. Returns audio data as an MP3 stream for immediate playback with
   * minimal latency. Perfect for legal document narration, client presentations, or
   * accessibility features.
   *
   * @example
   * ```ts
   * const response = await client.voice.v1.speak.stream({
   *   text: 'text',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  stream(body: SpeakStreamParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/voice/v1/speak/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'audio/mpeg' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface SpeakCreateParams {
  /**
   * Text to convert to speech
   */
  text: string;

  /**
   * Apply automatic text normalization
   */
  apply_text_normalization?: boolean;

  /**
   * Enable request logging
   */
  enable_logging?: boolean;

  /**
   * Language code for multilingual models
   */
  language_code?: string;

  /**
   * ElevenLabs model ID
   */
  model_id?: 'eleven_multilingual_v2' | 'eleven_turbo_v2' | 'eleven_monolingual_v1';

  /**
   * Next context for better pronunciation
   */
  next_text?: string;

  /**
   * Optimize for streaming latency (0-4)
   */
  optimize_streaming_latency?: number;

  /**
   * Audio output format
   */
  output_format?: 'mp3_44100_128' | 'mp3_44100_192' | 'pcm_16000' | 'pcm_22050' | 'pcm_24000' | 'pcm_44100';

  /**
   * Previous context for better pronunciation
   */
  previous_text?: string;

  /**
   * Seed for reproducible generation
   */
  seed?: number;

  /**
   * ElevenLabs voice ID (defaults to Rachel - professional, clear)
   */
  voice_id?: string;

  /**
   * Voice customization settings
   */
  voice_settings?: SpeakCreateParams.VoiceSettings;
}

export namespace SpeakCreateParams {
  /**
   * Voice customization settings
   */
  export interface VoiceSettings {
    /**
     * Similarity boost (0-1)
     */
    similarity_boost?: number;

    /**
     * Voice stability (0-1)
     */
    stability?: number;

    /**
     * Style exaggeration (0-1)
     */
    style?: number;

    /**
     * Enable speaker boost
     */
    use_speaker_boost?: boolean;
  }
}

export interface SpeakStreamParams {
  /**
   * Text to convert to speech
   */
  text: string;

  /**
   * Apply text normalization
   */
  apply_text_normalization?: boolean;

  /**
   * Enable request logging
   */
  enable_logging?: boolean;

  /**
   * Language code (e.g., 'en', 'es', 'fr')
   */
  language_code?: string;

  /**
   * TTS model to use
   */
  model_id?:
    | 'eleven_monolingual_v1'
    | 'eleven_multilingual_v1'
    | 'eleven_multilingual_v2'
    | 'eleven_turbo_v2';

  /**
   * Next text for context
   */
  next_text?: string;

  /**
   * Optimize for streaming latency (0-4)
   */
  optimize_streaming_latency?: number;

  /**
   * Audio output format
   */
  output_format?: 'mp3_44100_128' | 'mp3_22050_32' | 'pcm_16000' | 'pcm_22050' | 'pcm_24000' | 'pcm_44100';

  /**
   * Previous text for context
   */
  previous_text?: string;

  /**
   * Random seed for reproducible generation
   */
  seed?: number;

  /**
   * ElevenLabs voice ID (defaults to Rachel for professional clarity)
   */
  voice_id?: string;

  voice_settings?: SpeakStreamParams.VoiceSettings;
}

export namespace SpeakStreamParams {
  export interface VoiceSettings {
    /**
     * Similarity boost (0-1)
     */
    similarity_boost?: number;

    /**
     * Voice stability (0-1)
     */
    stability?: number;

    /**
     * Style exaggeration (0-1)
     */
    style?: number;

    /**
     * Enable speaker boost
     */
    use_speaker_boost?: boolean;
  }
}

export declare namespace Speak {
  export { type SpeakCreateParams as SpeakCreateParams, type SpeakStreamParams as SpeakStreamParams };
}
