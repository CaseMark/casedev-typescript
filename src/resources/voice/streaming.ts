// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
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
   * await client.voice.streaming.getURL();
   * ```
   */
  getURL(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/voice/streaming/url', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
