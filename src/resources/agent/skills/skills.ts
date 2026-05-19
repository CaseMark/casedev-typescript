// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NamespacesAPI from './namespaces';
import { NamespaceCreateParams, NamespacePublishParams, Namespaces } from './namespaces';

export class Skills extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

Skills.Namespaces = Namespaces;

export declare namespace Skills {
  export {
    Namespaces as Namespaces,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespacePublishParams as NamespacePublishParams,
  };
}
