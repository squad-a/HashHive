import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://gql.hashnode.com/',
  documents: 'src/**/*.tsx',
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: []
    }
  },
  ignoreNoDocuments: true,
  config: {
    avoidOptionals: true,
    maybeValue: 'T'
  }
};

export default config;
