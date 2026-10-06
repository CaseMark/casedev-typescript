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
   * Browse public and organization skills using one authenticated catalog. Returns
   * metadata only; skill content is loaded separately.
   */
  catalog(
    query: SkillCatalogParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SkillCatalogResponse> {
    return this._client.get('/skills/catalog', { query, ...options });
  }

  /**
   * Export a skill as an installable filesystem tree for sandbox runtimes.
   * Authenticated org-scoped custom skills are resolved before curated skills.
   */
  export(
    slug: string,
    query: SkillExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SkillExportResponse> {
    return this._client.get(path`/skills/${slug}/export`, { query, ...options });
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

export interface ReadResponseFileBundle {
  path: string;

  role: 'file';

  root_slug: string;

  content_type?: string | null;

  /**
   * Encoding of the returned content field.
   */
  encoding?: 'utf8' | 'base64';
}

export interface ReadResponseRootBundle {
  files: Array<ReadResponseRootBundle.File>;

  role: 'root';
}

export namespace ReadResponseRootBundle {
  export interface File {
    path: string;

    slug: string;

    content_type?: string | null;

    /**
     * Encoding used by content when this companion slug is read.
     */
    encoding?: 'utf8' | 'base64';

    name?: string | null;
  }
}

export interface SkillCreateResponse {
  bundle?: unknown | null;

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
  bundle?: unknown | null;

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

export interface SkillCatalogResponse {
  count?: number;

  hasMore?: boolean;

  limit?: number;

  nextOffset?: number | null;

  offset?: number;

  query?: string;

  skills?: Array<SkillCatalogResponse.Skill>;

  total?: number;
}

export namespace SkillCatalogResponse {
  export interface Skill {
    description?: string;

    name?: string;

    slug?: string;

    source?: 'custom' | 'curated';

    tags?: Array<string>;
  }
}

export interface SkillExportResponse {
  files?: Array<SkillExportResponse.File>;

  root?: string;

  slug?: string;

  source?: 'custom' | 'curated';

  target?: string;
}

export namespace SkillExportResponse {
  export interface File {
    content?: string;

    content_type?: string;

    /**
     * Encoding of content. Binary files use canonical base64.
     */
    encoding?: 'utf8' | 'base64';

    path?: string;

    sha256?: string;

    size_bytes?: number;
  }
}

export interface SkillReadResponse {
  /**
   * Skill author
   */
  author_name?: string;

  /**
   * Skill bundle metadata for root skills and companion file rows
   */
  bundle?: ReadResponseRootBundle | ReadResponseFileBundle | null;

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
   * Optional bundled companion files installed alongside the skill as <slug>/<path>
   * in sandbox skill directories. The complete file set may contain at most 12 MiB
   * of decoded content.
   */
  files?: Array<SkillCreateParams.File>;

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

export namespace SkillCreateParams {
  export interface File {
    /**
     * UTF-8 text when encoding is utf8 (max 65,536 characters), or canonical base64
     * when encoding is base64 (max 262,144 decoded bytes).
     */
    content: string;

    /**
     * Relative path inside the skill directory. SKILL.md is reserved for the root
     * skill content.
     */
    path: string;

    contentType?: string;

    /**
     * How content is encoded. Omit for UTF-8 text files.
     */
    encoding?: 'utf8' | 'base64';

    metadata?: unknown;

    name?: string;

    summary?: string;

    tags?: Array<string>;
  }
}

export interface SkillUpdateParams {
  content?: string;

  /**
   * Reject with 409 if the skill changed since this version was read.
   */
  expectedVersion?: number;

  /**
   * Optional replacement companion file tree, limited to 12 MiB of decoded content.
   * Omit to leave existing bundled files unchanged; send [] to remove bundled files.
   */
  files?: Array<SkillUpdateParams.File> | null;

  metadata?: unknown;

  name?: string;

  /**
   * New slug (renames the skill)
   */
  slug?: string;

  summary?: string | null;

  tags?: Array<string>;
}

export namespace SkillUpdateParams {
  export interface File {
    /**
     * UTF-8 text when encoding is utf8 (max 65,536 characters), or canonical base64
     * when encoding is base64 (max 262,144 decoded bytes).
     */
    content: string;

    path: string;

    contentType?: string;

    /**
     * How content is encoded. Omit for UTF-8 text files.
     */
    encoding?: 'utf8' | 'base64';

    metadata?: unknown;

    name?: string;

    summary?: string;

    tags?: Array<string>;
  }
}

export interface SkillCatalogParams {
  /**
   * Maximum results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;

  /**
   * Optional text search
   */
  q?: string;

  /**
   * Optional source filter, applied after organization overrides and before
   * pagination. Omit to browse both sources.
   */
  source?: 'custom' | 'curated';

  /**
   * Optional tag filter
   */
  tag?: string;
}

export interface SkillExportParams {
  /**
   * Agent runtime skill directory convention to export for. Most callers should omit
   * this and pass skillSlugs when creating a runtime.
   */
  target?: string;
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
    type ReadResponseFileBundle as ReadResponseFileBundle,
    type ReadResponseRootBundle as ReadResponseRootBundle,
    type SkillCreateResponse as SkillCreateResponse,
    type SkillUpdateResponse as SkillUpdateResponse,
    type SkillDeleteResponse as SkillDeleteResponse,
    type SkillCatalogResponse as SkillCatalogResponse,
    type SkillExportResponse as SkillExportResponse,
    type SkillReadResponse as SkillReadResponse,
    type SkillResolveResponse as SkillResolveResponse,
    type SkillCreateParams as SkillCreateParams,
    type SkillUpdateParams as SkillUpdateParams,
    type SkillCatalogParams as SkillCatalogParams,
    type SkillExportParams as SkillExportParams,
    type SkillResolveParams as SkillResolveParams,
  };

  export {
    Custom as Custom,
    type CustomListResponse as CustomListResponse,
    type CustomListParams as CustomListParams,
  };
}
