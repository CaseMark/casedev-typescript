// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RetrieveAPI from './retrieve';
import { Retrieve, RetrieveCreateParams, RetrieveCreateResponse } from './retrieve';
import * as SearchAPI from './search';
import { Search } from './search';

export class Transcripts extends APIResource {
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  retrieve: RetrieveAPI.Retrieve = new RetrieveAPI.Retrieve(this._client);
}

Transcripts.Search = Search;
Transcripts.Retrieve = Retrieve;

export declare namespace Transcripts {
  export { Search as Search };

  export {
    Retrieve as Retrieve,
    type RetrieveCreateResponse as RetrieveCreateResponse,
    type RetrieveCreateParams as RetrieveCreateParams,
  };
}
