// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Casedev } from '../client';

export abstract class APIResource {
  protected _client: Casedev;

  constructor(client: Casedev) {
    this._client = client;
  }
}
