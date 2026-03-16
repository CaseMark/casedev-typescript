// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomAPI from './custom';
import { Custom, CustomListParams, CustomListResponse } from './custom';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Search and read legal AI skills for agents
 */
export class Skills extends APIResource {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);

  /**
   * Create an org-scoped custom skill. The skill will be searchable via
   * /skills/resolve alongside curated skills.
   */
  create(body: SkillCreateParams, options?: RequestOptions): APIPromise<SkillCreateResponse> {
    return this._client.post('/skills', { body, ...options });
  }

  /**
   * Update an org-scoped custom skill by slug. Only provided fields are updated.
   * Version is auto-incremented.
   */
  update(slug: string, body: SkillUpdateParams, options?: RequestOptions): APIPromise<SkillUpdateResponse> {
    return this._client.put(path`/skills/${slug}`, { body, ...options });
  }

  /**
   * Soft-delete an org-scoped custom skill by slug. The skill will no longer appear
   * in search results.
   */
  delete(slug: string, options?: RequestOptions): APIPromise<SkillDeleteResponse> {
    return this._client.delete(path`/skills/${slug}`, options);
  }

  /**
   * Read the full content of a legal skill by its slug. Returns markdown content,
   * tags, and metadata.
   */
  read(slug: string, options?: RequestOptions): APIPromise<SkillReadResponse> {
    return this._client.get(path`/skills/${slug}`, options);
  }

  /**
   * Search the Legal Skills Store using hybrid search (text + tag + semantic).
   * Returns ranked results with relevance scores.
   */
  resolve(query: SkillResolveParams, options?: RequestOptions): APIPromise<SkillResolveResponse> {
    return this._client.get('/skills/resolve', { query, ...options });
  }
}

export interface SkillCreateResponse {
  content?: string;

  created_at?: string;

  metadata?: unknown;

  name?: string;

  slug?: string;

  summary?: string | null;

  tags?: Array<string>;

  version?: number;
}

export interface SkillUpdateResponse {
  content?: string;

  metadata?: unknown;

  name?: string;

  slug?: string;

  summary?: string | null;

  tags?: Array<string>;

  updated_at?: string;

  version?: number;
}

export interface SkillDeleteResponse {
  deleted?: boolean;

  slug?: string;
}

export interface SkillReadResponse {
  /**
   * Skill author
   */
  author_name?: string;

  /**
   * Full skill content in markdown
   */
  content?: string;

  /**
   * Skill license
   */
  license?: string;

  /**
   * Custom metadata (custom skills only)
   */
  metadata?: unknown;

  /**
   * Skill name
   */
  name?: string;

  /**
   * Unique skill identifier
   */
  slug?: string;

  /**
   * Skill source (authenticated requests only)
   */
  source?: 'curated' | 'custom';

  /**
   * Brief skill description
   */
  summary?: string;

  /**
   * Skill tags
   */
  tags?: Array<string>;

  /**
   * Skill version
   */
  version?: string;
}

export interface SkillResolveResponse {
  /**
   * Search methods used (text, tag, semantic)
   */
  methods_used?: Array<string>;

  results?: Array<SkillResolveResponse.Result>;
}

export namespace SkillResolveResponse {
  export interface Result {
    /**
     * Skill name
     */
    name?: string;

    /**
     * Relevance score
     */
    score?: number;

    /**
     * Unique skill identifier
     */
    slug?: string;

    /**
     * Whether the skill is curated or org-custom
     */
    source?: 'curated' | 'custom';

    /**
     * Brief skill description
     */
    summary?: string;

    /**
     * Skill tags
     */
    tags?: Array<string>;
  }
}

export interface SkillCreateParams {
  /**
   * Full skill content in markdown
   */
  content: string;

  /**
   * Skill name
   */
  name: string;

  /**
   * Arbitrary metadata (author, license, etc.)
   */
  metadata?: unknown;

  /**
   * URL-safe slug. Auto-generated from name if omitted.
   */
  slug?: string;

  /**
   * Brief description (1-2 sentences)
   */
  summary?: string;

  /**
   * Tags for categorization and search boosting
   */
  tags?: Array<string>;
}

export interface SkillUpdateParams {
  content?: string;

  metadata?: unknown;

  name?: string;

  /**
   * New slug (renames the skill)
   */
  slug?: string;

  summary?: string | null;

  tags?: Array<string>;
}

export interface SkillResolveParams {
  /**
   * Search query string
   */
  q: string;

  /**
   * Maximum number of results to return (1-20)
   */
  limit?: number;
}

Skills.Custom = Custom;

export declare namespace Skills {
  export {
    type SkillCreateResponse as SkillCreateResponse,
    type SkillUpdateResponse as SkillUpdateResponse,
    type SkillDeleteResponse as SkillDeleteResponse,
    type SkillReadResponse as SkillReadResponse,
    type SkillResolveResponse as SkillResolveResponse,
    type SkillCreateParams as SkillCreateParams,
    type SkillUpdateParams as SkillUpdateParams,
    type SkillResolveParams as SkillResolveParams,
  };

  export {
    Custom as Custom,
    type CustomListResponse as CustomListResponse,
    type CustomListParams as CustomListParams,
  };
}
