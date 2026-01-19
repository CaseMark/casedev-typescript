// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import {
  V1,
  V1AnswerParams,
  V1AnswerResponse,
  V1ContentsParams,
  V1ContentsResponse,
  V1ResearchParams,
  V1ResearchResponse,
  V1RetrieveResearchParams,
  V1RetrieveResearchResponse,
  V1SearchParams,
  V1SearchResponse,
  V1SimilarParams,
  V1SimilarResponse,
} from './v1';

export class Search extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Search.V1 = V1;

export declare namespace Search {
  export {
    V1 as V1,
    type V1AnswerResponse as V1AnswerResponse,
    type V1ContentsResponse as V1ContentsResponse,
    type V1ResearchResponse as V1ResearchResponse,
    type V1RetrieveResearchResponse as V1RetrieveResearchResponse,
    type V1SearchResponse as V1SearchResponse,
    type V1SimilarResponse as V1SimilarResponse,
    type V1AnswerParams as V1AnswerParams,
    type V1ContentsParams as V1ContentsParams,
    type V1ResearchParams as V1ResearchParams,
    type V1RetrieveResearchParams as V1RetrieveResearchParams,
    type V1SearchParams as V1SearchParams,
    type V1SimilarParams as V1SimilarParams,
  };
}
