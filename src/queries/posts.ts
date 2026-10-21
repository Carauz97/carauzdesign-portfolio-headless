import { gql } from "graphql-request";

export const POSTS_QUERY = gql`
  query GetPosts {
    posts(first: 100) {
      nodes {
        id
        slug
        title
        excerpt
        date
        status
        content(format: RENDERED)
      }
    }
  }
`;

export const POST_BY_SLUG_QUERY = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      excerpt
      date
      status
      content(format: RENDERED)
    }
  }
`;

export const POST_CATEGORIES = gql`
  query NewQuery {
    post(id: $id, idType: ID) {
      categories(first: 10) {
        nodes {
          name
          slug
          uri
        }
      }
    }
  }
`;
