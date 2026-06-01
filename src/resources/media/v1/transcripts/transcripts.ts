// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SearchAPI from './search';
import { Search } from './search';

export class Transcripts extends APIResource {
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
}

Transcripts.Search = Search;

export declare namespace Transcripts {
  export { Search as Search };
}
