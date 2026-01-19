// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Streaming extends APIResource {
  /**
   * Returns the WebSocket URL and connection details for real-time audio
   * transcription. The returned URL can be used to establish a WebSocket connection
   * for streaming audio data and receiving transcribed text in real-time.
   *
   * **Audio Requirements:**
   *
   * - Sample Rate: 16kHz
   * - Encoding: PCM 16-bit little-endian
   * - Channels: Mono (1 channel)
   *
   * **Pricing:** $0.30 per minute ($18.00 per hour)
   *
   * @example
   * ```ts
   * const response = await client.voice.streaming.getURL();
   * ```
   */
  getURL(options?: RequestOptions): APIPromise<StreamingGetURLResponse> {
    return this._client.get('/voice/streaming/url', options);
  }
}

export interface StreamingGetURLResponse {
  audio_format?: StreamingGetURLResponse.AudioFormat;

  /**
   * Complete WebSocket URL with authentication token
   */
  connect_url?: string;

  pricing?: StreamingGetURLResponse.Pricing;

  /**
   * Connection protocol
   */
  protocol?: string;

  /**
   * Base WebSocket URL for streaming transcription
   */
  url?: string;
}

export namespace StreamingGetURLResponse {
  export interface AudioFormat {
    /**
     * Number of audio channels
     */
    channels?: number;

    /**
     * Required audio encoding format
     */
    encoding?: string;

    /**
     * Required audio sample rate in Hz
     */
    sample_rate?: number;
  }

  export interface Pricing {
    /**
     * Currency for pricing
     */
    currency?: string;

    /**
     * Cost per hour of transcription
     */
    per_hour?: number;

    /**
     * Cost per minute of transcription
     */
    per_minute?: number;
  }
}

export declare namespace Streaming {
  export { type StreamingGetURLResponse as StreamingGetURLResponse };
}
