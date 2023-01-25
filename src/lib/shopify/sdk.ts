import { getSdk } from "@/gql";
import { client } from "@/lib/graphql";

export const SDK = getSdk(client);
