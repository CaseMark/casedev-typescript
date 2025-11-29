// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChatAPI from './chat';
import { Chat, ChatCreateCompletionParams, ChatCreateCompletionResponse } from './chat';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);

  /**
   * Create vector embeddings from text using OpenAI-compatible models. Perfect for
   * semantic search, document similarity, and building RAG systems for legal
   * documents.
   *
   * @example
   * ```ts
   * await client.llm.v1.createEmbedding({
   *   input: 'string',
   *   model: 'model',
   * });
   * ```
   */
  createEmbedding(body: V1CreateEmbeddingParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/llm/v1/embeddings', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of all available language models from 40+ providers including
   * OpenAI, Anthropic, Google, and Case.dev's specialized legal models. Returns
   * OpenAI-compatible model metadata with pricing information.
   *
   * This endpoint is compatible with OpenAI's models API format, making it easy to
   * integrate with existing applications.
   *
   * @example
   * ```ts
   * await client.llm.v1.listModels();
   * ```
   */
  listModels(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/llm/v1/models', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1CreateEmbeddingParams {
  /**
   * Text or array of texts to create embeddings for
   */
  input: string | Array<string>;

  /**
   * Embedding model to use (e.g., text-embedding-ada-002, text-embedding-3-small)
   */
  model: string;

  /**
   * Number of dimensions for the embeddings (model-specific)
   */
  dimensions?: number;

  /**
   * Format for returned embeddings
   */
  encoding_format?: 'float' | 'base64';

  /**
   * Unique identifier for the end-user
   */
  user?: string;
}

V1.Chat = Chat;

export declare namespace V1 {
  export { type V1CreateEmbeddingParams as V1CreateEmbeddingParams };

  export {
    Chat as Chat,
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
