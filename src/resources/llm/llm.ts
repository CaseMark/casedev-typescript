// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import { V1, V1CreateEmbeddingParams } from './v1/v1';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Llm extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);

  /**
   * Retrieves the AI Gateway configuration including all available language models
   * and their specifications. This endpoint returns model information compatible
   * with the Vercel AI SDK Gateway format, making it easy to integrate with existing
   * AI applications.
   *
   * Use this endpoint to:
   *
   * - Discover available language models
   * - Get model specifications and pricing
   * - Configure AI SDK clients
   * - Build model selection interfaces
   *
   * @example
   * ```ts
   * await client.llm.getConfig();
   * ```
   */
  getConfig(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/llm/config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Llm.V1 = V1;

export declare namespace Llm {
  export { V1 as V1, type V1CreateEmbeddingParams as V1CreateEmbeddingParams };
}
