// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Workflows extends APIResource {
  /**
   * Get current deployment workflow status and accumulated events
   */
  getStatus(id: string, query: WorkflowGetStatusParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/applications/v1/workflows/${id}/status`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WorkflowGetStatusParams {
  /**
   * Project ID (for authorization)
   */
  projectId: string;
}

export declare namespace Workflows {
  export { type WorkflowGetStatusParams as WorkflowGetStatusParams };
}
