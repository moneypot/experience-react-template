/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation CreateHashChain {\n    hubCreateHashChain {\n      hashChain {\n        id\n      }\n    }\n  }\n": typeof types.CreateHashChainDocument,
    "\n  mutation MakeConiflipBet($input: HubMakeOutcomeBetInput!) {\n    hubMakeOutcomeBet(input: $input) {\n      result {\n        __typename\n        ... on HubBadHashChainError {\n          message\n        }\n        ... on HubMakeOutcomeBetSuccess {\n          __typename\n          bet {\n            id\n            wager\n            profit\n            hubCurrencyByCurrencyKeyAndCasinoId {\n              key\n              displayUnitName\n              displayUnitScale\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.MakeConiflipBetDocument,
    "\n  query GetBalances {\n    hubCurrentUser {\n      hubBalancesByUserId {\n        nodes {\n          amount\n          currencyKey\n          hubCurrencyByCurrencyKeyAndCasinoId {\n            displayUnitName\n            displayUnitScale\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetBalancesDocument,
    "\n  mutation Authenticate($casinoBaseUrl: String!, $userToken: String!) {\n    hubAuthenticate(\n      input: { casinoBaseUrl: $casinoBaseUrl, userToken: $userToken }\n    ) {\n      success {\n        sessionKey\n        uname\n        experienceId\n        userId\n      }\n      query {\n        hubCurrentUser {\n          activeHashChain {\n            id\n          }\n          hubBalancesByUserId {\n            nodes {\n              amount\n              currencyKey\n              hubCurrencyByCurrencyKeyAndCasinoId {\n                displayUnitName\n                displayUnitScale\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.AuthenticateDocument,
    "\n  subscription PutAlert {\n    hubPutAlert {\n      mpTransferId\n    }\n  }\n": typeof types.PutAlertDocument,
    "\n  subscription BalanceChangeAlert {\n    hubBalanceAlert {\n      currencyKey\n    }\n  }\n": typeof types.BalanceChangeAlertDocument,
};
const documents: Documents = {
    "\n  mutation CreateHashChain {\n    hubCreateHashChain {\n      hashChain {\n        id\n      }\n    }\n  }\n": types.CreateHashChainDocument,
    "\n  mutation MakeConiflipBet($input: HubMakeOutcomeBetInput!) {\n    hubMakeOutcomeBet(input: $input) {\n      result {\n        __typename\n        ... on HubBadHashChainError {\n          message\n        }\n        ... on HubMakeOutcomeBetSuccess {\n          __typename\n          bet {\n            id\n            wager\n            profit\n            hubCurrencyByCurrencyKeyAndCasinoId {\n              key\n              displayUnitName\n              displayUnitScale\n            }\n          }\n        }\n      }\n    }\n  }\n": types.MakeConiflipBetDocument,
    "\n  query GetBalances {\n    hubCurrentUser {\n      hubBalancesByUserId {\n        nodes {\n          amount\n          currencyKey\n          hubCurrencyByCurrencyKeyAndCasinoId {\n            displayUnitName\n            displayUnitScale\n          }\n        }\n      }\n    }\n  }\n": types.GetBalancesDocument,
    "\n  mutation Authenticate($casinoBaseUrl: String!, $userToken: String!) {\n    hubAuthenticate(\n      input: { casinoBaseUrl: $casinoBaseUrl, userToken: $userToken }\n    ) {\n      success {\n        sessionKey\n        uname\n        experienceId\n        userId\n      }\n      query {\n        hubCurrentUser {\n          activeHashChain {\n            id\n          }\n          hubBalancesByUserId {\n            nodes {\n              amount\n              currencyKey\n              hubCurrencyByCurrencyKeyAndCasinoId {\n                displayUnitName\n                displayUnitScale\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.AuthenticateDocument,
    "\n  subscription PutAlert {\n    hubPutAlert {\n      mpTransferId\n    }\n  }\n": types.PutAlertDocument,
    "\n  subscription BalanceChangeAlert {\n    hubBalanceAlert {\n      currencyKey\n    }\n  }\n": types.BalanceChangeAlertDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateHashChain {\n    hubCreateHashChain {\n      hashChain {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateHashChain {\n    hubCreateHashChain {\n      hashChain {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MakeConiflipBet($input: HubMakeOutcomeBetInput!) {\n    hubMakeOutcomeBet(input: $input) {\n      result {\n        __typename\n        ... on HubBadHashChainError {\n          message\n        }\n        ... on HubMakeOutcomeBetSuccess {\n          __typename\n          bet {\n            id\n            wager\n            profit\n            hubCurrencyByCurrencyKeyAndCasinoId {\n              key\n              displayUnitName\n              displayUnitScale\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation MakeConiflipBet($input: HubMakeOutcomeBetInput!) {\n    hubMakeOutcomeBet(input: $input) {\n      result {\n        __typename\n        ... on HubBadHashChainError {\n          message\n        }\n        ... on HubMakeOutcomeBetSuccess {\n          __typename\n          bet {\n            id\n            wager\n            profit\n            hubCurrencyByCurrencyKeyAndCasinoId {\n              key\n              displayUnitName\n              displayUnitScale\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBalances {\n    hubCurrentUser {\n      hubBalancesByUserId {\n        nodes {\n          amount\n          currencyKey\n          hubCurrencyByCurrencyKeyAndCasinoId {\n            displayUnitName\n            displayUnitScale\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBalances {\n    hubCurrentUser {\n      hubBalancesByUserId {\n        nodes {\n          amount\n          currencyKey\n          hubCurrencyByCurrencyKeyAndCasinoId {\n            displayUnitName\n            displayUnitScale\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Authenticate($casinoBaseUrl: String!, $userToken: String!) {\n    hubAuthenticate(\n      input: { casinoBaseUrl: $casinoBaseUrl, userToken: $userToken }\n    ) {\n      success {\n        sessionKey\n        uname\n        experienceId\n        userId\n      }\n      query {\n        hubCurrentUser {\n          activeHashChain {\n            id\n          }\n          hubBalancesByUserId {\n            nodes {\n              amount\n              currencyKey\n              hubCurrencyByCurrencyKeyAndCasinoId {\n                displayUnitName\n                displayUnitScale\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Authenticate($casinoBaseUrl: String!, $userToken: String!) {\n    hubAuthenticate(\n      input: { casinoBaseUrl: $casinoBaseUrl, userToken: $userToken }\n    ) {\n      success {\n        sessionKey\n        uname\n        experienceId\n        userId\n      }\n      query {\n        hubCurrentUser {\n          activeHashChain {\n            id\n          }\n          hubBalancesByUserId {\n            nodes {\n              amount\n              currencyKey\n              hubCurrencyByCurrencyKeyAndCasinoId {\n                displayUnitName\n                displayUnitScale\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription PutAlert {\n    hubPutAlert {\n      mpTransferId\n    }\n  }\n"): (typeof documents)["\n  subscription PutAlert {\n    hubPutAlert {\n      mpTransferId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription BalanceChangeAlert {\n    hubBalanceAlert {\n      currencyKey\n    }\n  }\n"): (typeof documents)["\n  subscription BalanceChangeAlert {\n    hubBalanceAlert {\n      currencyKey\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;