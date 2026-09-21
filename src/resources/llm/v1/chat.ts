// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Access 40+ language models through a unified API
 */
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
    params: ChatCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ChatCreateCompletionResponse> {
    const { 'ai-reporting-tags': aiReportingTags, 'ai-reporting-user': aiReportingUser, ...body } = params;
    return this._client.post('/llm/v1/chat/completions', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(aiReportingTags != null ? { 'ai-reporting-tags': aiReportingTags } : undefined),
          ...(aiReportingUser != null ? { 'ai-reporting-user': aiReportingUser } : undefined),
        },
        options?.headers,
      ]),
    });
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
   * Body param: List of messages comprising the conversation
   */
  messages: Array<ChatCreateCompletionParams.Message>;

  /**
   * Body param: CaseMark-only: controls whether reasoning fields appear in
   * responses. Defaults to false (suppressed) for most CaseMark models; defaults to
   * true for casemark/core-potassium.
   */
  casemark_show_reasoning?: boolean;

  /**
   * Body param: Frequency penalty parameter
   */
  frequency_penalty?: number;

  /**
   * Body param: Maximum number of tokens to generate
   */
  max_tokens?: number;

  /**
   * Body param: Model to use for completion. Defaults to casemark/core-large if not
   * specified
   */
  model?: string;

  /**
   * Body param: Presence penalty parameter
   */
  presence_penalty?: number;

  /**
   * Body param: Whether to stream back partial progress
   */
  stream?: boolean;

  /**
   * Body param: Sampling temperature between 0 and 2
   */
  temperature?: number;

  /**
   * Body param: Nucleus sampling parameter
   */
  top_p?: number;

  /**
   * Header param: Comma-separated AI Gateway reporting tags. At most 10 unique tags,
   * each 1–64 characters.
   */
  'ai-reporting-tags'?: string;

  /**
   * Header param: Stable internal user or customer identifier for AI Gateway cost
   * reporting.
   */
  'ai-reporting-user'?: string;
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
