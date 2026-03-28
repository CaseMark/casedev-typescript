// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import { SubscriptionCreateParams, SubscriptionDeleteParams, Subscriptions } from './subscriptions';

export class Events extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Events.Subscriptions = Subscriptions;

export declare namespace Events {
  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
