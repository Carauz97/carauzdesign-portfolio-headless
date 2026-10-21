import { GraphQLClient } from "graphql-request";

const baseUrlWordpress = process.env.WORDPRESS_BASE_URL;

export const wpClient = new GraphQLClient(`${baseUrlWordpress}/graphql`);
