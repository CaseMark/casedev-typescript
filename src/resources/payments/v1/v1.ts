// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import {
  AccountCreateParams,
  AccountCreateResponse,
  AccountGetBalanceResponse,
  AccountGetLedgerParams,
  AccountGetLedgerResponse,
  AccountListParams,
  AccountListResponse,
  AccountUpdateParams,
  Accounts,
} from './accounts';
import * as ChargesAPI from './charges';
import { ChargeCreateParams, ChargeListParams, ChargeRefundParams, Charges } from './charges';
import * as HoldsAPI from './holds';
import { HoldApproveParams, HoldCreateParams, HoldListParams, Holds } from './holds';
import * as LedgerAPI from './ledger';
import { Ledger, LedgerGetParams, LedgerListTransactionsParams } from './ledger';
import * as PartiesAPI from './parties';
import { Parties, PartyCreateParams, PartyListParams, PartyUpdateParams } from './parties';
import * as PayoutsAPI from './payouts';
import { PayoutCreateParams, PayoutListParams, Payouts } from './payouts';
import * as TransfersAPI from './transfers';
import { TransferCreateParams, TransferListParams, Transfers } from './transfers';

export class V1 extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  charges: ChargesAPI.Charges = new ChargesAPI.Charges(this._client);
  holds: HoldsAPI.Holds = new HoldsAPI.Holds(this._client);
  ledger: LedgerAPI.Ledger = new LedgerAPI.Ledger(this._client);
  parties: PartiesAPI.Parties = new PartiesAPI.Parties(this._client);
  payouts: PayoutsAPI.Payouts = new PayoutsAPI.Payouts(this._client);
  transfers: TransfersAPI.Transfers = new TransfersAPI.Transfers(this._client);
}

V1.Accounts = Accounts;
V1.Charges = Charges;
V1.Holds = Holds;
V1.Ledger = Ledger;
V1.Parties = Parties;
V1.Payouts = Payouts;
V1.Transfers = Transfers;

export declare namespace V1 {
  export {
    Accounts as Accounts,
    type AccountCreateResponse as AccountCreateResponse,
    type AccountListResponse as AccountListResponse,
    type AccountGetBalanceResponse as AccountGetBalanceResponse,
    type AccountGetLedgerResponse as AccountGetLedgerResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountGetLedgerParams as AccountGetLedgerParams,
  };

  export {
    Charges as Charges,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeListParams as ChargeListParams,
    type ChargeRefundParams as ChargeRefundParams,
  };

  export {
    Holds as Holds,
    type HoldCreateParams as HoldCreateParams,
    type HoldListParams as HoldListParams,
    type HoldApproveParams as HoldApproveParams,
  };

  export {
    Ledger as Ledger,
    type LedgerGetParams as LedgerGetParams,
    type LedgerListTransactionsParams as LedgerListTransactionsParams,
  };

  export {
    Parties as Parties,
    type PartyCreateParams as PartyCreateParams,
    type PartyUpdateParams as PartyUpdateParams,
    type PartyListParams as PartyListParams,
  };

  export {
    Payouts as Payouts,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutListParams as PayoutListParams,
  };

  export {
    Transfers as Transfers,
    type TransferCreateParams as TransferCreateParams,
    type TransferListParams as TransferListParams,
  };
}
