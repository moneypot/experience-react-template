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
const documents = {
    "\n  mutation Authenticate($casinoBaseUrl: String!, $userToken: String!) {\n    caasAuthenticate(\n      input: { casinoBaseUrl: $casinoBaseUrl, userToken: $userToken }\n    ) {\n      success {\n        sessionId\n        uname\n        experienceId\n        userId\n      }\n      query {\n        caasCurrentUser {\n          balances {\n            amount\n            currencyKey\n            caasCurrencyByCurrencyKeyAndCasinoId {\n              displayUnitName\n              displayUnitScale\n            }\n          }\n        }\n      }\n    }\n  }\n": types.AuthenticateDocument,
    "\n  query GetBalances {\n    caasCurrentUser {\n      balances {\n        amount\n        currencyKey\n        caasCurrencyByCurrencyKeyAndCasinoId {\n          key\n          displayUnitScale\n          displayUnitName\n        }\n      }\n    }\n  }\n": types.GetBalancesDocument,
    "\n  mutation Withdraw($amount: Float!, $currencyKey: String!) {\n    caasWithdraw(input: { amount: $amount, currency: $currencyKey }) {\n      withdrawal {\n        id\n      }\n    }\n  }\n": types.WithdrawDocument,
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
export function gql(source: "\n  mutation Authenticate($casinoBaseUrl: String!, $userToken: String!) {\n    caasAuthenticate(\n      input: { casinoBaseUrl: $casinoBaseUrl, userToken: $userToken }\n    ) {\n      success {\n        sessionId\n        uname\n        experienceId\n        userId\n      }\n      query {\n        caasCurrentUser {\n          balances {\n            amount\n            currencyKey\n            caasCurrencyByCurrencyKeyAndCasinoId {\n              displayUnitName\n              displayUnitScale\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Authenticate($casinoBaseUrl: String!, $userToken: String!) {\n    caasAuthenticate(\n      input: { casinoBaseUrl: $casinoBaseUrl, userToken: $userToken }\n    ) {\n      success {\n        sessionId\n        uname\n        experienceId\n        userId\n      }\n      query {\n        caasCurrentUser {\n          balances {\n            amount\n            currencyKey\n            caasCurrencyByCurrencyKeyAndCasinoId {\n              displayUnitName\n              displayUnitScale\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBalances {\n    caasCurrentUser {\n      balances {\n        amount\n        currencyKey\n        caasCurrencyByCurrencyKeyAndCasinoId {\n          key\n          displayUnitScale\n          displayUnitName\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBalances {\n    caasCurrentUser {\n      balances {\n        amount\n        currencyKey\n        caasCurrencyByCurrencyKeyAndCasinoId {\n          key\n          displayUnitScale\n          displayUnitName\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Withdraw($amount: Float!, $currencyKey: String!) {\n    caasWithdraw(input: { amount: $amount, currency: $currencyKey }) {\n      withdrawal {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Withdraw($amount: Float!, $currencyKey: String!) {\n    caasWithdraw(input: { amount: $amount, currency: $currencyKey }) {\n      withdrawal {\n        id\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;