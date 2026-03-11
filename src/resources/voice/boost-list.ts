// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Audio transcription and text-to-speech
 */
export class BoostList extends APIResource {
  /**
   * Extracts a categorized word boost list from vault documents or raw text using
   * LLM entity extraction. The resulting list can be passed as `word_boost` to the
   * transcription endpoint for improved accuracy.
   *
   * @example
   * ```ts
   * const response = await client.voice.boostList.extract();
   * ```
   */
  extract(body: BoostListExtractParams, options?: RequestOptions): APIPromise<BoostListExtractResponse> {
    return this._client.post('/voice/boost-list/extract', { body, ...options });
  }

  /**
   * Generates a categorized word boost list from a completed transcription job.
   * Extracts entities from the pass-1 transcript for use as `word_boost` in a second
   * transcription pass.
   *
   * @example
   * ```ts
   * const response = await client.voice.boostList.generate({
   *   transcription_job_id: 'transcription_job_id',
   * });
   * ```
   */
  generate(body: BoostListGenerateParams, options?: RequestOptions): APIPromise<BoostListGenerateResponse> {
    return this._client.post('/voice/boost-list/generate', { body, ...options });
  }
}

export interface BoostListExtractResponse {
  items?: Array<BoostListExtractResponse.Item>;

  source?: 'document' | 'text';

  source_ids?: Array<string>;
}

export namespace BoostListExtractResponse {
  export interface Item {
    boost_param?: 'low' | 'default' | 'high';

    category?: string;

    word?: string;
  }
}

export interface BoostListGenerateResponse {
  items?: Array<BoostListGenerateResponse.Item>;

  source?: 'transcript';

  source_ids?: Array<string>;
}

export namespace BoostListGenerateResponse {
  export interface Item {
    boost_param?: 'low' | 'default' | 'high';

    category?: string;

    word?: string;
  }
}

export interface BoostListExtractParams {
  /**
   * Optional filter for entity categories to extract
   */
  categories?: Array<'person' | 'organization' | 'legal_term' | 'medical' | 'citation' | 'email'>;

  /**
   * Object IDs of documents to extract entities from (PDFs, text files)
   */
  object_ids?: Array<string>;

  /**
   * Raw text input for entity extraction (alternative to vault documents)
   */
  text?: string;

  /**
   * Vault ID containing the source documents (use with object_ids)
   */
  vault_id?: string;
}

export interface BoostListGenerateParams {
  /**
   * Completed pass-1 transcription job ID (tr\_...)
   */
  transcription_job_id: string;

  /**
   * Optional filter for entity categories to extract
   */
  categories?: Array<'person' | 'organization' | 'legal_term' | 'medical' | 'citation' | 'email'>;
}

export declare namespace BoostList {
  export {
    type BoostListExtractResponse as BoostListExtractResponse,
    type BoostListGenerateResponse as BoostListGenerateResponse,
    type BoostListExtractParams as BoostListExtractParams,
    type BoostListGenerateParams as BoostListGenerateParams,
  };
}
