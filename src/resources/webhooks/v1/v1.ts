// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveriesAPI from './deliveries';
import { Deliveries, DeliveryListParams, DeliveryReplayParams } from './deliveries';
import * as EndpointsAPI from './endpoints';
import {
  EndpointCreateParams,
  EndpointListParams,
  EndpointRotateSecretParams,
  EndpointTestParams,
  EndpointUpdateParams,
  Endpoints,
} from './endpoints';
import * as EventTypesAPI from './event-types';
import { EventTypes } from './event-types';

export class V1 extends APIResource {
  endpoints: EndpointsAPI.Endpoints = new EndpointsAPI.Endpoints(this._client);
  deliveries: DeliveriesAPI.Deliveries = new DeliveriesAPI.Deliveries(this._client);
  eventTypes: EventTypesAPI.EventTypes = new EventTypesAPI.EventTypes(this._client);
}

V1.Endpoints = Endpoints;
V1.Deliveries = Deliveries;
V1.EventTypes = EventTypes;

export declare namespace V1 {
  export {
    Endpoints as Endpoints,
    type EndpointCreateParams as EndpointCreateParams,
    type EndpointUpdateParams as EndpointUpdateParams,
    type EndpointListParams as EndpointListParams,
    type EndpointRotateSecretParams as EndpointRotateSecretParams,
    type EndpointTestParams as EndpointTestParams,
  };

  export {
    Deliveries as Deliveries,
    type DeliveryListParams as DeliveryListParams,
    type DeliveryReplayParams as DeliveryReplayParams,
  };

  export { EventTypes as EventTypes };
}
