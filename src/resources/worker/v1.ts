// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  /**
   * Creates a Daytona-backed worker runtime. The worker exposes its native runtime
   * API through /worker/v1/:id/\* without reshaping payloads or events.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/worker/v1', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get worker
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/worker/v1/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * End worker
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/worker/v1/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Starts or resumes the worker sandbox and OpenCode server. Native
   * /worker/v1/:id/\* proxy routes require this lifecycle primitive to have
   * completed first.
   */
  boot(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/worker/v1/${id}/boot`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Forwards a DELETE request to the worker runtime without translating response
   * shapes.
   */
  proxyDelete(workerPath: string, params: V1ProxyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/worker/v1/${id}/${workerPath}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Forwards a GET request to the worker runtime without translating response or SSE
   * event shapes.
   */
  proxyGet(workerPath: string, params: V1ProxyGetParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.get(path`/worker/v1/${id}/${workerPath}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Forwards a PATCH request to the worker runtime without translating request or
   * response shapes.
   */
  proxyPatch(workerPath: string, params: V1ProxyPatchParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.patch(path`/worker/v1/${id}/${workerPath}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Forwards a POST request to the worker runtime without translating request,
   * response, or SSE event shapes.
   */
  proxyPost(workerPath: string, params: V1ProxyPostParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.post(path`/worker/v1/${id}/${workerPath}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Forwards a PUT request to the worker runtime without translating request or
   * response shapes.
   */
  proxyPut(workerPath: string, params: V1ProxyPutParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.put(path`/worker/v1/${id}/${workerPath}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1ProxyDeleteParams {
  id: string;
}

export interface V1ProxyGetParams {
  id: string;
}

export interface V1ProxyPatchParams {
  id: string;
}

export interface V1ProxyPostParams {
  id: string;
}

export interface V1ProxyPutParams {
  id: string;
}

export declare namespace V1 {
  export {
    type V1ProxyDeleteParams as V1ProxyDeleteParams,
    type V1ProxyGetParams as V1ProxyGetParams,
    type V1ProxyPatchParams as V1ProxyPatchParams,
    type V1ProxyPostParams as V1ProxyPostParams,
    type V1ProxyPutParams as V1ProxyPutParams,
  };
}
