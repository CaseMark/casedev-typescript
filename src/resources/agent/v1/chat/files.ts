// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Create, manage, and execute AI agents with tool access, sandbox environments, and async run workflows
 */
export class Files extends APIResource {
  /**
   * Lists files created by the agent in the sandbox workspace. Only available while
   * the sandbox is running.
   */
  list(id: string, options?: RequestOptions): APIPromise<FileListResponse> {
    return this._client.get(path`/agent/v1/chat/${id}/files`, options);
  }

  /**
   * Downloads a file from the sandbox workspace by path. Only available while the
   * sandbox is running.
   */
  download(filePath: string, params: FileDownloadParams, options?: RequestOptions): APIPromise<Response> {
    const { id } = params;
    return this._client.get(path`/agent/v1/chat/${id}/files/${filePath}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface FileListResponse {
  chatId?: string;

  files?: Array<FileListResponse.File>;
}

export namespace FileListResponse {
  export interface File {
    name?: string;

    /**
     * Relative path from /workspace
     */
    path?: string;

    sizeBytes?: number;
  }
}

export interface FileDownloadParams {
  /**
   * Chat session ID
   */
  id: string;
}

export declare namespace Files {
  export { type FileListResponse as FileListResponse, type FileDownloadParams as FileDownloadParams };
}
