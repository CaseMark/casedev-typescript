// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Skills extends APIResource {
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
   * Skill name
   */
  name?: string;

  /**
   * Unique skill identifier
   */
  slug?: string;

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
     * Brief skill description
     */
    summary?: string;

    /**
     * Skill tags
     */
    tags?: Array<string>;
  }
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

export declare namespace Skills {
  export {
    type SkillReadResponse as SkillReadResponse,
    type SkillResolveResponse as SkillResolveResponse,
    type SkillResolveParams as SkillResolveParams,
  };
}
