// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FromVaultObjectAPI from './from-vault-object';
import { FromVaultObject } from './from-vault-object';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DocumentTemplates extends APIResource {
  fromVaultObject: FromVaultObjectAPI.FromVaultObject = new FromVaultObjectAPI.FromVaultObject(this._client);

  /**
   * Create document template upload
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/document-templates', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get document template
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/document-templates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update document template metadata
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/document-templates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List document templates
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/document-templates', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete document template
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/document-templates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Confirm document template upload
   */
  confirm(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/document-templates/${id}/confirm`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

DocumentTemplates.FromVaultObject = FromVaultObject;

export declare namespace DocumentTemplates {
  export { FromVaultObject as FromVaultObject };
}
