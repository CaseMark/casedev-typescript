// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SpeakAPI from './speak';
import { Speak, SpeakCreateParams } from './speak';
import { APIPromise } from '../../../core/api-promise';
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
   * const response = await client.voice.v1.listVoices();
   * ```
   */
  listVoices(
    query: V1ListVoicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1ListVoicesResponse> {
    return this._client.get('/voice/v1/voices', { query, ...options });
  }
}

export interface V1ListVoicesResponse {
  /**
   * Token for next page of results
   */
  next_page_token?: string;

  /**
   * Total number of voices (if requested)
   */
  total_count?: number;

  voices?: Array<V1ListVoicesResponse.Voice>;
}

export namespace V1ListVoicesResponse {
  export interface Voice {
    /**
     * Available subscription tiers
     */
    available_for_tiers?: Array<string>;

    /**
     * Voice category
     */
    category?: string;

    /**
     * Voice description
     */
    description?: string;

    /**
     * Voice characteristics and metadata
     */
    labels?: unknown;

    /**
     * Voice name
     */
    name?: string;

    /**
     * URL to preview audio sample
     */
    preview_url?: string;

    /**
     * Unique voice identifier
     */
    voice_id?: string;
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
  export { type V1ListVoicesResponse as V1ListVoicesResponse, type V1ListVoicesParams as V1ListVoicesParams };

  export { Speak as Speak, type SpeakCreateParams as SpeakCreateParams };
}
