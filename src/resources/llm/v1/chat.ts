// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Chat extends APIResource {
  /**
   * Create a completion for the provided prompt and parameters. Compatible with
   * OpenAI's chat completions API. Supports 40+ models including GPT-4, Claude,
   * Gemini, and CaseMark legal AI models. Includes streaming support, token
   * counting, and usage tracking.
   *
   * @example
   * ```ts
   * const response = await client.llm.v1.chat.createCompletion({
   *   messages: [{}],
   * });
   * ```
   */
  createCompletion(
    body: ChatCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ChatCreateCompletionResponse> {
    return this._client.post('/llm/v1/chat/completions', { body, ...options });
  }
}

export interface ChatCreateCompletionResponse {
  /**
   * Unique identifier for the completion
   */
  id?: string;

  choices?: Array<ChatCreateCompletionResponse.Choice>;

  /**
   * Unix timestamp of completion creation
   */
  created?: number;

  /**
   * Model used for completion
   */
  model?: string;

  object?: string;

  usage?: ChatCreateCompletionResponse.Usage;
}

export namespace ChatCreateCompletionResponse {
  export interface Choice {
    finish_reason?: string;

    index?: number;

    message?: Choice.Message;
  }

  export namespace Choice {
    export interface Message {
      content?: string;

      role?: string;
    }
  }

  export interface Usage {
    completion_tokens?: number;

    /**
     * Cost in USD
     */
    cost?: number;

    prompt_tokens?: number;

    total_tokens?: number;
  }
}

export interface ChatCreateCompletionParams {
  /**
   * List of messages comprising the conversation
   */
  messages: Array<ChatCreateCompletionParams.Message>;

  /**
   * Frequency penalty parameter
   */
  frequency_penalty?: number;

  /**
   * Maximum number of tokens to generate
   */
  max_tokens?: number;

  /**
   * Model to use for completion. Defaults to casemark-core-1 if not specified
   */
  model?: string;

  /**
   * Presence penalty parameter
   */
  presence_penalty?: number;

  /**
   * Whether to stream back partial progress
   */
  stream?: boolean;

  /**
   * Sampling temperature between 0 and 2
   */
  temperature?: number;

  /**
   * Nucleus sampling parameter
   */
  top_p?: number;
}

export namespace ChatCreateCompletionParams {
  export interface Message {
    /**
     * The contents of the message
     */
    content?: string;

    /**
     * The role of the message author
     */
    role?: 'system' | 'user' | 'assistant';
  }
}

export declare namespace Chat {
  export {
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
