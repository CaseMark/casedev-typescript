// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class System extends APIResource {
  /**
   * Returns the public Case.dev services catalog derived from
   * docs.case.dev/services. This endpoint is unauthenticated and intended for
   * discovery surfaces such as the case.dev homepage.
   */
  listServices(options?: RequestOptions): APIPromise<SystemListServicesResponse> {
    return this._client.get('/services', options);
  }
}

export interface SystemListServicesResponse {
  services: Array<SystemListServicesResponse.Service>;
}

export namespace SystemListServicesResponse {
  export interface Service {
    id: string;

    description: string;

    href: string;

    icon: string;

    name: string;

    order: number;
  }
}

export declare namespace System {
  export { type SystemListServicesResponse as SystemListServicesResponse };
}
