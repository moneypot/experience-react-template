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
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: any; output: any; }
};

export type CaasAddCasinoInput = {
  apiKey: Scalars['String']['input'];
  baseUrl: Scalars['String']['input'];
  graphqlUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CaasAddCasinoPayload = {
  __typename?: 'CaasAddCasinoPayload';
  caasCasino?: Maybe<CaasCasino>;
  query?: Maybe<Query>;
};

export type CaasApiKey = {
  __typename?: 'CaasApiKey';
  id: Scalars['UUID']['output'];
  key: Scalars['UUID']['output'];
  lastUsedAt?: Maybe<Scalars['Datetime']['output']>;
  revokedAt?: Maybe<Scalars['Datetime']['output']>;
};

/**
 * A condition to be used against `CaasApiKey` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CaasApiKeyCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `key` field. */
  key?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `CaasApiKey` values. */
export type CaasApiKeyConnection = {
  __typename?: 'CaasApiKeyConnection';
  /** A list of edges which contains the `CaasApiKey` and cursor to aid in pagination. */
  edges: Array<Maybe<CaasApiKeyEdge>>;
  /** A list of `CaasApiKey` objects. */
  nodes: Array<Maybe<CaasApiKey>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaasApiKey` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CaasApiKey` edge in the connection. */
export type CaasApiKeyEdge = {
  __typename?: 'CaasApiKeyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CaasApiKey` at the end of the edge. */
  node?: Maybe<CaasApiKey>;
};

/** Methods to use when ordering `CaasApiKey`. */
export enum CaasApiKeyOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CaasAuthenticateInput = {
  casinoBaseUrl: Scalars['String']['input'];
  userToken: Scalars['String']['input'];
};

export type CaasAuthenticatePayload = {
  __typename?: 'CaasAuthenticatePayload';
  query?: Maybe<Query>;
  success?: Maybe<CaasAuthenticateSuccess>;
};

export type CaasAuthenticateSuccess = {
  __typename?: 'CaasAuthenticateSuccess';
  experienceId: Scalars['UUID']['output'];
  sessionId: Scalars['UUID']['output'];
  uname: Scalars['String']['output'];
  userId: Scalars['UUID']['output'];
};

export type CaasBalance = {
  __typename?: 'CaasBalance';
  amount: Scalars['Float']['output'];
  /** Reads a single `CaasCasino` that is related to this `CaasBalance`. */
  caasCasinoByCasinoId?: Maybe<CaasCasino>;
  /** Reads a single `CaasCurrency` that is related to this `CaasBalance`. */
  caasCurrencyByCurrencyKeyAndCasinoId?: Maybe<CaasCurrency>;
  /** Reads a single `CaasExperience` that is related to this `CaasBalance`. */
  caasExperienceByExperienceId?: Maybe<CaasExperience>;
  /** Reads a single `CaasUser` that is related to this `CaasBalance`. */
  caasUserByUserId?: Maybe<CaasUser>;
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  userId: Scalars['UUID']['output'];
};

export type CaasBalanceAlertPayload = {
  __typename?: 'CaasBalanceAlertPayload';
  currencyKey?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `CaasBalance` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CaasBalanceCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `CaasBalance` values. */
export type CaasBalanceConnection = {
  __typename?: 'CaasBalanceConnection';
  /** A list of edges which contains the `CaasBalance` and cursor to aid in pagination. */
  edges: Array<Maybe<CaasBalanceEdge>>;
  /** A list of `CaasBalance` objects. */
  nodes: Array<Maybe<CaasBalance>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaasBalance` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CaasBalance` edge in the connection. */
export type CaasBalanceEdge = {
  __typename?: 'CaasBalanceEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CaasBalance` at the end of the edge. */
  node?: Maybe<CaasBalance>;
};

/** Methods to use when ordering `CaasBalance`. */
export enum CaasBalanceOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CaasBankroll = {
  __typename?: 'CaasBankroll';
  amount: Scalars['Float']['output'];
  bets: Scalars['BigInt']['output'];
  /** Reads a single `CaasCasino` that is related to this `CaasBankroll`. */
  caasCasinoByCasinoId?: Maybe<CaasCasino>;
  /** Reads a single `CaasCurrency` that is related to this `CaasBankroll`. */
  caasCurrencyByCurrencyKeyAndCasinoId?: Maybe<CaasCurrency>;
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  expectedValue: Scalars['Float']['output'];
  id: Scalars['UUID']['output'];
  wagered: Scalars['Float']['output'];
};

/**
 * A condition to be used against `CaasBankroll` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CaasBankrollCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `CaasBankroll` values. */
export type CaasBankrollConnection = {
  __typename?: 'CaasBankrollConnection';
  /** A list of edges which contains the `CaasBankroll` and cursor to aid in pagination. */
  edges: Array<Maybe<CaasBankrollEdge>>;
  /** A list of `CaasBankroll` objects. */
  nodes: Array<Maybe<CaasBankroll>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaasBankroll` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CaasBankroll` edge in the connection. */
export type CaasBankrollEdge = {
  __typename?: 'CaasBankrollEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CaasBankroll` at the end of the edge. */
  node?: Maybe<CaasBankroll>;
};

/** Methods to use when ordering `CaasBankroll`. */
export enum CaasBankrollOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CaasCasino = {
  __typename?: 'CaasCasino';
  bankrolls?: Maybe<Array<Maybe<CaasBankroll>>>;
  baseUrl: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `CaasBalance`. */
  caasBalancesByCasinoId: CaasBalanceConnection;
  /** Reads and enables pagination through a set of `CaasBankroll`. */
  caasBankrollsByCasinoId: CaasBankrollConnection;
  /** Reads a single `CaasCasinoSecret` that is related to this `CaasCasino`. */
  caasCasinoSecretById?: Maybe<CaasCasinoSecret>;
  /** Reads and enables pagination through a set of `CaasCurrency`. */
  caasCurrenciesByCasinoId: CaasCurrencyConnection;
  /** Reads and enables pagination through a set of `CaasDeposit`. */
  caasDepositsByCasinoId: CaasDepositConnection;
  /** Reads and enables pagination through a set of `CaasExperience`. */
  caasExperiencesByCasinoId: CaasExperienceConnection;
  /** Reads and enables pagination through a set of `CaasSession`. */
  caasSessionsByCasinoId: CaasSessionConnection;
  /** Reads and enables pagination through a set of `CaasUser`. */
  caasUsersByCasinoId: CaasUserConnection;
  /** Reads and enables pagination through a set of `CaasWithdrawal`. */
  caasWithdrawalsByCasinoId: CaasWithdrawalConnection;
  graphqlUrl: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};


export type CaasCasinoCaasBalancesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasBalanceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasBalanceOrderBy>>;
};


export type CaasCasinoCaasBankrollsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasBankrollCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasBankrollOrderBy>>;
};


export type CaasCasinoCaasCurrenciesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasCurrencyCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasCurrencyOrderBy>>;
};


export type CaasCasinoCaasDepositsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasDepositCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasDepositOrderBy>>;
};


export type CaasCasinoCaasExperiencesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasExperienceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasExperienceOrderBy>>;
};


export type CaasCasinoCaasSessionsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasSessionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasSessionOrderBy>>;
};


export type CaasCasinoCaasUsersByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasUserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasUserOrderBy>>;
};


export type CaasCasinoCaasWithdrawalsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasWithdrawalCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasWithdrawalOrderBy>>;
};

/**
 * A condition to be used against `CaasCasino` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CaasCasinoCondition = {
  /** Checks for equality with the object’s `baseUrl` field. */
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `graphqlUrl` field. */
  graphqlUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `CaasCasino` values. */
export type CaasCasinoConnection = {
  __typename?: 'CaasCasinoConnection';
  /** A list of edges which contains the `CaasCasino` and cursor to aid in pagination. */
  edges: Array<Maybe<CaasCasinoEdge>>;
  /** A list of `CaasCasino` objects. */
  nodes: Array<Maybe<CaasCasino>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaasCasino` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CaasCasino` edge in the connection. */
export type CaasCasinoEdge = {
  __typename?: 'CaasCasinoEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CaasCasino` at the end of the edge. */
  node?: Maybe<CaasCasino>;
};

/** Methods to use when ordering `CaasCasino`. */
export enum CaasCasinoOrderBy {
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

/** Represents an update to a `CaasCasino`. Fields that are set will be updated. */
export type CaasCasinoPatch = {
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  graphqlUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CaasCasinoSecret = {
  __typename?: 'CaasCasinoSecret';
  apiKey: Scalars['UUID']['output'];
  /** Reads a single `CaasCasino` that is related to this `CaasCasinoSecret`. */
  caasCasinoById?: Maybe<CaasCasino>;
  controllerId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
};

export type CaasClaimFaucetPayload = {
  __typename?: 'CaasClaimFaucetPayload';
  query?: Maybe<Query>;
  success: Scalars['Boolean']['output'];
};

export type CaasCurrency = {
  __typename?: 'CaasCurrency';
  /** Reads and enables pagination through a set of `CaasBankroll`. */
  caasBankrollsByCurrencyKeyAndCasinoId: CaasBankrollConnection;
  /** Reads a single `CaasCasino` that is related to this `CaasCurrency`. */
  caasCasinoByCasinoId?: Maybe<CaasCasino>;
  casinoId: Scalars['UUID']['output'];
  displayUnitName: Scalars['String']['output'];
  displayUnitScale: Scalars['Int']['output'];
  key: Scalars['String']['output'];
};


export type CaasCurrencyCaasBankrollsByCurrencyKeyAndCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasBankrollCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasBankrollOrderBy>>;
};

/**
 * A condition to be used against `CaasCurrency` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CaasCurrencyCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `key` field. */
  key?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `CaasCurrency` values. */
export type CaasCurrencyConnection = {
  __typename?: 'CaasCurrencyConnection';
  /** A list of edges which contains the `CaasCurrency` and cursor to aid in pagination. */
  edges: Array<Maybe<CaasCurrencyEdge>>;
  /** A list of `CaasCurrency` objects. */
  nodes: Array<Maybe<CaasCurrency>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaasCurrency` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CaasCurrency` edge in the connection. */
export type CaasCurrencyEdge = {
  __typename?: 'CaasCurrencyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CaasCurrency` at the end of the edge. */
  node?: Maybe<CaasCurrency>;
};

/** Methods to use when ordering `CaasCurrency`. */
export enum CaasCurrencyOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CaasDeposit = {
  __typename?: 'CaasDeposit';
  amount: Scalars['Float']['output'];
  /** Reads a single `CaasCasino` that is related to this `CaasDeposit`. */
  caasCasinoByCasinoId?: Maybe<CaasCasino>;
  /** Reads a single `CaasCurrency` that is related to this `CaasDeposit`. */
  caasCurrencyByCurrencyKeyAndCasinoId?: Maybe<CaasCurrency>;
  /** Reads a single `CaasExperience` that is related to this `CaasDeposit`. */
  caasExperienceByExperienceId?: Maybe<CaasExperience>;
  /** Reads a single `CaasUser` that is related to this `CaasDeposit`. */
  caasUserByUserId?: Maybe<CaasUser>;
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  mpTransferId: Scalars['String']['output'];
  uname: Scalars['String']['output'];
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `CaasDeposit` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CaasDepositCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `CaasDeposit` values. */
export type CaasDepositConnection = {
  __typename?: 'CaasDepositConnection';
  /** A list of edges which contains the `CaasDeposit` and cursor to aid in pagination. */
  edges: Array<Maybe<CaasDepositEdge>>;
  /** A list of `CaasDeposit` objects. */
  nodes: Array<Maybe<CaasDeposit>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaasDeposit` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CaasDeposit` edge in the connection. */
export type CaasDepositEdge = {
  __typename?: 'CaasDepositEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CaasDeposit` at the end of the edge. */
  node?: Maybe<CaasDeposit>;
};

/** Methods to use when ordering `CaasDeposit`. */
export enum CaasDepositOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CaasExperience = {
  __typename?: 'CaasExperience';
  /** Reads a single `CaasCasino` that is related to this `CaasExperience`. */
  caasCasinoByCasinoId?: Maybe<CaasCasino>;
  /** Reads and enables pagination through a set of `CaasSession`. */
  caasSessionsByExperienceId: CaasSessionConnection;
  casinoId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  mpExperienceId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};


export type CaasExperienceCaasSessionsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasSessionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasSessionOrderBy>>;
};

/**
 * A condition to be used against `CaasExperience` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CaasExperienceCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `mpExperienceId` field. */
  mpExperienceId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `CaasExperience` values. */
export type CaasExperienceConnection = {
  __typename?: 'CaasExperienceConnection';
  /** A list of edges which contains the `CaasExperience` and cursor to aid in pagination. */
  edges: Array<Maybe<CaasExperienceEdge>>;
  /** A list of `CaasExperience` objects. */
  nodes: Array<Maybe<CaasExperience>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaasExperience` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CaasExperience` edge in the connection. */
export type CaasExperienceEdge = {
  __typename?: 'CaasExperienceEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CaasExperience` at the end of the edge. */
  node?: Maybe<CaasExperience>;
};

/** Methods to use when ordering `CaasExperience`. */
export enum CaasExperienceOrderBy {
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

export type CaasFaucetClaim = {
  __typename?: 'CaasFaucetClaim';
  amount: Scalars['Float']['output'];
  /** Reads a single `CaasCasino` that is related to this `CaasFaucetClaim`. */
  caasCasinoByCasinoId?: Maybe<CaasCasino>;
  /** Reads a single `CaasCurrency` that is related to this `CaasFaucetClaim`. */
  caasCurrencyByCurrencyKeyAndCasinoId?: Maybe<CaasCurrency>;
  /** Reads a single `CaasExperience` that is related to this `CaasFaucetClaim`. */
  caasExperienceByExperienceId?: Maybe<CaasExperience>;
  /** Reads a single `CaasUser` that is related to this `CaasFaucetClaim`. */
  caasUserByUserId?: Maybe<CaasUser>;
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  userId: Scalars['UUID']['output'];
};

export type CaasSession = {
  __typename?: 'CaasSession';
  /** Reads a single `CaasCasino` that is related to this `CaasSession`. */
  caasCasinoByCasinoId?: Maybe<CaasCasino>;
  /** Reads a single `CaasExperience` that is related to this `CaasSession`. */
  caasExperienceByExperienceId?: Maybe<CaasExperience>;
  /** Reads a single `CaasUser` that is related to this `CaasSession`. */
  caasUserByUserId?: Maybe<CaasUser>;
  casinoId: Scalars['UUID']['output'];
  experienceId: Scalars['UUID']['output'];
  expiredAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  userId: Scalars['UUID']['output'];
  userToken: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `CaasSession` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CaasSessionCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `CaasSession` values. */
export type CaasSessionConnection = {
  __typename?: 'CaasSessionConnection';
  /** A list of edges which contains the `CaasSession` and cursor to aid in pagination. */
  edges: Array<Maybe<CaasSessionEdge>>;
  /** A list of `CaasSession` objects. */
  nodes: Array<Maybe<CaasSession>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaasSession` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CaasSession` edge in the connection. */
export type CaasSessionEdge = {
  __typename?: 'CaasSessionEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CaasSession` at the end of the edge. */
  node?: Maybe<CaasSession>;
};

/** Methods to use when ordering `CaasSession`. */
export enum CaasSessionOrderBy {
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

export enum CaasTransferStatusKind {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Pending = 'PENDING'
}

export type CaasUser = {
  __typename?: 'CaasUser';
  allDeposits?: Maybe<Array<Maybe<CaasDeposit>>>;
  allWithdrawals?: Maybe<Array<Maybe<CaasWithdrawal>>>;
  balanceByCurrency?: Maybe<CaasBalance>;
  balances?: Maybe<Array<Maybe<CaasBalance>>>;
  /** Reads a single `CaasCasino` that is related to this `CaasUser`. */
  caasCasinoByCasinoId?: Maybe<CaasCasino>;
  /** Reads and enables pagination through a set of `CaasSession`. */
  caasSessionsByUserId: CaasSessionConnection;
  casinoId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  mpUserId: Scalars['UUID']['output'];
  uname: Scalars['String']['output'];
};


export type CaasUserAllDepositsArgs = {
  afterId?: InputMaybe<Scalars['UUID']['input']>;
};


export type CaasUserAllWithdrawalsArgs = {
  afterId?: InputMaybe<Scalars['UUID']['input']>;
};


export type CaasUserBalanceByCurrencyArgs = {
  currency: Scalars['String']['input'];
};


export type CaasUserCaasSessionsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasSessionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasSessionOrderBy>>;
};

/**
 * A condition to be used against `CaasUser` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CaasUserCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `CaasUser` values. */
export type CaasUserConnection = {
  __typename?: 'CaasUserConnection';
  /** A list of edges which contains the `CaasUser` and cursor to aid in pagination. */
  edges: Array<Maybe<CaasUserEdge>>;
  /** A list of `CaasUser` objects. */
  nodes: Array<Maybe<CaasUser>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaasUser` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CaasUser` edge in the connection. */
export type CaasUserEdge = {
  __typename?: 'CaasUserEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CaasUser` at the end of the edge. */
  node?: Maybe<CaasUser>;
};

/** Methods to use when ordering `CaasUser`. */
export enum CaasUserOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CaasWithdrawInput = {
  amount: Scalars['Int']['input'];
  currency: Scalars['String']['input'];
};

export type CaasWithdrawPayload = {
  __typename?: 'CaasWithdrawPayload';
  query?: Maybe<Query>;
  withdrawal: CaasWithdrawal;
};

export type CaasWithdrawal = {
  __typename?: 'CaasWithdrawal';
  amount: Scalars['Float']['output'];
  /** Reads a single `CaasCasino` that is related to this `CaasWithdrawal`. */
  caasCasinoByCasinoId?: Maybe<CaasCasino>;
  /** Reads a single `CaasCurrency` that is related to this `CaasWithdrawal`. */
  caasCurrencyByCurrencyKeyAndCasinoId?: Maybe<CaasCurrency>;
  /** Reads a single `CaasExperience` that is related to this `CaasWithdrawal`. */
  caasExperienceByExperienceId?: Maybe<CaasExperience>;
  /** Reads a single `CaasUser` that is related to this `CaasWithdrawal`. */
  caasUserByUserId?: Maybe<CaasUser>;
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  mpTransferId: Scalars['String']['output'];
  status: CaasTransferStatusKind;
  statusAt: Scalars['Datetime']['output'];
  uname: Scalars['String']['output'];
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `CaasWithdrawal` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CaasWithdrawalCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `CaasWithdrawal` values. */
export type CaasWithdrawalConnection = {
  __typename?: 'CaasWithdrawalConnection';
  /** A list of edges which contains the `CaasWithdrawal` and cursor to aid in pagination. */
  edges: Array<Maybe<CaasWithdrawalEdge>>;
  /** A list of `CaasWithdrawal` objects. */
  nodes: Array<Maybe<CaasWithdrawal>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaasWithdrawal` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CaasWithdrawal` edge in the connection. */
export type CaasWithdrawalEdge = {
  __typename?: 'CaasWithdrawalEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CaasWithdrawal` at the end of the edge. */
  node?: Maybe<CaasWithdrawal>;
};

/** Methods to use when ordering `CaasWithdrawal`. */
export enum CaasWithdrawalOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Fortune = {
  __typename?: 'Fortune';
  id: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  addFortune?: Maybe<Fortune>;
  caasAddCasino?: Maybe<CaasAddCasinoPayload>;
  caasAuthenticate?: Maybe<CaasAuthenticatePayload>;
  caasClaimFaucet?: Maybe<CaasClaimFaucetPayload>;
  caasWithdraw?: Maybe<CaasWithdrawPayload>;
  /** Updates a single `CaasCasino` using a unique key and a patch. */
  updateCaasCasinoById?: Maybe<UpdateCaasCasinoPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddFortuneArgs = {
  text: Scalars['String']['input'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCaasAddCasinoArgs = {
  input: CaasAddCasinoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCaasAuthenticateArgs = {
  input: CaasAuthenticateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCaasWithdrawArgs = {
  input: CaasWithdrawInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCaasCasinoByIdArgs = {
  input: UpdateCaasCasinoByIdInput;
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
  /** Reads and enables pagination through a set of `CaasApiKey`. */
  allCaasApiKeys?: Maybe<CaasApiKeyConnection>;
  /** Reads and enables pagination through a set of `CaasCasino`. */
  allCaasCasinos?: Maybe<CaasCasinoConnection>;
  /** Get a single `CaasApiKey`. */
  caasApiKeyById?: Maybe<CaasApiKey>;
  /** Get a single `CaasApiKey`. */
  caasApiKeyByKey?: Maybe<CaasApiKey>;
  /** Get a single `CaasBalance`. */
  caasBalanceByCasinoIdAndUserIdAndExperienceIdAndCurrencyKey?: Maybe<CaasBalance>;
  /** Get a single `CaasBankroll`. */
  caasBankrollById?: Maybe<CaasBankroll>;
  /** Get a single `CaasCasino`. */
  caasCasinoById?: Maybe<CaasCasino>;
  /** Get a single `CaasCasinoSecret`. */
  caasCasinoSecretById?: Maybe<CaasCasinoSecret>;
  /** Get a single `CaasCurrency`. */
  caasCurrencyByKeyAndCasinoId?: Maybe<CaasCurrency>;
  caasCurrentCasino?: Maybe<CaasCasino>;
  caasCurrentSession?: Maybe<CaasSession>;
  caasCurrentUser?: Maybe<CaasUser>;
  /** Get a single `CaasDeposit`. */
  caasDepositById?: Maybe<CaasDeposit>;
  /** Get a single `CaasExperience`. */
  caasExperienceById?: Maybe<CaasExperience>;
  /** Get a single `CaasFaucetClaim`. */
  caasFaucetClaimById?: Maybe<CaasFaucetClaim>;
  /** Get a single `CaasSession`. */
  caasSessionById?: Maybe<CaasSession>;
  /** Get a single `CaasUser`. */
  caasUserById?: Maybe<CaasUser>;
  /** Get a single `CaasWithdrawal`. */
  caasWithdrawalById?: Maybe<CaasWithdrawal>;
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
export type QueryAllCaasApiKeysArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasApiKeyCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasApiKeyOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCaasCasinosArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CaasCasinoCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CaasCasinoOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasApiKeyByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasApiKeyByKeyArgs = {
  key: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasBalanceByCasinoIdAndUserIdAndExperienceIdAndCurrencyKeyArgs = {
  casinoId: Scalars['UUID']['input'];
  currencyKey: Scalars['String']['input'];
  experienceId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasBankrollByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasCasinoByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasCasinoSecretByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasCurrencyByKeyAndCasinoIdArgs = {
  casinoId: Scalars['UUID']['input'];
  key: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasDepositByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasExperienceByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasFaucetClaimByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasSessionByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasUserByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaasWithdrawalByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTodoByIdArgs = {
  id: Scalars['Int']['input'];
};

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type Subscription = {
  __typename?: 'Subscription';
  caasBalanceAlert?: Maybe<CaasBalanceAlertPayload>;
};

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** All input for the `updateCaasCasinoById` mutation. */
export type UpdateCaasCasinoByIdInput = {
  /** An object where the defined keys will be set on the `CaasCasino` being updated. */
  caasCasinoPatch: CaasCasinoPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our update `CaasCasino` mutation. */
export type UpdateCaasCasinoPayload = {
  __typename?: 'UpdateCaasCasinoPayload';
  /** The `CaasCasino` that was updated by this mutation. */
  caasCasino?: Maybe<CaasCasino>;
  /** An edge for our `CaasCasino`. May be used by Relay 1. */
  caasCasinoEdge?: Maybe<CaasCasinoEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `CaasCasino` mutation. */
export type UpdateCaasCasinoPayloadCaasCasinoEdgeArgs = {
  orderBy?: Array<CaasCasinoOrderBy>;
};

export type AuthenticateMutationVariables = Exact<{
  casinoBaseUrl: Scalars['String']['input'];
  userToken: Scalars['String']['input'];
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', caasAuthenticate?: { __typename?: 'CaasAuthenticatePayload', success?: { __typename?: 'CaasAuthenticateSuccess', sessionId: any, uname: string, experienceId: any, userId: any } | null, query?: { __typename?: 'Query', caasCurrentUser?: { __typename?: 'CaasUser', balances?: Array<{ __typename?: 'CaasBalance', amount: number, currencyKey: string, caasCurrencyByCurrencyKeyAndCasinoId?: { __typename?: 'CaasCurrency', displayUnitName: string, displayUnitScale: number } | null } | null> | null } | null } | null } | null };

export type GetBalancesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBalancesQuery = { __typename?: 'Query', caasCurrentUser?: { __typename?: 'CaasUser', balances?: Array<{ __typename?: 'CaasBalance', amount: number, currencyKey: string, caasCurrencyByCurrencyKeyAndCasinoId?: { __typename?: 'CaasCurrency', key: string, displayUnitScale: number, displayUnitName: string } | null } | null> | null } | null };

export type WithdrawMutationVariables = Exact<{
  amount: Scalars['Int']['input'];
  currencyKey: Scalars['String']['input'];
}>;


export type WithdrawMutation = { __typename?: 'Mutation', caasWithdraw?: { __typename?: 'CaasWithdrawPayload', withdrawal: { __typename?: 'CaasWithdrawal', id: any } } | null };


export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"casinoBaseUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caasAuthenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"casinoBaseUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"casinoBaseUrl"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userToken"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"uname"}},{"kind":"Field","name":{"kind":"Name","value":"experienceId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caasCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyKey"}},{"kind":"Field","name":{"kind":"Name","value":"caasCurrencyByCurrencyKeyAndCasinoId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayUnitName"}},{"kind":"Field","name":{"kind":"Name","value":"displayUnitScale"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const GetBalancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBalances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caasCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyKey"}},{"kind":"Field","name":{"kind":"Name","value":"caasCurrencyByCurrencyKeyAndCasinoId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayUnitScale"}},{"kind":"Field","name":{"kind":"Name","value":"displayUnitName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBalancesQuery, GetBalancesQueryVariables>;
export const WithdrawDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Withdraw"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currencyKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caasWithdraw"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currencyKey"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"withdrawal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<WithdrawMutation, WithdrawMutationVariables>;