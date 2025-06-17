import { gql } from "../__generated__";
import { HubHashChain } from "../__generated__/graphql";
import { sendGraphQLRequest } from "../graphql";
import { Store } from "../store";

const CREATE_HASH_CHAIN = gql(/* GraphQL */ `
  mutation CreateHashChain {
    hubCreateHashChain {
      hashChain {
        id
      }
    }
  }
`);

export async function createHashChain(
  store: Store
): Promise<HubHashChain["id"]> {
  const result = await sendGraphQLRequest(store, {
    document: CREATE_HASH_CHAIN,
    variables: {},
  });

  const hashChainId = result.hubCreateHashChain?.hashChain?.id;
  store.setActiveHashChainId(hashChainId);

  return hashChainId;
}
