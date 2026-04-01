// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Matter-native legal workspaces and orchestration primitives
 */
export class WorkItems extends APIResource {
  /**
   * Create an active work item on a matter.
   */
  create(id: string, body: WorkItemCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/matters/v1/${id}/work-items`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a single work item for a matter.
   */
  retrieve(workItemID: string, params: WorkItemRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.get(path`/matters/v1/${id}/work-items/${workItemID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a matter work item.
   */
  update(workItemID: string, params: WorkItemUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.patch(path`/matters/v1/${id}/work-items/${workItemID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List active work items for a matter.
   */
  list(
    id: string,
    query: WorkItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/matters/v1/${id}/work-items`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Approve, revise, block, or reassign a work item. Used by humans or agents to
   * move work items through their lifecycle.
   */
  decide(workItemID: string, params: WorkItemDecideParams, options?: RequestOptions): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.post(path`/matters/v1/${id}/work-items/${workItemID}/decision`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List execution attempts for a work item, including agent and run linkage.
   */
  listExecutions(
    workItemID: string,
    params: WorkItemListExecutionsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.get(path`/matters/v1/${id}/work-items/${workItemID}/executions`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WorkItemCreateParams {
  title: string;

  assignee_id?: string;

  description?: string;

  due_at?: string;

  exit_criteria?: Array<string>;

  instructions?: string;

  metadata?: { [key: string]: unknown };

  priority?: 'low' | 'normal' | 'high' | 'urgent';

  type?:
    | 'task'
    | 'deadline'
    | 'review'
    | 'filing'
    | 'communication'
    | 'research'
    | 'drafting'
    | 'collection'
    | 'intake';
}

export interface WorkItemRetrieveParams {
  id: string;
}

export interface WorkItemUpdateParams {
  /**
   * Path param
   */
  id: string;

  /**
   * Body param
   */
  assignee_id?: string | null;

  /**
   * Body param
   */
  completed_at?: string | null;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  due_at?: string | null;

  /**
   * Body param
   */
  exit_criteria?: Array<string>;

  /**
   * Body param
   */
  instructions?: string | null;

  /**
   * Body param
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param
   */
  priority?: 'low' | 'normal' | 'high' | 'urgent';

  /**
   * Body param
   */
  started_at?: string | null;

  /**
   * Body param
   */
  status?:
    | 'draft'
    | 'queued'
    | 'in_progress'
    | 'blocked'
    | 'in_review'
    | 'awaiting_human'
    | 'done'
    | 'canceled';

  /**
   * Body param
   */
  title?: string;

  /**
   * Body param
   */
  type?:
    | 'task'
    | 'deadline'
    | 'review'
    | 'filing'
    | 'communication'
    | 'research'
    | 'drafting'
    | 'collection'
    | 'intake';
}

export interface WorkItemListParams {
  assignee_id?: string;

  status?: string;
}

export interface WorkItemDecideParams {
  /**
   * Path param
   */
  id: string;

  /**
   * Body param
   */
  decision: 'approve' | 'revise' | 'block' | 'reassign';

  /**
   * Body param
   */
  agent_type_id?: string | null;

  /**
   * Body param
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param
   */
  reason?: string | null;
}

export interface WorkItemListExecutionsParams {
  id: string;
}

export declare namespace WorkItems {
  export {
    type WorkItemCreateParams as WorkItemCreateParams,
    type WorkItemRetrieveParams as WorkItemRetrieveParams,
    type WorkItemUpdateParams as WorkItemUpdateParams,
    type WorkItemListParams as WorkItemListParams,
    type WorkItemDecideParams as WorkItemDecideParams,
    type WorkItemListExecutionsParams as WorkItemListExecutionsParams,
  };
}
