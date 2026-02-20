// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import {
  V1,
  V1FindParams,
  V1FindResponse,
  V1GetCitationsFromURLParams,
  V1GetCitationsFromURLResponse,
  V1GetCitationsParams,
  V1GetCitationsResponse,
  V1GetFullTextParams,
  V1GetFullTextResponse,
  V1ListJurisdictionsParams,
  V1ListJurisdictionsResponse,
  V1PatentSearchParams,
  V1PatentSearchResponse,
  V1ResearchParams,
  V1ResearchResponse,
  V1SimilarParams,
  V1SimilarResponse,
  V1TrademarkSearchParams,
  V1TrademarkSearchResponse,
  V1VerifyParams,
  V1VerifyResponse,
} from './v1';

export class Legal extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Legal.V1 = V1;

export declare namespace Legal {
  export {
    V1 as V1,
    type V1FindResponse as V1FindResponse,
    type V1GetCitationsResponse as V1GetCitationsResponse,
    type V1GetCitationsFromURLResponse as V1GetCitationsFromURLResponse,
    type V1GetFullTextResponse as V1GetFullTextResponse,
    type V1ListJurisdictionsResponse as V1ListJurisdictionsResponse,
    type V1PatentSearchResponse as V1PatentSearchResponse,
    type V1ResearchResponse as V1ResearchResponse,
    type V1SimilarResponse as V1SimilarResponse,
    type V1TrademarkSearchResponse as V1TrademarkSearchResponse,
    type V1VerifyResponse as V1VerifyResponse,
    type V1FindParams as V1FindParams,
    type V1GetCitationsParams as V1GetCitationsParams,
    type V1GetCitationsFromURLParams as V1GetCitationsFromURLParams,
    type V1GetFullTextParams as V1GetFullTextParams,
    type V1ListJurisdictionsParams as V1ListJurisdictionsParams,
    type V1PatentSearchParams as V1PatentSearchParams,
    type V1ResearchParams as V1ResearchParams,
    type V1SimilarParams as V1SimilarParams,
    type V1TrademarkSearchParams as V1TrademarkSearchParams,
    type V1VerifyParams as V1VerifyParams,
  };
}
