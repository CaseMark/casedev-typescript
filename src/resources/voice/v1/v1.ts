// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SpeakAPI from './speak';
import { Speak, SpeakCreateParams, SpeakStreamParams } from './speak';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  speak: SpeakAPI.Speak = new SpeakAPI.Speak(this._client);

  /**
   * Retrieve a list of available voices for text-to-speech synthesis. This endpoint
   * provides access to a comprehensive catalog of voices with various
   * characteristics, languages, and styles suitable for legal document narration,
   * client presentations, and accessibility purposes.
   *
   * @example
   * ```ts
   * await client.voice.v1.listVoices();
   * ```
   */
  listVoices(query: V1ListVoicesParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/voice/v1/voices', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1ListVoicesParams {
  /**
   * Filter by voice category
   */
  category?: string;

  /**
   * Filter by voice collection ID
   */
  collection_id?: string;

  /**
   * Whether to include total count in response
   */
  include_total_count?: boolean;

  /**
   * Token for retrieving the next page of results
   */
  next_page_token?: string;

  /**
   * Number of voices to return per page (max 100)
   */
  page_size?: number;

  /**
   * Search term to filter voices by name or description
   */
  search?: string;

  /**
   * Field to sort by
   */
  sort?: 'name' | 'created_at' | 'updated_at';

  /**
   * Sort direction
   */
  sort_direction?: 'asc' | 'desc';

  /**
   * Filter by voice type
   */
  voice_type?: 'premade' | 'cloned' | 'professional';
}

V1.Speak = Speak;

export declare namespace V1 {
  export { type V1ListVoicesParams as V1ListVoicesParams };

  export {
    Speak as Speak,
    type SpeakCreateParams as SpeakCreateParams,
    type SpeakStreamParams as SpeakStreamParams,
  };
}
