import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./graphql-schema.json",
  documents: ["src/gql/fragments/**/*.graphql", "src/gql/queries/**/*.graphql"],
  generates: {
    "src/gql/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        pureMagicComment: true,
      },
    },
  },
};

export default config;
