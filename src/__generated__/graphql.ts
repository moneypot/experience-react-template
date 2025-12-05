/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
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
  /** Binary data encoded using Base64 */
  Base64EncodedBinary: { input: any; output: any; }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: string; output: string; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) and, if it has a timezone, [RFC
   * 3339](https://datatracker.ietf.org/doc/html/rfc3339) standards. Input values
   * that do not conform to both ISO 8601 and RFC 3339 may be coerced, which may lead
   * to unexpected results.
   */
  Datetime: { input: string; output: string; }
  /** Represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: string; output: string; }
};

export enum AnyGameKind {
  Coinflip = 'COINFLIP',
  CrashDice = 'CRASH_DICE',
  General = 'GENERAL',
  Mines = 'MINES',
  Pachinko = 'PACHINKO',
  Wheel = 'WHEEL'
}

export type CashoutMinesGameInput = {
  gameId: Scalars['UUID']['input'];
};

export enum CustomGameKind {
  Mines = 'MINES'
}

export type Hash = {
  __typename?: 'Hash';
  casinoId: Scalars['UUID']['output'];
  experienceId: Scalars['UUID']['output'];
  hash: Scalars['Base64EncodedBinary']['output'];
  /** Reads a single `HashChain` that is related to this `Hash`. */
  hashChainByHashChainId?: Maybe<HashChain>;
  hashChainId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `Hash`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubExperience` that is related to this `Hash`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `Hash`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  iteration: Scalars['Int']['output'];
  type: HashType;
  userId: Scalars['UUID']['output'];
};

export type HashChain = {
  __typename?: 'HashChain';
  active: Scalars['Boolean']['output'];
  casinoId: Scalars['UUID']['output'];
  clientSeed: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Hash`. */
  hashesByHashChainId: HashConnection;
  /** Reads a single `HubCasino` that is related to this `HashChain`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubExperience` that is related to this `HashChain`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HashChain`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  userId: Scalars['UUID']['output'];
};


export type HashChainHashesByHashChainIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HashCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HashOrderBy>>;
};

/**
 * A condition to be used against `HashChain` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HashChainCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HashChain` values. */
export type HashChainConnection = {
  __typename?: 'HashChainConnection';
  /** A list of edges which contains the `HashChain` and cursor to aid in pagination. */
  edges: Array<Maybe<HashChainEdge>>;
  /** A list of `HashChain` objects. */
  nodes: Array<Maybe<HashChain>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HashChain` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HashChain` edge in the connection. */
export type HashChainEdge = {
  __typename?: 'HashChainEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HashChain` at the end of the edge. */
  node?: Maybe<HashChain>;
};

/** Methods to use when ordering `HashChain`. */
export enum HashChainOrderBy {
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

/** A condition to be used against `Hash` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type HashCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `hashChainId` field. */
  hashChainId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `iteration` field. */
  iteration?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `Hash` values. */
export type HashConnection = {
  __typename?: 'HashConnection';
  /** A list of edges which contains the `Hash` and cursor to aid in pagination. */
  edges: Array<Maybe<HashEdge>>;
  /** A list of `Hash` objects. */
  nodes: Array<Maybe<Hash>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Hash` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Hash` edge in the connection. */
export type HashEdge = {
  __typename?: 'HashEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Hash` at the end of the edge. */
  node?: Maybe<Hash>;
};

/** Methods to use when ordering `Hash`. */
export enum HashOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  HashChainIdAsc = 'HASH_CHAIN_ID_ASC',
  HashChainIdDesc = 'HASH_CHAIN_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IterationAsc = 'ITERATION_ASC',
  IterationDesc = 'ITERATION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export enum HashType {
  CoinflipBet = 'COINFLIP_BET',
  CrashDiceBet = 'CRASH_DICE_BET',
  MinesGame = 'MINES_GAME',
  MinesMove = 'MINES_MOVE',
  PreimageHash = 'PREIMAGE_HASH',
  TerminalHash = 'TERMINAL_HASH'
}

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

export type HubBadHashChainError = {
  __typename?: 'HubBadHashChainError';
  message: Scalars['String']['output'];
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
  id: Scalars['UUID']['output'];
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
  /** Checks for equality with the object’s `currencyKey` field. */
  currencyKey?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
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
  /** Checks for equality with the object’s `currencyKey` field. */
  currencyKey?: InputMaybe<Scalars['String']['input']>;
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
  CurrencyKeyAsc = 'CURRENCY_KEY_ASC',
  CurrencyKeyDesc = 'CURRENCY_KEY_DESC',
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

export type HubBulkRiskLimit = {
  __typename?: 'HubBulkRiskLimit';
  currency: Scalars['String']['output'];
  gameKind: AnyGameKind;
  maxPayout: Scalars['Float']['output'];
};

export type HubCasino = {
  __typename?: 'HubCasino';
  baseUrl: Scalars['String']['output'];
  graphqlUrl: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `HashChain`. */
  hashChainsByCasinoId: HashChainConnection;
  /** Reads and enables pagination through a set of `Hash`. */
  hashesByCasinoId: HashConnection;
  /** Reads and enables pagination through a set of `HubBalance`. */
  hubBalancesByCasinoId: HubBalanceConnection;
  /** Reads and enables pagination through a set of `HubBankroll`. */
  hubBankrollsByCasinoId: HubBankrollConnection;
  /** Reads a single `HubCasinoSecret` that is related to this `HubCasino`. */
  hubCasinoSecretById?: Maybe<HubCasinoSecret>;
  /** Reads and enables pagination through a set of `HubChatMessage`. */
  hubChatMessagesByCasinoId: HubChatMessageConnection;
  /** Reads and enables pagination through a set of `HubChatMod`. */
  hubChatModsByCasinoId: HubChatModConnection;
  /** Reads and enables pagination through a set of `HubChatMute`. */
  hubChatMutesByCasinoId: HubChatMuteConnection;
  /** Reads and enables pagination through a set of `HubCurrency`. */
  hubCurrenciesByCasinoId: HubCurrencyConnection;
  /** Reads and enables pagination through a set of `HubDeposit`. */
  hubDepositsByCasinoId: HubDepositConnection;
  /** Reads and enables pagination through a set of `HubExperience`. */
  hubExperiencesByCasinoId: HubExperienceConnection;
  /** Reads and enables pagination through a set of `HubFaucetClaim`. */
  hubFaucetClaimsByCasinoId: HubFaucetClaimConnection;
  /** Reads and enables pagination through a set of `HubHashChain`. */
  hubHashChainsByCasinoId: HubHashChainConnection;
  /** Reads a single `HubJwkSet` that is related to this `HubCasino`. */
  hubJwkSetByCasinoId?: Maybe<HubJwkSet>;
  /** Reads and enables pagination through a set of `HubJwkSetSnapshot`. */
  hubJwkSetSnapshotsByCasinoId: HubJwkSetSnapshotConnection;
  /** Reads and enables pagination through a set of `HubOutcomeBet`. */
  hubOutcomeBetsByCasinoId: HubOutcomeBetConnection;
  /** Reads and enables pagination through a set of `HubSession`. */
  hubSessionsByCasinoId: HubSessionConnection;
  /** Reads and enables pagination through a set of `HubTakeRequest`. */
  hubTakeRequestsByCasinoId: HubTakeRequestConnection;
  /** Reads and enables pagination through a set of `HubUser`. */
  hubUsersByCasinoId: HubUserConnection;
  /** Reads and enables pagination through a set of `HubWithdrawalRequest`. */
  hubWithdrawalRequestsByCasinoId: HubWithdrawalRequestConnection;
  /** Reads and enables pagination through a set of `HubWithdrawal`. */
  hubWithdrawalsByCasinoId: HubWithdrawalConnection;
  id: Scalars['UUID']['output'];
  isPlayground: Scalars['Boolean']['output'];
  /** Reads and enables pagination through a set of `MinesGame`. */
  minesGamesByCasinoId: MinesGameConnection;
  /** Reads and enables pagination through a set of `MinesMove`. */
  minesMovesByCasinoId: MinesMoveConnection;
  name: Scalars['String']['output'];
};


export type HubCasinoHashChainsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HashChainCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HashChainOrderBy>>;
};


export type HubCasinoHashesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HashCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HashOrderBy>>;
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


export type HubCasinoHubChatMessagesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubChatMessageOrderBy>>;
};


export type HubCasinoHubChatModsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubChatModCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubChatModOrderBy>>;
};


export type HubCasinoHubChatMutesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubChatMuteCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubChatMuteOrderBy>>;
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


export type HubCasinoHubHashChainsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubHashChainCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubHashChainOrderBy>>;
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


export type HubCasinoHubOutcomeBetsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubOutcomeBetCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubOutcomeBetOrderBy>>;
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


export type HubCasinoHubTakeRequestsByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubTakeRequestCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubTakeRequestOrderBy>>;
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


export type HubCasinoMinesGamesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MinesGameCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinesGameOrderBy>>;
};


export type HubCasinoMinesMovesByCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MinesMoveCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinesMoveOrderBy>>;
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

export type HubChatAddModInput = {
  experienceId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

export type HubChatAddModPayload = {
  __typename?: 'HubChatAddModPayload';
  chatMod: HubChatMod;
};

export type HubChatCreateSystemMessageInput = {
  body: Scalars['String']['input'];
  clientId: Scalars['UUID']['input'];
  experienceId: Scalars['UUID']['input'];
};

export type HubChatCreateSystemMessagePayload = {
  __typename?: 'HubChatCreateSystemMessagePayload';
  chatMessage: HubChatMessage;
};

export type HubChatCreateUserMessageInput = {
  body: Scalars['String']['input'];
  clientId: Scalars['UUID']['input'];
};

export type HubChatCreateUserMessagePayload = {
  __typename?: 'HubChatCreateUserMessagePayload';
  result: HubChatCreateUserMessageResult;
};

export type HubChatCreateUserMessageResult = HubChatCreateUserMessageSuccess | HubChatUserMuted | HubChatUserRateLimited;

export type HubChatCreateUserMessageSuccess = {
  __typename?: 'HubChatCreateUserMessageSuccess';
  chatMessage: HubChatMessage;
};

export type HubChatMessage = {
  __typename?: 'HubChatMessage';
  body: Scalars['String']['output'];
  casinoId: Scalars['UUID']['output'];
  clientId: Scalars['UUID']['output'];
  experienceId: Scalars['UUID']['output'];
  hiddenAt?: Maybe<Scalars['Datetime']['output']>;
  /** Reads a single `HubCasino` that is related to this `HubChatMessage`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubExperience` that is related to this `HubChatMessage`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HubChatMessage`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  type: HubChatMessageType;
  userId?: Maybe<Scalars['UUID']['output']>;
};

/**
 * A condition to be used against `HubChatMessage` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type HubChatMessageCondition = {
  /** Get chat messages after a given ID */
  afterId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubChatMessage` values. */
export type HubChatMessageConnection = {
  __typename?: 'HubChatMessageConnection';
  /** A list of edges which contains the `HubChatMessage` and cursor to aid in pagination. */
  edges: Array<Maybe<HubChatMessageEdge>>;
  /** A list of `HubChatMessage` objects. */
  nodes: Array<Maybe<HubChatMessage>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubChatMessage` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubChatMessage` edge in the connection. */
export type HubChatMessageEdge = {
  __typename?: 'HubChatMessageEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubChatMessage` at the end of the edge. */
  node?: Maybe<HubChatMessage>;
};

/** Methods to use when ordering `HubChatMessage`. */
export enum HubChatMessageOrderBy {
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

export enum HubChatMessageType {
  System = 'system',
  User = 'user'
}

export type HubChatMod = {
  __typename?: 'HubChatMod';
  casinoId: Scalars['UUID']['output'];
  experienceId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubChatMod`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubExperience` that is related to this `HubChatMod`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HubChatMod`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `HubChatMod` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HubChatModCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubChatMod` values. */
export type HubChatModConnection = {
  __typename?: 'HubChatModConnection';
  /** A list of edges which contains the `HubChatMod` and cursor to aid in pagination. */
  edges: Array<Maybe<HubChatModEdge>>;
  /** A list of `HubChatMod` objects. */
  nodes: Array<Maybe<HubChatMod>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubChatMod` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubChatMod` edge in the connection. */
export type HubChatModEdge = {
  __typename?: 'HubChatModEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubChatMod` at the end of the edge. */
  node?: Maybe<HubChatMod>;
};

/** Methods to use when ordering `HubChatMod`. */
export enum HubChatModOrderBy {
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

export type HubChatMute = {
  __typename?: 'HubChatMute';
  casinoId: Scalars['UUID']['output'];
  experienceId: Scalars['UUID']['output'];
  expiredAt?: Maybe<Scalars['Datetime']['output']>;
  /** Reads a single `HubCasino` that is related to this `HubChatMute`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubExperience` that is related to this `HubChatMute`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HubChatMute`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  revokedAt?: Maybe<Scalars['Datetime']['output']>;
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `HubChatMute` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HubChatMuteCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubChatMute` values. */
export type HubChatMuteConnection = {
  __typename?: 'HubChatMuteConnection';
  /** A list of edges which contains the `HubChatMute` and cursor to aid in pagination. */
  edges: Array<Maybe<HubChatMuteEdge>>;
  /** A list of `HubChatMute` objects. */
  nodes: Array<Maybe<HubChatMute>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubChatMute` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubChatMute` edge in the connection. */
export type HubChatMuteEdge = {
  __typename?: 'HubChatMuteEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubChatMute` at the end of the edge. */
  node?: Maybe<HubChatMute>;
};

/** Methods to use when ordering `HubChatMute`. */
export enum HubChatMuteOrderBy {
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

export type HubChatMuteUserInput = {
  expiredAt?: InputMaybe<Scalars['Datetime']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['UUID']['input'];
};

export type HubChatMuteUserPayload = {
  __typename?: 'HubChatMuteUserPayload';
  chatMute: HubChatMute;
};

export type HubChatRemoveModInput = {
  experienceId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

export type HubChatRemoveModPayload = {
  __typename?: 'HubChatRemoveModPayload';
  _?: Maybe<Scalars['Boolean']['output']>;
};

export type HubChatSubscriptionMuted = {
  __typename?: 'HubChatSubscriptionMuted';
  _?: Maybe<Scalars['Boolean']['output']>;
};

export type HubChatSubscriptionNewMessage = {
  __typename?: 'HubChatSubscriptionNewMessage';
  chatMessage: HubChatMessage;
};

export type HubChatSubscriptionPayload = HubChatSubscriptionMuted | HubChatSubscriptionNewMessage | HubChatSubscriptionUnmuted;

export type HubChatSubscriptionUnmuted = {
  __typename?: 'HubChatSubscriptionUnmuted';
  _?: Maybe<Scalars['Boolean']['output']>;
};

export type HubChatUnmuteUserInput = {
  userId: Scalars['UUID']['input'];
};

export type HubChatUnmuteUserPayload = {
  __typename?: 'HubChatUnmuteUserPayload';
  chatMute: HubChatMute;
};

export type HubChatUserMuted = {
  __typename?: 'HubChatUserMuted';
  message?: Maybe<Scalars['String']['output']>;
};

export type HubChatUserRateLimited = {
  __typename?: 'HubChatUserRateLimited';
  message?: Maybe<Scalars['String']['output']>;
};

export type HubCreateHashChainPayload = {
  __typename?: 'HubCreateHashChainPayload';
  hashChain: HubHashChain;
};

export type HubCreatePlaygroundSessionInput = {
  experienceClientId?: InputMaybe<Scalars['UUID']['input']>;
  userClientId?: InputMaybe<Scalars['UUID']['input']>;
};

export type HubCurrency = {
  __typename?: 'HubCurrency';
  casinoId: Scalars['UUID']['output'];
  displayUnitName: Scalars['String']['output'];
  displayUnitScale: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `HubBalance`. */
  hubBalancesByCurrencyKeyAndCasinoId: HubBalanceConnection;
  /** Reads and enables pagination through a set of `HubBankroll`. */
  hubBankrollsByCurrencyKeyAndCasinoId: HubBankrollConnection;
  /** Reads a single `HubCasino` that is related to this `HubCurrency`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  key: Scalars['String']['output'];
};


export type HubCurrencyHubBalancesByCurrencyKeyAndCasinoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubBalanceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubBalanceOrderBy>>;
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
  /** Checks for equality with the object’s `mpTransferId` field. */
  mpTransferId?: InputMaybe<Scalars['String']['input']>;
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
  MpTransferIdAsc = 'MP_TRANSFER_ID_ASC',
  MpTransferIdDesc = 'MP_TRANSFER_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type HubExperience = {
  __typename?: 'HubExperience';
  casinoId: Scalars['UUID']['output'];
  clientId?: Maybe<Scalars['UUID']['output']>;
  /** Reads and enables pagination through a set of `HashChain`. */
  hashChainsByExperienceId: HashChainConnection;
  /** Reads and enables pagination through a set of `Hash`. */
  hashesByExperienceId: HashConnection;
  /** Reads and enables pagination through a set of `HubBalance`. */
  hubBalancesByExperienceId: HubBalanceConnection;
  /** Reads a single `HubCasino` that is related to this `HubExperience`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads and enables pagination through a set of `HubChatMessage`. */
  hubChatMessagesByExperienceId: HubChatMessageConnection;
  /** Reads and enables pagination through a set of `HubChatMod`. */
  hubChatModsByExperienceId: HubChatModConnection;
  /** Reads and enables pagination through a set of `HubChatMute`. */
  hubChatMutesByExperienceId: HubChatMuteConnection;
  /** Reads and enables pagination through a set of `HubDeposit`. */
  hubDepositsByExperienceId: HubDepositConnection;
  /** Reads and enables pagination through a set of `HubFaucetClaim`. */
  hubFaucetClaimsByExperienceId: HubFaucetClaimConnection;
  /** Reads and enables pagination through a set of `HubHashChain`. */
  hubHashChainsByExperienceId: HubHashChainConnection;
  /** Reads and enables pagination through a set of `HubOutcomeBet`. */
  hubOutcomeBetsByExperienceId: HubOutcomeBetConnection;
  /** Reads and enables pagination through a set of `HubSession`. */
  hubSessionsByExperienceId: HubSessionConnection;
  /** Reads and enables pagination through a set of `HubTakeRequest`. */
  hubTakeRequestsByExperienceId: HubTakeRequestConnection;
  /** Reads a single `HubUser` that is related to this `HubExperience`. */
  hubUserByUserId?: Maybe<HubUser>;
  /** Reads and enables pagination through a set of `HubWithdrawalRequest`. */
  hubWithdrawalRequestsByExperienceId: HubWithdrawalRequestConnection;
  /** Reads and enables pagination through a set of `HubWithdrawal`. */
  hubWithdrawalsByExperienceId: HubWithdrawalConnection;
  id: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `MinesGame`. */
  minesGamesByExperienceId: MinesGameConnection;
  /** Reads and enables pagination through a set of `MinesMove`. */
  minesMovesByExperienceId: MinesMoveConnection;
  mpExperienceId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  userId?: Maybe<Scalars['UUID']['output']>;
};


export type HubExperienceHashChainsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HashChainCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HashChainOrderBy>>;
};


export type HubExperienceHashesByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HashCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HashOrderBy>>;
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


export type HubExperienceHubChatMessagesByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubChatMessageOrderBy>>;
};


export type HubExperienceHubChatModsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubChatModCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubChatModOrderBy>>;
};


export type HubExperienceHubChatMutesByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubChatMuteCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubChatMuteOrderBy>>;
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


export type HubExperienceHubHashChainsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubHashChainCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubHashChainOrderBy>>;
};


export type HubExperienceHubOutcomeBetsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubOutcomeBetCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubOutcomeBetOrderBy>>;
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


export type HubExperienceHubTakeRequestsByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubTakeRequestCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubTakeRequestOrderBy>>;
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


export type HubExperienceMinesGamesByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MinesGameCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinesGameOrderBy>>;
};


export type HubExperienceMinesMovesByExperienceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MinesMoveCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinesMoveOrderBy>>;
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

export type HubHash = {
  __typename?: 'HubHash';
  clientSeed?: Maybe<Scalars['String']['output']>;
  digest: Scalars['Base64EncodedBinary']['output'];
  hashChainId: Scalars['UUID']['output'];
  /** Reads a single `HubHashChain` that is related to this `HubHash`. */
  hubHashChainByHashChainId?: Maybe<HubHashChain>;
  /** Reads and enables pagination through a set of `HubOutcomeBet`. */
  hubOutcomeBetsByHashId: HubOutcomeBetConnection;
  id: Scalars['UUID']['output'];
  iteration: Scalars['Int']['output'];
  kind: HubHashKind;
  metadata: Scalars['JSON']['output'];
  /** Reads and enables pagination through a set of `MinesGame`. */
  minesGamesByHashId: MinesGameConnection;
  /** Reads and enables pagination through a set of `MinesMove`. */
  minesMovesByHashId: MinesMoveConnection;
};


export type HubHashHubOutcomeBetsByHashIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubOutcomeBetCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubOutcomeBetOrderBy>>;
};


export type HubHashMinesGamesByHashIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MinesGameCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinesGameOrderBy>>;
};


export type HubHashMinesMovesByHashIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MinesMoveCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinesMoveOrderBy>>;
};

export type HubHashChain = {
  __typename?: 'HubHashChain';
  active: Scalars['Boolean']['output'];
  casinoId: Scalars['UUID']['output'];
  currentIteration: Scalars['Int']['output'];
  experienceId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubHashChain`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubExperience` that is related to this `HubHashChain`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads and enables pagination through a set of `HubHash`. */
  hubHashesByHashChainId: HubHashConnection;
  /** Reads a single `HubUser` that is related to this `HubHashChain`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  maxIteration: Scalars['Int']['output'];
  preimageHash?: Maybe<HubHash>;
  userId: Scalars['UUID']['output'];
};


export type HubHashChainHubHashesByHashChainIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubHashCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubHashOrderBy>>;
};

/**
 * A condition to be used against `HubHashChain` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type HubHashChainCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubHashChain` values. */
export type HubHashChainConnection = {
  __typename?: 'HubHashChainConnection';
  /** A list of edges which contains the `HubHashChain` and cursor to aid in pagination. */
  edges: Array<Maybe<HubHashChainEdge>>;
  /** A list of `HubHashChain` objects. */
  nodes: Array<Maybe<HubHashChain>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubHashChain` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubHashChain` edge in the connection. */
export type HubHashChainEdge = {
  __typename?: 'HubHashChainEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubHashChain` at the end of the edge. */
  node?: Maybe<HubHashChain>;
};

/** Methods to use when ordering `HubHashChain`. */
export enum HubHashChainOrderBy {
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

/** A condition to be used against `HubHash` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type HubHashCondition = {
  /** Checks for equality with the object’s `hashChainId` field. */
  hashChainId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `iteration` field. */
  iteration?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `HubHash` values. */
export type HubHashConnection = {
  __typename?: 'HubHashConnection';
  /** A list of edges which contains the `HubHash` and cursor to aid in pagination. */
  edges: Array<Maybe<HubHashEdge>>;
  /** A list of `HubHash` objects. */
  nodes: Array<Maybe<HubHash>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubHash` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubHash` edge in the connection. */
export type HubHashEdge = {
  __typename?: 'HubHashEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubHash` at the end of the edge. */
  node?: Maybe<HubHash>;
};

export enum HubHashKind {
  Intermediate = 'INTERMEDIATE',
  Preimage = 'PREIMAGE',
  Terminal = 'TERMINAL'
}

/** Methods to use when ordering `HubHash`. */
export enum HubHashOrderBy {
  HashChainIdAsc = 'HASH_CHAIN_ID_ASC',
  HashChainIdDesc = 'HASH_CHAIN_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IterationAsc = 'ITERATION_ASC',
  IterationDesc = 'ITERATION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
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

export type HubMakeOutcomeBetInput = {
  clientSeed: Scalars['String']['input'];
  currency: Scalars['String']['input'];
  hashChainId: Scalars['UUID']['input'];
  kind: OutcomeBetKind;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  outcomes: Array<HubOutcomeInput>;
  wager: Scalars['Int']['input'];
};

export type HubMakeOutcomeBetPayload = {
  __typename?: 'HubMakeOutcomeBetPayload';
  result: HubMakeOutcomeBetResult;
};

export type HubMakeOutcomeBetResult = HubBadHashChainError | HubMakeOutcomeBetSuccess | HubRiskError;

export type HubMakeOutcomeBetSuccess = {
  __typename?: 'HubMakeOutcomeBetSuccess';
  bet: HubOutcomeBet;
};

export enum HubMpTakeRequestStatus {
  ControllerRejected = 'CONTROLLER_REJECTED',
  Pending = 'PENDING',
  Transferred = 'TRANSFERRED',
  UserCanceled = 'USER_CANCELED'
}

export enum HubMpTransferStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Unclaimed = 'UNCLAIMED'
}

export type HubOutcome = {
  __typename?: 'HubOutcome';
  profit?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type HubOutcomeBet = {
  __typename?: 'HubOutcomeBet';
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  experienceId: Scalars['UUID']['output'];
  hashId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubOutcomeBet`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubCurrency` that is related to this `HubOutcomeBet`. */
  hubCurrencyByCurrencyKeyAndCasinoId?: Maybe<HubCurrency>;
  /** Reads a single `HubExperience` that is related to this `HubOutcomeBet`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubHash` that is related to this `HubOutcomeBet`. */
  hubHashByHashId?: Maybe<HubHash>;
  /** Reads a single `HubUser` that is related to this `HubOutcomeBet`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  kind: Scalars['String']['output'];
  metadata: Scalars['JSON']['output'];
  outcomeIdx?: Maybe<Scalars['Int']['output']>;
  outcomes: Array<Maybe<HubOutcome>>;
  profit: Scalars['Float']['output'];
  userId: Scalars['UUID']['output'];
  wager: Scalars['Float']['output'];
};

/**
 * A condition to be used against `HubOutcomeBet` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type HubOutcomeBetCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `hashId` field. */
  hashId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `kind` field. */
  kind?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubOutcomeBet` values. */
export type HubOutcomeBetConnection = {
  __typename?: 'HubOutcomeBetConnection';
  /** A list of edges which contains the `HubOutcomeBet` and cursor to aid in pagination. */
  edges: Array<Maybe<HubOutcomeBetEdge>>;
  /** A list of `HubOutcomeBet` objects. */
  nodes: Array<Maybe<HubOutcomeBet>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubOutcomeBet` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubOutcomeBet` edge in the connection. */
export type HubOutcomeBetEdge = {
  __typename?: 'HubOutcomeBetEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubOutcomeBet` at the end of the edge. */
  node?: Maybe<HubOutcomeBet>;
};

/** Methods to use when ordering `HubOutcomeBet`. */
export enum HubOutcomeBetOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  HashIdAsc = 'HASH_ID_ASC',
  HashIdDesc = 'HASH_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KindAsc = 'KIND_ASC',
  KindDesc = 'KIND_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** An input for mutations affecting `HubOutcome` */
export type HubOutcomeInput = {
  profit: Scalars['Float']['input'];
  weight: Scalars['Float']['input'];
};

export type HubPutAlertPayload = {
  __typename?: 'HubPutAlertPayload';
  currencyKey: Scalars['String']['output'];
  mpTransferId: Scalars['UUID']['output'];
};

export type HubRevealHashChainInput = {
  hashChainId: Scalars['UUID']['input'];
};

export type HubRevealHashChainPayload = {
  __typename?: 'HubRevealHashChainPayload';
  preimageHash: HubHash;
};

export type HubRiskError = {
  __typename?: 'HubRiskError';
  message: Scalars['String']['output'];
  riskLimits: HubRiskLimit;
};

export type HubRiskLimit = {
  __typename?: 'HubRiskLimit';
  maxPayout: Scalars['Float']['output'];
};

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

export type HubTakeRequest = {
  __typename?: 'HubTakeRequest';
  amount?: Maybe<Scalars['Float']['output']>;
  casinoId: Scalars['UUID']['output'];
  completionAttemptCount?: Maybe<Scalars['Int']['output']>;
  currencyKey: Scalars['String']['output'];
  debug?: Maybe<Scalars['String']['output']>;
  experienceId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `HubTakeRequest`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubCurrency` that is related to this `HubTakeRequest`. */
  hubCurrencyByCurrencyKeyAndCasinoId?: Maybe<HubCurrency>;
  /** Reads a single `HubExperience` that is related to this `HubTakeRequest`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubUser` that is related to this `HubTakeRequest`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  insufficientBalanceError?: Maybe<Scalars['Boolean']['output']>;
  mpStatus: HubMpTakeRequestStatus;
  mpTakeRequestId: Scalars['UUID']['output'];
  mpTransferId?: Maybe<Scalars['UUID']['output']>;
  mpTransferStatus?: Maybe<HubMpTransferStatus>;
  refundedAt?: Maybe<Scalars['Datetime']['output']>;
  reservedAmount: Scalars['Float']['output'];
  status: HubTakeRequestStatus;
  statusChangedAt: Scalars['Datetime']['output'];
  transferCompletionAttemptedAt?: Maybe<Scalars['Datetime']['output']>;
  transferNeedsCompletion: Scalars['Boolean']['output'];
  updatedAt: Scalars['Datetime']['output'];
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `HubTakeRequest` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type HubTakeRequestCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `mpTakeRequestId` field. */
  mpTakeRequestId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<HubTakeRequestStatus>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `HubTakeRequest` values. */
export type HubTakeRequestConnection = {
  __typename?: 'HubTakeRequestConnection';
  /** A list of edges which contains the `HubTakeRequest` and cursor to aid in pagination. */
  edges: Array<Maybe<HubTakeRequestEdge>>;
  /** A list of `HubTakeRequest` objects. */
  nodes: Array<Maybe<HubTakeRequest>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `HubTakeRequest` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `HubTakeRequest` edge in the connection. */
export type HubTakeRequestEdge = {
  __typename?: 'HubTakeRequestEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `HubTakeRequest` at the end of the edge. */
  node?: Maybe<HubTakeRequest>;
};

/** Methods to use when ordering `HubTakeRequest`. */
export enum HubTakeRequestOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MpTakeRequestIdAsc = 'MP_TAKE_REQUEST_ID_ASC',
  MpTakeRequestIdDesc = 'MP_TAKE_REQUEST_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export enum HubTakeRequestStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Rejected = 'REJECTED'
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
  activeHashChain?: Maybe<HubHashChain>;
  activeMinesGame?: Maybe<MinesGame>;
  casinoId: Scalars['UUID']['output'];
  clientId?: Maybe<Scalars['UUID']['output']>;
  /** Reads and enables pagination through a set of `HashChain`. */
  hashChainsByUserId: HashChainConnection;
  /** Reads and enables pagination through a set of `Hash`. */
  hashesByUserId: HashConnection;
  hubBalanceByCurrency?: Maybe<HubBalance>;
  /** Reads and enables pagination through a set of `HubBalance`. */
  hubBalancesByUserId: HubBalanceConnection;
  /** Reads a single `HubCasino` that is related to this `HubUser`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads and enables pagination through a set of `HubChatMessage`. */
  hubChatMessagesByUserId: HubChatMessageConnection;
  /** Reads and enables pagination through a set of `HubChatMod`. */
  hubChatModsByUserId: HubChatModConnection;
  /** Reads and enables pagination through a set of `HubChatMute`. */
  hubChatMutesByUserId: HubChatMuteConnection;
  /** Reads and enables pagination through a set of `HubDeposit`. */
  hubDepositsByUserId: HubDepositConnection;
  /** Reads and enables pagination through a set of `HubFaucetClaim`. */
  hubFaucetClaimsByUserId: HubFaucetClaimConnection;
  /** Reads and enables pagination through a set of `HubHashChain`. */
  hubHashChainsByUserId: HubHashChainConnection;
  /** Reads and enables pagination through a set of `HubOutcomeBet`. */
  hubOutcomeBetsByUserId: HubOutcomeBetConnection;
  /** Reads and enables pagination through a set of `HubSession`. */
  hubSessionsByUserId: HubSessionConnection;
  /** Reads and enables pagination through a set of `HubTakeRequest`. */
  hubTakeRequestsByUserId: HubTakeRequestConnection;
  /** Reads and enables pagination through a set of `HubWithdrawalRequest`. */
  hubWithdrawalRequestsByUserId: HubWithdrawalRequestConnection;
  /** Reads and enables pagination through a set of `HubWithdrawal`. */
  hubWithdrawalsByUserId: HubWithdrawalConnection;
  id: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `MinesGame`. */
  minesGamesByUserId: MinesGameConnection;
  /** Reads and enables pagination through a set of `MinesMove`. */
  minesMovesByUserId: MinesMoveConnection;
  mpUserId: Scalars['UUID']['output'];
  uname: Scalars['String']['output'];
};


export type HubUserHashChainsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HashChainCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HashChainOrderBy>>;
};


export type HubUserHashesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HashCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HashOrderBy>>;
};


export type HubUserHubBalanceByCurrencyArgs = {
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


export type HubUserHubChatMessagesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubChatMessageOrderBy>>;
};


export type HubUserHubChatModsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubChatModCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubChatModOrderBy>>;
};


export type HubUserHubChatMutesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubChatMuteCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubChatMuteOrderBy>>;
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


export type HubUserHubHashChainsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubHashChainCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubHashChainOrderBy>>;
};


export type HubUserHubOutcomeBetsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubOutcomeBetCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubOutcomeBetOrderBy>>;
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


export type HubUserHubTakeRequestsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<HubTakeRequestCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HubTakeRequestOrderBy>>;
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


export type HubUserMinesGamesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MinesGameCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinesGameOrderBy>>;
};


export type HubUserMinesMovesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MinesMoveCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinesMoveOrderBy>>;
};

/** A condition to be used against `HubUser` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type HubUserCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `mpUserId` field. */
  mpUserId?: InputMaybe<Scalars['UUID']['input']>;
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
  MpUserIdAsc = 'MP_USER_ID_ASC',
  MpUserIdDesc = 'MP_USER_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

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
  /** Checks for equality with the object’s `mpTransferId` field. */
  mpTransferId?: InputMaybe<Scalars['String']['input']>;
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
  MpTransferIdAsc = 'MP_TRANSFER_ID_ASC',
  MpTransferIdDesc = 'MP_TRANSFER_ID_DESC',
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

export type MakeMinesMoveInput = {
  cellIndex: Scalars['Int']['input'];
  clientSeed: Scalars['String']['input'];
  gameId: Scalars['UUID']['input'];
  hashChainId: Scalars['UUID']['input'];
};

export type MakeMinesMoveOk = {
  __typename?: 'MakeMinesMoveOk';
  minesGame: MinesGame;
  minesMove: MinesMove;
};

export type MakeMinesMovePayload = {
  __typename?: 'MakeMinesMovePayload';
  result: MakeMinesMoveResult;
};

export type MakeMinesMoveResult = HubBadHashChainError | MakeMinesMoveOk;

export type MinesGame = {
  __typename?: 'MinesGame';
  casinoId: Scalars['UUID']['output'];
  currencyKey: Scalars['String']['output'];
  endedAt?: Maybe<Scalars['Datetime']['output']>;
  experienceId: Scalars['UUID']['output'];
  gridSize: Scalars['Int']['output'];
  hashId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `MinesGame`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubCurrency` that is related to this `MinesGame`. */
  hubCurrencyByCurrencyKeyAndCasinoId?: Maybe<HubCurrency>;
  /** Reads a single `HubExperience` that is related to this `MinesGame`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubHash` that is related to this `MinesGame`. */
  hubHashByHashId?: Maybe<HubHash>;
  /** Reads a single `HubUser` that is related to this `MinesGame`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  mines: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `MinesMove`. */
  minesMovesByGameId: MinesMoveConnection;
  status: MinesGameStatus;
  userId: Scalars['UUID']['output'];
  wager: Scalars['Float']['output'];
};


export type MinesGameMinesMovesByGameIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MinesMoveCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinesMoveOrderBy>>;
};

export type MinesGameCashoutPayload = {
  __typename?: 'MinesGameCashoutPayload';
  minesGame: MinesGame;
};

/**
 * A condition to be used against `MinesGame` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MinesGameCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `hashId` field. */
  hashId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `MinesGame` values. */
export type MinesGameConnection = {
  __typename?: 'MinesGameConnection';
  /** A list of edges which contains the `MinesGame` and cursor to aid in pagination. */
  edges: Array<Maybe<MinesGameEdge>>;
  /** A list of `MinesGame` objects. */
  nodes: Array<Maybe<MinesGame>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MinesGame` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `MinesGame` edge in the connection. */
export type MinesGameEdge = {
  __typename?: 'MinesGameEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `MinesGame` at the end of the edge. */
  node?: Maybe<MinesGame>;
};

export type MinesGameInProgress = {
  __typename?: 'MinesGameInProgress';
  minesGame: MinesGame;
};

/** Methods to use when ordering `MinesGame`. */
export enum MinesGameOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  HashIdAsc = 'HASH_ID_ASC',
  HashIdDesc = 'HASH_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type MinesGameStarted = {
  __typename?: 'MinesGameStarted';
  minesGame: MinesGame;
};

export enum MinesGameStatus {
  Active = 'ACTIVE',
  Bust = 'BUST',
  Cashout = 'CASHOUT'
}

export type MinesMove = {
  __typename?: 'MinesMove';
  casinoId: Scalars['UUID']['output'];
  cellIndex: Scalars['Int']['output'];
  experienceId: Scalars['UUID']['output'];
  finalHash: Scalars['Base64EncodedBinary']['output'];
  gameId: Scalars['UUID']['output'];
  hashId: Scalars['UUID']['output'];
  /** Reads a single `HubCasino` that is related to this `MinesMove`. */
  hubCasinoByCasinoId?: Maybe<HubCasino>;
  /** Reads a single `HubExperience` that is related to this `MinesMove`. */
  hubExperienceByExperienceId?: Maybe<HubExperience>;
  /** Reads a single `HubHash` that is related to this `MinesMove`. */
  hubHashByHashId?: Maybe<HubHash>;
  /** Reads a single `HubUser` that is related to this `MinesMove`. */
  hubUserByUserId?: Maybe<HubUser>;
  id: Scalars['UUID']['output'];
  /** Reads a single `MinesGame` that is related to this `MinesMove`. */
  minesGameByGameId?: Maybe<MinesGame>;
  outcome: MinesMoveOutcome;
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `MinesMove` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MinesMoveCondition = {
  /** Checks for equality with the object’s `casinoId` field. */
  casinoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `cellIndex` field. */
  cellIndex?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `experienceId` field. */
  experienceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `hashId` field. */
  hashId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `MinesMove` values. */
export type MinesMoveConnection = {
  __typename?: 'MinesMoveConnection';
  /** A list of edges which contains the `MinesMove` and cursor to aid in pagination. */
  edges: Array<Maybe<MinesMoveEdge>>;
  /** A list of `MinesMove` objects. */
  nodes: Array<Maybe<MinesMove>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MinesMove` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `MinesMove` edge in the connection. */
export type MinesMoveEdge = {
  __typename?: 'MinesMoveEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `MinesMove` at the end of the edge. */
  node?: Maybe<MinesMove>;
};

/** Methods to use when ordering `MinesMove`. */
export enum MinesMoveOrderBy {
  CasinoIdAsc = 'CASINO_ID_ASC',
  CasinoIdDesc = 'CASINO_ID_DESC',
  CellIndexAsc = 'CELL_INDEX_ASC',
  CellIndexDesc = 'CELL_INDEX_DESC',
  ExperienceIdAsc = 'EXPERIENCE_ID_ASC',
  ExperienceIdDesc = 'EXPERIENCE_ID_DESC',
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  HashIdAsc = 'HASH_ID_ASC',
  HashIdDesc = 'HASH_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export enum MinesMoveOutcome {
  Gem = 'GEM',
  Mine = 'MINE'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  cashoutMinesGame: MinesGameCashoutPayload;
  hubAddCasino?: Maybe<HubAddCasinoPayload>;
  hubAuthenticate?: Maybe<HubAuthenticatePayload>;
  hubChatAddMod?: Maybe<HubChatAddModPayload>;
  hubChatCreateSystemMessage?: Maybe<HubChatCreateSystemMessagePayload>;
  hubChatCreateUserMessage?: Maybe<HubChatCreateUserMessagePayload>;
  hubChatMuteUser?: Maybe<HubChatMuteUserPayload>;
  hubChatRemoveMod?: Maybe<HubChatRemoveModPayload>;
  hubChatUnmuteUser?: Maybe<HubChatUnmuteUserPayload>;
  hubCreateHashChain: HubCreateHashChainPayload;
  hubCreatePlaygroundSession?: Maybe<HubAuthenticatePayload>;
  hubMakeOutcomeBet?: Maybe<HubMakeOutcomeBetPayload>;
  hubRevealHashChain: HubRevealHashChainPayload;
  makeMinesMove: MakeMinesMovePayload;
  startMinesGame: StartMinesGamePayload;
  /** Updates a single `HubBankroll` using a unique key and a patch. */
  updateHubBankrollById?: Maybe<UpdateHubBankrollPayload>;
  /** Updates a single `HubCasino` using a unique key and a patch. */
  updateHubCasinoById?: Maybe<UpdateHubCasinoPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCashoutMinesGameArgs = {
  input: CashoutMinesGameInput;
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
export type MutationHubChatAddModArgs = {
  input: HubChatAddModInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubChatCreateSystemMessageArgs = {
  input: HubChatCreateSystemMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubChatCreateUserMessageArgs = {
  input: HubChatCreateUserMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubChatMuteUserArgs = {
  input: HubChatMuteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubChatRemoveModArgs = {
  input: HubChatRemoveModInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubChatUnmuteUserArgs = {
  input: HubChatUnmuteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubCreatePlaygroundSessionArgs = {
  input: HubCreatePlaygroundSessionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubMakeOutcomeBetArgs = {
  input: HubMakeOutcomeBetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationHubRevealHashChainArgs = {
  input: HubRevealHashChainInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMakeMinesMoveArgs = {
  input: MakeMinesMoveInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationStartMinesGameArgs = {
  input: StartMinesGameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateHubBankrollByIdArgs = {
  input: UpdateHubBankrollByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateHubCasinoByIdArgs = {
  input: UpdateHubCasinoByIdInput;
};

export enum OutcomeBetKind {
  Coinflip = 'COINFLIP',
  CrashDice = 'CRASH_DICE',
  General = 'GENERAL',
  Pachinko = 'PACHINKO',
  Wheel = 'WHEEL'
}

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
  /** Get a single `Hash`. */
  hashById?: Maybe<Hash>;
  /** Get a single `HashChain`. */
  hashChainById?: Maybe<HashChain>;
  /** Get a single `HubApiKey`. */
  hubApiKeyById?: Maybe<HubApiKey>;
  /** Get a single `HubApiKey`. */
  hubApiKeyByKey?: Maybe<HubApiKey>;
  /** Get a single `HubBalance`. */
  hubBalanceById?: Maybe<HubBalance>;
  /** Get a single `HubBankroll`. */
  hubBankrollById?: Maybe<HubBankroll>;
  /** Get a single `HubCasino`. */
  hubCasinoById?: Maybe<HubCasino>;
  /** Get a single `HubCasinoSecret`. */
  hubCasinoSecretById?: Maybe<HubCasinoSecret>;
  /** Get a single `HubChatMessage`. */
  hubChatMessageById?: Maybe<HubChatMessage>;
  /** Get a single `HubChatMod`. */
  hubChatModById?: Maybe<HubChatMod>;
  /** Get a single `HubChatMute`. */
  hubChatMuteById?: Maybe<HubChatMute>;
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
  /** Get a single `HubHash`. */
  hubHashById?: Maybe<HubHash>;
  /** Get a single `HubHashChain`. */
  hubHashChainById?: Maybe<HubHashChain>;
  /** Get a single `HubJwkSet`. */
  hubJwkSetByCasinoId?: Maybe<HubJwkSet>;
  /** Get a single `HubJwkSetSnapshot`. */
  hubJwkSetSnapshotById?: Maybe<HubJwkSetSnapshot>;
  /** Get a single `HubOutcomeBet`. */
  hubOutcomeBetById?: Maybe<HubOutcomeBet>;
  hubRiskLimits: Array<HubBulkRiskLimit>;
  /** Get a single `HubSession`. */
  hubSessionById?: Maybe<HubSession>;
  /** Get a single `HubTakeRequest`. */
  hubTakeRequestById?: Maybe<HubTakeRequest>;
  /** Get a single `HubTakeRequest`. */
  hubTakeRequestByMpTakeRequestId?: Maybe<HubTakeRequest>;
  /** Get a single `HubUser`. */
  hubUserById?: Maybe<HubUser>;
  /** Get a single `HubWithdrawal`. */
  hubWithdrawalById?: Maybe<HubWithdrawal>;
  /** Get a single `HubWithdrawalRequest`. */
  hubWithdrawalRequestById?: Maybe<HubWithdrawalRequest>;
  meaningOfLife: Scalars['Int']['output'];
  /** Get a single `MinesGame`. */
  minesGameById?: Maybe<MinesGame>;
  /** Get a single `MinesMove`. */
  minesMoveByGameIdAndCellIndex?: Maybe<MinesMove>;
  /** Get a single `MinesMove`. */
  minesMoveById?: Maybe<MinesMove>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
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
export type QueryHashByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHashChainByIdArgs = {
  id: Scalars['UUID']['input'];
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
export type QueryHubBalanceByIdArgs = {
  id: Scalars['UUID']['input'];
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
export type QueryHubChatMessageByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubChatModByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubChatMuteByIdArgs = {
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
export type QueryHubHashByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubHashChainByIdArgs = {
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
export type QueryHubOutcomeBetByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubRiskLimitsArgs = {
  gameKinds: Array<AnyGameKind>;
};


/** The root query type which gives access points into the data universe. */
export type QueryHubSessionByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubTakeRequestByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryHubTakeRequestByMpTakeRequestIdArgs = {
  mpTakeRequestId: Scalars['UUID']['input'];
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
export type QueryMinesGameByIdArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMinesMoveByGameIdAndCellIndexArgs = {
  cellIndex: Scalars['Int']['input'];
  gameId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMinesMoveByIdArgs = {
  id: Scalars['UUID']['input'];
};

export type StartMinesGameInput = {
  clientSeed: Scalars['String']['input'];
  currency: Scalars['String']['input'];
  gridSize: Scalars['Int']['input'];
  hashChainId: Scalars['UUID']['input'];
  mines: Scalars['Int']['input'];
  wager: Scalars['Int']['input'];
};

export type StartMinesGamePayload = {
  __typename?: 'StartMinesGamePayload';
  result: StartMinesGameResult;
};

export type StartMinesGameResult = HubBadHashChainError | HubRiskError | MinesGameInProgress | MinesGameStarted;

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type Subscription = {
  __typename?: 'Subscription';
  hubBalanceAlert?: Maybe<HubBalanceAlertPayload>;
  hubChatAlert?: Maybe<HubChatSubscriptionPayload>;
  hubPutAlert?: Maybe<HubPutAlertPayload>;
};

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
