// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  /**
   * Provision a new operator instance for the organization.
   */
  create(body: V1CreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/operator/v1/create', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Proxy a chat completion request to the organization's operator instance.
   */
  createChatCompletion(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/operator/v1/chat/completions', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Proxy a response request to the organization's operator instance.
   */
  createResponse(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/operator/v1/responses', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the status of the organization's operator instance.
   */
  getStatus(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/operator/v1/status', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1CreateParams {
  /**
   * Operator name
   */
  name: string;

  /**
   * Model to use
   */
  model?: string;

  /**
   * Instance size
   */
  size?: 'small' | 'medium' | 'large';
}

export declare namespace V1 {
  export { type V1CreateParams as V1CreateParams };
}
