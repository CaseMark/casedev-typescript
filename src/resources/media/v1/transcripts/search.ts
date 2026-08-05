// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Transcript retrieval and captioned media clip generation
 */
export class Search extends APIResource {
  /**
   * Search transcript words
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/media/v1/transcripts/search', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
