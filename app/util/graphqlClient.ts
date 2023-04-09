import { GraphQLClient } from "graphql-request";

const apiUrl =
  "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";

export const client = new GraphQLClient(apiUrl, {
  headers: {
    "digitransit-subscription-key": process.env.NEXT_PUBLIC_API_KEY,
  } as HeadersInit,
});
