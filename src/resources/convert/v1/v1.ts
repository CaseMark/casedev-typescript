// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from './jobs';
import { Jobs } from './jobs';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class V1 extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  /**
   * Download the converted M4A audio file from a completed FTR conversion job. The
   * file is streamed directly to the client with appropriate headers for audio
   * playback or download.
   */
  download(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/convert/v1/download/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'audio/mp4' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Submit an FTR (ForensicTech Recording) file for conversion to M4A audio format.
   * This endpoint is commonly used to convert court recording files into standard
   * audio formats for transcription or playback. The conversion is processed
   * asynchronously - you'll receive a job ID to track the conversion status.
   *
   * **Supported Input**: FTR files via S3 presigned URLs **Output Format**: M4A
   * audio **Processing**: Asynchronous with webhook callbacks
   */
  process(body: V1ProcessParams, options?: RequestOptions): APIPromise<V1ProcessResponse> {
    return this._client.post('/convert/v1/process', { body, ...options });
  }

  /**
   * Internal webhook endpoint that receives completion notifications from the Modal
   * FTR converter service. This endpoint handles status updates for file conversion
   * jobs, including success and failure notifications. Requires valid Bearer token
   * authentication.
   */
  webhook(body: V1WebhookParams, options?: RequestOptions): APIPromise<V1WebhookResponse> {
    return this._client.post('/convert/v1/webhook', { body, ...options });
  }
}

export interface V1ProcessResponse {
  /**
   * Unique identifier for the conversion job
   */
  job_id?: string;

  /**
   * Instructions for checking job status
   */
  message?: string;

  /**
   * Current status of the conversion job
   */
  status?: 'queued' | 'processing' | 'completed' | 'failed';
}

export interface V1WebhookResponse {
  message?: string;

  success?: boolean;
}

export interface V1ProcessParams {
  /**
   * HTTPS URL to the FTR file (must be a valid S3 presigned URL)
   */
  input_url: string;

  /**
   * Optional webhook URL to receive conversion completion notification
   */
  callback_url?: string;
}

export interface V1WebhookParams {
  /**
   * Unique identifier for the conversion job
   */
  job_id: string;

  /**
   * Status of the conversion job
   */
  status: 'completed' | 'failed';

  /**
   * Error message for failed jobs
   */
  error?: string;

  /**
   * Result data for completed jobs
   */
  result?: V1WebhookParams.Result;
}

export namespace V1WebhookParams {
  /**
   * Result data for completed jobs
   */
  export interface Result {
    /**
     * Processing duration in seconds
     */
    duration_seconds?: number;

    /**
     * Size of processed file in bytes
     */
    file_size_bytes?: number;

    /**
     * Filename where converted file is stored
     */
    stored_filename?: string;
  }
}

V1.Jobs = Jobs;

export declare namespace V1 {
  export {
    type V1ProcessResponse as V1ProcessResponse,
    type V1WebhookResponse as V1WebhookResponse,
    type V1ProcessParams as V1ProcessParams,
    type V1WebhookParams as V1WebhookParams,
  };

  export { Jobs as Jobs };
}
