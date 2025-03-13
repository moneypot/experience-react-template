/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) and, if it has a timezone, [RFC
   * 3339](https://datatracker.ietf.org/doc/html/rfc3339) standards. Input values
   * that do not conform to both ISO 8601 and RFC 3339 may be coerced, which may lead
   * to unexpected results.
   */
  Datetime: { input: any; output: any; }
  /** Represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: any; output: any; }
};

export type Fortune = {
  __typename?: 'Fortune';
  id: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type HubAddCasinoInput = {
  apiKey: Scalars['String']['input'];
  baseUrl: Scalars['String']['input'];
  graphqlUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type HubAddCasinoPayload = {
  __typename?: 'HubAddCasinoPayload';
  casino?: Maybe<HubCasino>;
  query?: Maybe<Query>;
};

export type HubApiKey = {
  __typename?: 'HubApiKey';
  id: Scalars['UUID']['output'];
  key: Scalars['UUID']['output'];
  lastUsedAt?: Maybe<Scalars['Datetime']['output']>;
  revokedAt?: Maybe<Scalars['Datetime']['output']>;
};

/**
 * A condition to be used against `HubApiKey` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HubApiKeyCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `key` field. */
  key?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubApiKey` values. */
export type HubApiKeyConnection = {
  __typename?: 'HubApiKeyConnection';
  /** A list of edges which contains the `HubApiKey` and cursor to aid in pagination. */
  edges: Array<Maybe<HubApiKeyEdge>>;
  /** A list of `HubApiKey` objects. */
  nodes: Array<Maybe<HubApiKey>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubApiKey` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubApiKey` edge in the connection. */
export type HubApiKeyEdge = {
  __typename?: 'HubApiKeyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubApiKey` at the end of the edge. */
  node?: Maybe<HubApiKey>;
};

/** Methods to use when ordering `HubApiKey`. */
export enum HubApiKeyOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type HubAuthenticateInput = {
  casinoBaseUrl: Scalars['String']['input'];
  userToken: Scalars['String']['input'];
};

export type HubAuthenticatePayload = {
  __typename?: 'HubAuthenticatePayload';
  query?: Maybe<Query>;
  success?: Maybe<HubAuthenticateSuccess>;
};

export type HubAuthenticateSuccess = {
  __typename?: 'HubAuthenticateSuccess';
  experienceId: Scalars['UUID']['output'];
  sessionKey: Scalars['UUID']['output'];
  uname: Scalars['String']['output'];
  userId: Scalars['UUID']['output'];
};

export type HubBalance = {
  __typename?: 'HubBalance';
  amount: Scalars['Float']['output'];
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubBalance`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubCurrency` that is related to this `HubBalance`. */
  hubCurrencyByCurrencyKeyAndCasinoId?: Maybe<HubCurrency>;
  /** Reads a single `HubExperience` that is related to this `HubBalance`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HubBalance`. */
  hubUserByUserId?: Maybe<HubUser>;
  userId: Scalars['UUID']['output'];
};

export type HubBalanceAlertPayload = {
  __typename?: 'HubBalanceAlertPayload';
  currencyKey?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `HubBalance` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HubBalanceCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubBalance` values. */
export type HubBalanceConnection = {
  __typename?: 'HubBalanceConnection';
  /** A list of edges which contains the `HubBalance` and cursor to aid in pagination. */
  edges: Array<Maybe<HubBalanceEdge>>;
  /** A list of `HubBalance` objects. */
  nodes: Array<Maybe<HubBalance>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubBalance` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubBalance` edge in the connection. */
export type HubBalanceEdge = {
  __typename?: 'HubBalanceEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubBalance` at the end of the edge. */
  node?: Maybe<HubBalance>;
};

/** Methods to use when ordering `HubBalance`. */
export enum HubBalanceOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type HubBankroll = {
  __typename?: 'HubBankroll';
  amount: Scalars['Float']['output'];
  bets: Scalars['BigInt']['output'];
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  expectedValue: Scalars['Float']['output'];
  /** Reads a single `HubCasino` that is related to this `HubBankroll`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubCurrency` that is related to this `HubBankroll`. */
  hubCurrencyByCurrencyKeyAndCasinoId?: Maybe<HubCurrency>;
  id: Scalars['UUID']['output'];
  wagered: Scalars['Float']['output'];
};

/**
 * A condition to be used against `HubBankroll` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HubBankrollCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubBankroll` values. */
export type HubBankrollConnection = {
  __typename?: 'HubBankrollConnection';
  /** A list of edges which contains the `HubBankroll` and cursor to aid in pagination. */
  edges: Array<Maybe<HubBankrollEdge>>;
  /** A list of `HubBankroll` objects. */
  nodes: Array<Maybe<HubBankroll>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubBankroll` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubBankroll` edge in the connection. */
export type HubBankrollEdge = {
  __typename?: 'HubBankrollEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubBankroll` at the end of the edge. */
  node?: Maybe<HubBankroll>;
};

/** Methods to use when ordering `HubBankroll`. */
export enum HubBankrollOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `HubBankroll`. Fields that are set will be updated. */
export type HubBankrollPatch = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  bets?: InputMaybe<Scalars['BigInt']['input']>;
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  currencyKey?: InputMaybe<Scalars['String']['input']>;
  expectedValue?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  wagered?: InputMaybe<Scalars['Float']['input']>;
};

export type HubCasino = {
  __typename?: 'HubCasino';
  baseUrl: Scalars['String']['output'];
  graphqlUrl: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `HubBalance`. */
  hubBalancesByCasinoId: HubBalanceConnection;
  /** Reads and enables pagination through a set of `HubBankroll`. */
  hubBankrollsByCasinoId: HubBankrollConnection;
  /** Reads a single `HubCasinoSecret` that is related to this `HubCasino`. */
  hubCasinoSecretById?: Maybe<HubCasinoSecret>;
  /** Reads and enables pagination through a set of `HubCurrency`. */
  hubCurrenciesByCasinoId: HubCurrencyConnection;
  /** Reads and enables pagination through a set of `HubDeposit`. */
  hubDepositsByCasinoId: HubDepositConnection;
  /** Reads and enables pagination through a set of `HubExperience`. */
  hubExperiencesByCasinoId: HubExperienceConnection;
  /** Reads and enables pagination through a set of `HubFaucetClaim`. */
  hubFaucetClaimsByCasinoId: HubFaucetClaimConnection;
  /** Reads a single `HubJwkSet` that is related to this `HubCasino`. */
  hubJwkSetByCasinoId?: Maybe<HubJwkSet>;
  /** Reads and enables pagination through a set of `HubJwkSetSnapshot`. */
  hubJwkSetSnapshotsByCasinoId: HubJwkSetSnapshotConnection;
  /** Reads and enables pagination through a set of `HubSession`. */
  hubSessionsByCasinoId: HubSessionConnection;
  /** Reads and enables pagination through a set of `HubUser`. */
  hubUsersByCasinoId: HubUserConnection;
  /** Reads and enables pagination through a set of `HubWithdrawalRequest`. */
  hubWithdrawalRequestsByCasinoId: HubWithdrawalRequestConnection;
  /** Reads and enables pagination through a set of `HubWithdrawal`. */
  hubWithdrawalsByCasinoId: HubWithdrawalConnection;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};


export type HubCasinoHubBalancesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubBalanceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubBalanceOrderBy>>;
};


export type HubCasinoHubBankrollsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubBankrollCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubBankrollOrderBy>>;
};


export type HubCasinoHubCurrenciesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubCurrencyCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubCurrencyOrderBy>>;
};


export type HubCasinoHubDepositsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubDepositCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubDepositOrderBy>>;
};


export type HubCasinoHubExperiencesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubExperienceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubExperienceOrderBy>>;
};


export type HubCasinoHubFaucetClaimsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubFaucetClaimCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubFaucetClaimOrderBy>>;
};


export type HubCasinoHubJwkSetSnapshotsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubJwkSetSnapshotCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubJwkSetSnapshotOrderBy>>;
};


export type HubCasinoHubSessionsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubSessionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubSessionOrderBy>>;
};


export type HubCasinoHubUsersByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubUserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubUserOrderBy>>;
};


export type HubCasinoHubWithdrawalRequestsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubWithdrawalRequestCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubWithdrawalRequestOrderBy>>;
};


export type HubCasinoHubWithdrawalsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubWithdrawalCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubWithdrawalOrderBy>>;
};

/**
 * A condition to be used against `HubCasino` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HubCasinoCondition = {
  /** Checks for equality with the object’s `baseUrl` field. */
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `graphqlUrl` field. */
  graphqlUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubCasino` values. */
export type HubCasinoConnection = {
  __typename?: 'HubCasinoConnection';
  /** A list of edges which contains the `HubCasino` and cursor to aid in pagination. */
  edges: Array<Maybe<HubCasinoEdge>>;
  /** A list of `HubCasino` objects. */
  nodes: Array<Maybe<HubCasino>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubCasino` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubCasino` edge in the connection. */
export type HubCasinoEdge = {
  __typename?: 'HubCasinoEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubCasino` at the end of the edge. */
  node?: Maybe<HubCasino>;
};

/** Methods to use when ordering `HubCasino`. */
export enum HubCasinoOrderBy {
  BaseUrlAsc = 'BASE_URL_ASC',
  BaseUrlDesc = 'BASE_URL_DESC',
  GraphqlUrlAsc = 'GRAPHQL_URL_ASC',
  GraphqlUrlDesc = 'GRAPHQL_URL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `HubCasino`. Fields that are set will be updated. */
export type HubCasinoPatch = {
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  graphqlUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type HubCasinoSecret = {
  __typename?: 'HubCasinoSecret';
  apiKey: Scalars['UUID']['output'];
  controllerId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubCasinoSecret`. */
  hubCasinoById?: Maybe<HubCasino>;
  id: Scalars['UUID']['output'];
};

export type HubClaimFaucetPayload = {
  __typename?: 'HubClaimFaucetPayload';
  query?: Maybe<Query>;
  success: Scalars['Boolean']['output'];
};

export type HubCurrency = {
  __typename?: 'HubCurrency';
  casinoId: Scalars['UUID']['output'];
  displayUnitName: Scalars['String']['output'];
  displayUnitScale: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `HubBankroll`. */
  hubBankrollsByCurrencyKeyAndCasinoId: HubBankrollConnection;
  /** Reads a single `HubCasino` that is related to this `HubCurrency`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  key: Scalars['String']['output'];
};


export type HubCurrencyHubBankrollsByCurrencyKeyAndCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubBankrollCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubBankrollOrderBy>>;
};

/**
 * A condition to be used against `HubCurrency` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HubCurrencyCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `key` field. */
  key?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `HubCurrency` values. */
export type HubCurrencyConnection = {
  __typename?: 'HubCurrencyConnection';
  /** A list of edges which contains the `HubCurrency` and cursor to aid in pagination. */
  edges: Array<Maybe<HubCurrencyEdge>>;
  /** A list of `HubCurrency` objects. */
  nodes: Array<Maybe<HubCurrency>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubCurrency` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubCurrency` edge in the connection. */
export type HubCurrencyEdge = {
  __typename?: 'HubCurrencyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubCurrency` at the end of the edge. */
  node?: Maybe<HubCurrency>;
};

/** Methods to use when ordering `HubCurrency`. */
export enum HubCurrencyOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type HubDeposit = {
  __typename?: 'HubDeposit';
  amount: Scalars['Float']['output'];
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubDeposit`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubCurrency` that is related to this `HubDeposit`. */
  hubCurrencyByCurrencyKeyAndCasinoId?: Maybe<HubCurrency>;
  /** Reads a single `HubExperience` that is related to this `HubDeposit`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HubDeposit`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  mpTransferId: Scalars['String']['output'];
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `HubDeposit` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HubDepositCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubDeposit` values. */
export type HubDepositConnection = {
  __typename?: 'HubDepositConnection';
  /** A list of edges which contains the `HubDeposit` and cursor to aid in pagination. */
  edges: Array<Maybe<HubDepositEdge>>;
  /** A list of `HubDeposit` objects. */
  nodes: Array<Maybe<HubDeposit>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubDeposit` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubDeposit` edge in the connection. */
export type HubDepositEdge = {
  __typename?: 'HubDepositEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubDeposit` at the end of the edge. */
  node?: Maybe<HubDeposit>;
};

/** Methods to use when ordering `HubDeposit`. */
export enum HubDepositOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type HubExperience = {
  __typename?: 'HubExperience';
  casinoId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `HubBalance`. */
  hubBalancesByExperienceId: HubBalanceConnection;
  /** Reads a single `HubCasino` that is related to this `HubExperience`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads and enables pagination through a set of `HubDeposit`. */
  hubDepositsByExperienceId: HubDepositConnection;
  /** Reads and enables pagination through a set of `HubFaucetClaim`. */
  hubFaucetClaimsByExperienceId: HubFaucetClaimConnection;
  /** Reads and enables pagination through a set of `HubSession`. */
  hubSessionsByExperienceId: HubSessionConnection;
  /** Reads and enables pagination through a set of `HubWithdrawalRequest`. */
  hubWithdrawalRequestsByExperienceId: HubWithdrawalRequestConnection;
  /** Reads and enables pagination through a set of `HubWithdrawal`. */
  hubWithdrawalsByExperienceId: HubWithdrawalConnection;
  id: Scalars['UUID']['output'];
  mpExperienceId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Todo`. */
  todosByExperienceId: TodoConnection;
};


export type HubExperienceHubBalancesByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubBalanceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubBalanceOrderBy>>;
};


export type HubExperienceHubDepositsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubDepositCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubDepositOrderBy>>;
};


export type HubExperienceHubFaucetClaimsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubFaucetClaimCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubFaucetClaimOrderBy>>;
};


export type HubExperienceHubSessionsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubSessionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubSessionOrderBy>>;
};


export type HubExperienceHubWithdrawalRequestsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubWithdrawalRequestCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubWithdrawalRequestOrderBy>>;
};


export type HubExperienceHubWithdrawalsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubWithdrawalCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubWithdrawalOrderBy>>;
};


export type HubExperienceTodosByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TodoCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TodoOrderBy>>;
};

/**
 * A condition to be used against `HubExperience` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type HubExperienceCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `mpExperienceId` field. */
  mpExperienceId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubExperience` values. */
export type HubExperienceConnection = {
  __typename?: 'HubExperienceConnection';
  /** A list of edges which contains the `HubExperience` and cursor to aid in pagination. */
  edges: Array<Maybe<HubExperienceEdge>>;
  /** A list of `HubExperience` objects. */
  nodes: Array<Maybe<HubExperience>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubExperience` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubExperience` edge in the connection. */
export type HubExperienceEdge = {
  __typename?: 'HubExperienceEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubExperience` at the end of the edge. */
  node?: Maybe<HubExperience>;
};

/** Methods to use when ordering `HubExperience`. */
export enum HubExperienceOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MpExperienceIdAsc = 'MP_EXPERIENCE_ID_ASC',
  MpExperienceIdDesc = 'MP_EXPERIENCE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type HubFaucetClaim = {
  __typename?: 'HubFaucetClaim';
  amount: Scalars['Float']['output'];
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubFaucetClaim`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubCurrency` that is related to this `HubFaucetClaim`. */
  hubCurrencyByCurrencyKeyAndCasinoId?: Maybe<HubCurrency>;
  /** Reads a single `HubExperience` that is related to this `HubFaucetClaim`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HubFaucetClaim`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `HubFaucetClaim` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type HubFaucetClaimCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `currencyKey` field. */
  currencyKey?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubFaucetClaim` values. */
export type HubFaucetClaimConnection = {
  __typename?: 'HubFaucetClaimConnection';
  /** A list of edges which contains the `HubFaucetClaim` and cursor to aid in pagination. */
  edges: Array<Maybe<HubFaucetClaimEdge>>;
  /** A list of `HubFaucetClaim` objects. */
  nodes: Array<Maybe<HubFaucetClaim>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubFaucetClaim` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubFaucetClaim` edge in the connection. */
export type HubFaucetClaimEdge = {
  __typename?: 'HubFaucetClaimEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubFaucetClaim` at the end of the edge. */
  node?: Maybe<HubFaucetClaim>;
};

/** Methods to use when ordering `HubFaucetClaim`. */
export enum HubFaucetClaimOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  CurrencyKeyAsc = 'CURRENCY_KEY_ASC',
  CurrencyKeyDesc = 'CURRENCY_KEY_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type HubJwkSet = {
  __typename?: 'HubJwkSet';
  casinoId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubJwkSet`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  jwks: Scalars['JSON']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

export type HubJwkSetSnapshot = {
  __typename?: 'HubJwkSetSnapshot';
  casinoId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubJwkSetSnapshot`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  id: Scalars['UUID']['output'];
  jwks: Scalars['JSON']['output'];
};

/**
 * A condition to be used against `HubJwkSetSnapshot` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type HubJwkSetSnapshotCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubJwkSetSnapshot` values. */
export type HubJwkSetSnapshotConnection = {
  __typename?: 'HubJwkSetSnapshotConnection';
  /** A list of edges which contains the `HubJwkSetSnapshot` and cursor to aid in pagination. */
  edges: Array<Maybe<HubJwkSetSnapshotEdge>>;
  /** A list of `HubJwkSetSnapshot` objects. */
  nodes: Array<Maybe<HubJwkSetSnapshot>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubJwkSetSnapshot` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubJwkSetSnapshot` edge in the connection. */
export type HubJwkSetSnapshotEdge = {
  __typename?: 'HubJwkSetSnapshotEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubJwkSetSnapshot` at the end of the edge. */
  node?: Maybe<HubJwkSetSnapshot>;
};

/** Methods to use when ordering `HubJwkSetSnapshot`. */
export enum HubJwkSetSnapshotOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type HubSession = {
  __typename?: 'HubSession';
  casinoId: Scalars['UUID']['output'];
  experienceId: Scalars['UUID']['output'];
  expiredAt: Scalars['Datetime']['output'];
  /** Reads a single `HubCasino` that is related to this `HubSession`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubExperience` that is related to this `HubSession`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HubSession`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  key: Scalars['UUID']['output'];
  userId: Scalars['UUID']['output'];
  userToken: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `HubSession` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HubSessionCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `key` field. */
  key?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userToken` field. */
  userToken?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubSession` values. */
export type HubSessionConnection = {
  __typename?: 'HubSessionConnection';
  /** A list of edges which contains the `HubSession` and cursor to aid in pagination. */
  edges: Array<Maybe<HubSessionEdge>>;
  /** A list of `HubSession` objects. */
  nodes: Array<Maybe<HubSession>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubSession` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubSession` edge in the connection. */
export type HubSessionEdge = {
  __typename?: 'HubSessionEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubSession` at the end of the edge. */
  node?: Maybe<HubSession>;
};

/** Methods to use when ordering `HubSession`. */
export enum HubSessionOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export enum HubTransferStatusKind {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Unclaimed = 'UNCLAIMED'
}

export type HubUser = {
  __typename?: 'HubUser';
  balanceByCurrency?: Maybe<HubBalance>;
  casinoId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `HubBalance`. */
  hubBalancesByUserId: HubBalanceConnection;
  /** Reads a single `HubCasino` that is related to this `HubUser`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads and enables pagination through a set of `HubDeposit`. */
  hubDepositsByUserId: HubDepositConnection;
  /** Reads and enables pagination through a set of `HubFaucetClaim`. */
  hubFaucetClaimsByUserId: HubFaucetClaimConnection;
  /** Reads and enables pagination through a set of `HubSession`. */
  hubSessionsByUserId: HubSessionConnection;
  /** Reads and enables pagination through a set of `HubWithdrawalRequest`. */
  hubWithdrawalRequestsByUserId: HubWithdrawalRequestConnection;
  /** Reads and enables pagination through a set of `HubWithdrawal`. */
  hubWithdrawalsByUserId: HubWithdrawalConnection;
  id: Scalars['UUID']['output'];
  mpUserId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Todo`. */
  todosByUserId: TodoConnection;
  uname: Scalars['String']['output'];
};


export type HubUserBalanceByCurrencyArgs = {
  currency: Scalars['String']['input'];
};


export type HubUserHubBalancesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubBalanceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubBalanceOrderBy>>;
};


export type HubUserHubDepositsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubDepositCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubDepositOrderBy>>;
};


export type HubUserHubFaucetClaimsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubFaucetClaimCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubFaucetClaimOrderBy>>;
};


export type HubUserHubSessionsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubSessionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubSessionOrderBy>>;
};


export type HubUserHubWithdrawalRequestsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubWithdrawalRequestCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubWithdrawalRequestOrderBy>>;
};


export type HubUserHubWithdrawalsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubWithdrawalCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubWithdrawalOrderBy>>;
};


export type HubUserTodosByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TodoCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TodoOrderBy>>;
};

/** A condition to be used against `HubUser` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type HubUserCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubUser` values. */
export type HubUserConnection = {
  __typename?: 'HubUserConnection';
  /** A list of edges which contains the `HubUser` and cursor to aid in pagination. */
  edges: Array<Maybe<HubUserEdge>>;
  /** A list of `HubUser` objects. */
  nodes: Array<Maybe<HubUser>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubUser` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubUser` edge in the connection. */
export type HubUserEdge = {
  __typename?: 'HubUserEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubUser` at the end of the edge. */
  node?: Maybe<HubUser>;
};

/** Methods to use when ordering `HubUser`. */
export enum HubUserOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type HubWithdrawInput = {
  amount: Scalars['Int']['input'];
  currency: Scalars['String']['input'];
};

export type HubWithdrawPayload = {
  __typename?: 'HubWithdrawPayload';
  query?: Maybe<Query>;
  withdrawalRequest: HubWithdrawalRequest;
};

export type HubWithdrawal = {
  __typename?: 'HubWithdrawal';
  amount: Scalars['Float']['output'];
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubWithdrawal`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubCurrency` that is related to this `HubWithdrawal`. */
  hubCurrencyByCurrencyKeyAndCasinoId?: Maybe<HubCurrency>;
  /** Reads a single `HubExperience` that is related to this `HubWithdrawal`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HubWithdrawal`. */
  hubUserByUserId?: Maybe<HubUser>;
  /** Reads a single `HubWithdrawalRequest` that is related to this `HubWithdrawal`. */
  hubWithdrawalRequestByWithdrawalRequestId?: Maybe<HubWithdrawalRequest>;
  id: Scalars['UUID']['output'];
  mpTransferId: Scalars['String']['output'];
  status: HubTransferStatusKind;
  statusAt: Scalars['Datetime']['output'];
  userId: Scalars['UUID']['output'];
  withdrawalRequestId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `HubWithdrawal` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type HubWithdrawalCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `withdrawalRequestId` field. */
  withdrawalRequestId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubWithdrawal` values. */
export type HubWithdrawalConnection = {
  __typename?: 'HubWithdrawalConnection';
  /** A list of edges which contains the `HubWithdrawal` and cursor to aid in pagination. */
  edges: Array<Maybe<HubWithdrawalEdge>>;
  /** A list of `HubWithdrawal` objects. */
  nodes: Array<Maybe<HubWithdrawal>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubWithdrawal` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubWithdrawal` edge in the connection. */
export type HubWithdrawalEdge = {
  __typename?: 'HubWithdrawalEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubWithdrawal` at the end of the edge. */
  node?: Maybe<HubWithdrawal>;
};

/** Methods to use when ordering `HubWithdrawal`. */
export enum HubWithdrawalOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  WithdrawalRequestIdAsc = 'WITHDRAWAL_REQUEST_ID_ASC',
  WithdrawalRequestIdDesc = 'WITHDRAWAL_REQUEST_ID_DESC'
}

export type HubWithdrawalRequest = {
  __typename?: 'HubWithdrawalRequest';
  amount: Scalars['Float']['output'];
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubWithdrawalRequest`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubCurrency` that is related to this `HubWithdrawalRequest`. */
  hubCurrencyByCurrencyKeyAndCasinoId?: Maybe<HubCurrency>;
  /** Reads a single `HubExperience` that is related to this `HubWithdrawalRequest`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HubWithdrawalRequest`. */
  hubUserByUserId?: Maybe<HubUser>;
  /** Reads and enables pagination through a set of `HubWithdrawal`. */
  hubWithdrawalsByWithdrawalRequestId: HubWithdrawalConnection;
  id: Scalars['UUID']['output'];
  mpTransferId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['UUID']['output'];
};


export type HubWithdrawalRequestHubWithdrawalsByWithdrawalRequestIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubWithdrawalCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubWithdrawalOrderBy>>;
};

/**
 * A condition to be used against `HubWithdrawalRequest` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type HubWithdrawalRequestCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubWithdrawalRequest` values. */
export type HubWithdrawalRequestConnection = {
  __typename?: 'HubWithdrawalRequestConnection';
  /** A list of edges which contains the `HubWithdrawalRequest` and cursor to aid in pagination. */
  edges: Array<Maybe<HubWithdrawalRequestEdge>>;
  /** A list of `HubWithdrawalRequest` objects. */
  nodes: Array<Maybe<HubWithdrawalRequest>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubWithdrawalRequest` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubWithdrawalRequest` edge in the connection. */
export type HubWithdrawalRequestEdge = {
  __typename?: 'HubWithdrawalRequestEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubWithdrawalRequest` at the end of the edge. */
  node?: Maybe<HubWithdrawalRequest>;
};

/** Methods to use when ordering `HubWithdrawalRequest`. */
export enum HubWithdrawalRequestOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  addFortune?: Maybe<Fortune>;
  hubAddCasino?: Maybe<HubAddCasinoPayload>;
  hubAuthenticate?: Maybe<HubAuthenticatePayload>;
  hubClaimFaucet?: Maybe<HubClaimFaucetPayload>;
  hubWithdraw?: Maybe<HubWithdrawPayload>;
  /** Updates a single `HubBankroll` using a unique key and a patch. */
  updateHubBankrollById?: Maybe<UpdateHubBankrollPayload>;
  /** Updates a single `HubCasino` using a unique key and a patch. */
  updateHubCasinoById?: Maybe<UpdateHubCasinoPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddFortuneArgs = {
  text: Scalars['String']['input'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubAddCasinoArgs = {
  input: HubAddCasinoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubAuthenticateArgs = {
  input: HubAuthenticateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubWithdrawArgs = {
  input: HubWithdrawInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateHubBankrollByIdArgs = {
  input: UpdateHubBankrollByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateHubCasinoByIdArgs = {
  input: UpdateHubCasinoByIdInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `HubApiKey`. */
  allHubApiKeys?: Maybe<HubApiKeyConnection>;
  /** Reads and enables pagination through a set of `HubCasino`. */
  allHubCasinos?: Maybe<HubCasinoConnection>;
  /** Get a single `HubApiKey`. */
  hubApiKeyById?: Maybe<HubApiKey>;
  /** Get a single `HubApiKey`. */
  hubApiKeyByKey?: Maybe<HubApiKey>;
  /** Get a single `HubBalance`. */
  hubBalanceByCasinoIdAndUserIdAndExperienceIdAndCurrencyKey?: Maybe<HubBalance>;
  /** Get a single `HubBankroll`. */
  hubBankrollById?: Maybe<HubBankroll>;
  /** Get a single `HubCasino`. */
  hubCasinoById?: Maybe<HubCasino>;
  /** Get a single `HubCasinoSecret`. */
  hubCasinoSecretById?: Maybe<HubCasinoSecret>;
  /** Get a single `HubCurrency`. */
  hubCurrencyByKeyAndCasinoId?: Maybe<HubCurrency>;
  hubCurrentCasino?: Maybe<HubCasino>;
  hubCurrentExperience?: Maybe<HubExperience>;
  hubCurrentSession?: Maybe<HubSession>;
  hubCurrentUser?: Maybe<HubUser>;
  /** Get a single `HubDeposit`. */
  hubDepositById?: Maybe<HubDeposit>;
  /** Get a single `HubExperience`. */
  hubExperienceById?: Maybe<HubExperience>;
  /** Get a single `HubFaucetClaim`. */
  hubFaucetClaimById?: Maybe<HubFaucetClaim>;
  /** Get a single `HubJwkSet`. */
  hubJwkSetByCasinoId?: Maybe<HubJwkSet>;
  /** Get a single `HubJwkSetSnapshot`. */
  hubJwkSetSnapshotById?: Maybe<HubJwkSetSnapshot>;
  /** Get a single `HubSession`. */
  hubSessionById?: Maybe<HubSession>;
  /** Get a single `HubUser`. */
  hubUserById?: Maybe<HubUser>;
  /** Get a single `HubWithdrawal`. */
  hubWithdrawalById?: Maybe<HubWithdrawal>;
  /** Get a single `HubWithdrawalRequest`. */
  hubWithdrawalRequestById?: Maybe<HubWithdrawalRequest>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  randomFortune?: Maybe<Fortune>;
  /** Get a single `Todo`. */
  todoById?: Maybe<Todo>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllHubApiKeysArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubApiKeyCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubApiKeyOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllHubCasinosArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubCasinoCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubCasinoOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryHubApiKeyByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubApiKeyByKeyArgs = {
  key: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubBalanceByCasinoIdAndUserIdAndExperienceIdAndCurrencyKeyArgs = {
  casinoId: Scalars['UUID']['input'];
  currencyKey: Scalars['String']['input'];
  experienceId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubBankrollByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubCasinoByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubCasinoSecretByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubCurrencyByKeyAndCasinoIdArgs = {
  casinoId: Scalars['UUID']['input'];
  key: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubDepositByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubExperienceByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubFaucetClaimByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubJwkSetByCasinoIdArgs = {
  casinoId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubJwkSetSnapshotByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubSessionByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubUserByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubWithdrawalByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubWithdrawalRequestByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTodoByIdArgs = {
  id: Scalars['Int']['input'];
};

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type Subscription = {
  __typename?: 'Subscription';
  hubBalanceAlert?: Maybe<HubBalanceAlertPayload>;
};

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']['output']>;
  experienceId: Scalars['UUID']['output'];
  /** Reads a single `HubExperience` that is related to this `Todo`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `Todo`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  userId: Scalars['UUID']['output'];
};

/** A condition to be used against `Todo` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TodoCondition = {
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `Todo` values. */
export type TodoConnection = {
  __typename?: 'TodoConnection';
  /** A list of edges which contains the `Todo` and cursor to aid in pagination. */
  edges: Array<Maybe<TodoEdge>>;
  /** A list of `Todo` objects. */
  nodes: Array<Maybe<Todo>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Todo` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Todo` edge in the connection. */
export type TodoEdge = {
  __typename?: 'TodoEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Todo` at the end of the edge. */
  node?: Maybe<Todo>;
};

/** Methods to use when ordering `Todo`. */
export enum TodoOrderBy {
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** All input for the `updateHubBankrollById` mutation. */
export type UpdateHubBankrollByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `HubBankroll` being updated. */
  hubBankrollPatch: HubBankrollPatch;
  id: Scalars['UUID']['input'];
};

/** The output of our update `HubBankroll` mutation. */
export type UpdateHubBankrollPayload = {
  __typename?: 'UpdateHubBankrollPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `HubBankroll` that was updated by this mutation. */
  hubBankroll?: Maybe<HubBankroll>;
  /** An edge for our `HubBankroll`. May be used by Relay 1. */
  hubBankrollEdge?: Maybe<HubBankrollEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `HubBankroll` mutation. */
export type UpdateHubBankrollPayloadHubBankrollEdgeArgs = {
  orderBy?: Array<HubBankrollOrderBy>;
};

/** All input for the `updateHubCasinoById` mutation. */
export type UpdateHubCasinoByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `HubCasino` being updated. */
  hubCasinoPatch: HubCasinoPatch;
  id: Scalars['UUID']['input'];
};

/** The output of our update `HubCasino` mutation. */
export type UpdateHubCasinoPayload = {
  __typename?: 'UpdateHubCasinoPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `HubCasino` that was updated by this mutation. */
  hubCasino?: Maybe<HubCasino>;
  /** An edge for our `HubCasino`. May be used by Relay 1. */
  hubCasinoEdge?: Maybe<HubCasinoEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `HubCasino` mutation. */
export type UpdateHubCasinoPayloadHubCasinoEdgeArgs = {
  orderBy?: Array<HubCasinoOrderBy>;
};

export type WithdrawMutationVariables = Exact<{
  amount: Scalars['Int']['input'];
  currencyKey: Scalars['String']['input'];
}>;


export type WithdrawMutation = { __typename?: 'Mutation', hubWithdraw?: { __typename?: 'HubWithdrawPayload', withdrawalRequest: { __typename?: 'HubWithdrawalRequest', id: any } } | null };

export type AuthenticateMutationVariables = Exact<{
  casinoBaseUrl: Scalars['String']['input'];
  userToken: Scalars['String']['input'];
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', hubAuthenticate?: { __typename?: 'HubAuthenticatePayload', success?: { __typename?: 'HubAuthenticateSuccess', sessionKey: any, uname: string, experienceId: any, userId: any } | null, query?: { __typename?: 'Query', hubCurrentUser?: { __typename?: 'HubUser', hubBalancesByUserId: { __typename?: 'HubBalanceConnection', nodes: Array<{ __typename?: 'HubBalance', amount: number, currencyKey: string, hubCurrencyByCurrencyKeyAndCasinoId?: { __typename?: 'HubCurrency', displayUnitName: string, displayUnitScale: number } | null } | null> } } | null } | null } | null };

export type GetBalancesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBalancesQuery = { __typename?: 'Query', hubCurrentUser?: { __typename?: 'HubUser', hubBalancesByUserId: { __typename?: 'HubBalanceConnection', nodes: Array<{ __typename?: 'HubBalance', amount: number, currencyKey: string, hubCurrencyByCurrencyKeyAndCasinoId?: { __typename?: 'HubCurrency', displayUnitName: string, displayUnitScale: number } | null } | null> } } | null };


export const WithdrawDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Withdraw"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currencyKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hubWithdraw"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currencyKey"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"withdrawalRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<WithdrawMutation, WithdrawMutationVariables>;
export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"casinoBaseUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hubAuthenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"casinoBaseUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"casinoBaseUrl"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userToken"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionKey"}},{"kind":"Field","name":{"kind":"Name","value":"uname"}},{"kind":"Field","name":{"kind":"Name","value":"experienceId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hubCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hubBalancesByUserId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyKey"}},{"kind":"Field","name":{"kind":"Name","value":"hubCurrencyByCurrencyKeyAndCasinoId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayUnitName"}},{"kind":"Field","name":{"kind":"Name","value":"displayUnitScale"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const GetBalancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBalances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hubCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hubBalancesByUserId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyKey"}},{"kind":"Field","name":{"kind":"Name","value":"hubCurrencyByCurrencyKeyAndCasinoId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayUnitName"}},{"kind":"Field","name":{"kind":"Name","value":"displayUnitScale"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBalancesQuery, GetBalancesQueryVariables>;