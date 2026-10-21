import { gql } from "graphql-request";

export const CATEGORIES_QUERY = gql`
  query NewQuery {
    categories(first: 100) {
      nodes {
        slug
        name
        id
        uri
      }
    }
  }
`;
