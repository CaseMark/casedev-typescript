// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create, manage, and execute AI agents with tool access, sandbox environments, and async run workflows
 */
export class Namespaces extends APIResource {
  /**
   * Create a private skill namespace owned by the authenticated org and receive a
   * one-time bearer token used by the case-skills publisher.
   */
  create(body: NamespaceCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/agent/skills/namespaces', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read skill namespace
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/agent/skills/namespaces/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all active skill namespaces owned by the authenticated organization.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/agent/skills/namespaces', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete skill namespace
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/agent/skills/namespaces/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upload a tree of skill files for the namespace. Authenticated by the namespace
   * bearer token. Atomic at the version-bump level: a partial upload leaves the
   * namespace pinned to the previous version.
   */
  publish(id: string, body: NamespacePublishParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/agent/skills/namespaces/${id}/publish`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the active version's file manifest with short-lived presigned S3 URLs.
   * Sandboxes use this to materialize the tree at /workspace/.agents/skills/ before
   * opencode boots.
   */
  pull(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/agent/skills/namespaces/${id}/pull`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rotate skill namespace token
   */
  rotateToken(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/agent/skills/namespaces/${id}/rotate-token`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface NamespaceCreateParams {
  /**
   * URL-safe slug, e.g. "curi" or "client-firm-abc". Lowercase alphanumeric with
   * single hyphens, 2-64 chars.
   */
  namespaceId: string;

  description?: string | null;

  label?: string | null;

  metadata?: unknown | null;
}

export interface NamespacePublishParams {
  files: Array<NamespacePublishParams.File>;
}

export namespace NamespacePublishParams {
  export interface File {
    content: string;

    encoding: 'utf8' | 'base64';

    path: string;

    contentType?: string | null;
  }
}

export declare namespace Namespaces {
  export {
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespacePublishParams as NamespacePublishParams,
  };
}
