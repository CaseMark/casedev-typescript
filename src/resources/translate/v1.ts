// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  /**
   * Detect the language of text. Returns the most likely language code and
   * confidence score. Supports batch detection for multiple texts.
   *
   * @example
   * ```ts
   * const response = await client.translate.v1.detect({
   *   q: 'string',
   * });
   * ```
   */
  detect(body: V1DetectParams, options?: RequestOptions): APIPromise<V1DetectResponse> {
    return this._client.post('/translate/v1/detect', { body, ...options });
  }

  /**
   * Get the list of languages supported for translation. Optionally specify a target
   * language to get translated language names.
   *
   * @example
   * ```ts
   * const response = await client.translate.v1.listLanguages();
   * ```
   */
  listLanguages(
    query: V1ListLanguagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1ListLanguagesResponse> {
    return this._client.get('/translate/v1/languages', { query, ...options });
  }

  /**
   * Translate text between languages using Google Cloud Translation API. Supports
   * 100+ languages, automatic language detection, HTML preservation, and batch
   * translation.
   *
   * @example
   * ```ts
   * const response = await client.translate.v1.translate({
   *   q: 'string',
   *   target: 'es',
   * });
   * ```
   */
  translate(body: V1TranslateParams, options?: RequestOptions): APIPromise<V1TranslateResponse> {
    return this._client.post('/translate/v1/translate', { body, ...options });
  }
}

export interface V1DetectResponse {
  data?: V1DetectResponse.Data;
}

export namespace V1DetectResponse {
  export interface Data {
    detections?: Array<Array<Data.Detection>>;
  }

  export namespace Data {
    export interface Detection {
      /**
       * Confidence score (0-1)
       */
      confidence?: number;

      /**
       * Whether the detection is reliable
       */
      isReliable?: boolean;

      /**
       * Detected language code (ISO 639-1)
       */
      language?: string;
    }
  }
}

export interface V1ListLanguagesResponse {
  data?: V1ListLanguagesResponse.Data;
}

export namespace V1ListLanguagesResponse {
  export interface Data {
    languages?: Array<Data.Language>;
  }

  export namespace Data {
    export interface Language {
      /**
       * Language code (ISO 639-1)
       */
      language?: string;

      /**
       * Language name (if target specified)
       */
      name?: string;
    }
  }
}

export interface V1TranslateResponse {
  data?: V1TranslateResponse.Data;
}

export namespace V1TranslateResponse {
  export interface Data {
    translations?: Array<Data.Translation>;
  }

  export namespace Data {
    export interface Translation {
      /**
       * Detected source language (if source not specified)
       */
      detectedSourceLanguage?: string;

      /**
       * Model used for translation
       */
      model?: string;

      /**
       * Translated text
       */
      translatedText?: string;
    }
  }
}

export interface V1DetectParams {
  /**
   * Text to detect language for. Can be a single string or an array for batch
   * detection.
   */
  q: string | Array<string>;
}

export interface V1ListLanguagesParams {
  /**
   * Translation model to check language support for
   */
  model?: 'nmt' | 'base';

  /**
   * Target language code for translating language names (e.g., 'es' for Spanish
   * names)
   */
  target?: string;
}

export interface V1TranslateParams {
  /**
   * Text to translate. Can be a single string or an array for batch translation.
   */
  q: string | Array<string>;

  /**
   * Target language code (ISO 639-1)
   */
  target: string;

  /**
   * Format of the source text. Use 'html' to preserve HTML tags.
   */
  format?: 'text' | 'html';

  /**
   * Translation model. 'nmt' (Neural Machine Translation) is recommended for
   * quality.
   */
  model?: 'nmt' | 'base';

  /**
   * Source language code (ISO 639-1). If not specified, language is auto-detected.
   */
  source?: string;
}

export declare namespace V1 {
  export {
    type V1DetectResponse as V1DetectResponse,
    type V1ListLanguagesResponse as V1ListLanguagesResponse,
    type V1TranslateResponse as V1TranslateResponse,
    type V1DetectParams as V1DetectParams,
    type V1ListLanguagesParams as V1ListLanguagesParams,
    type V1TranslateParams as V1TranslateParams,
  };
}
