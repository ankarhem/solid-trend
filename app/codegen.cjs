module.exports = {
  overwrite: true,
  schema: {
    'https://storeapi.jetshop.io:': {
      headers: {
        shopid: 'demostore',
        token: '359fd7c1-8e72-4270-b899-2bda9ae6ef57',
      },
    },
  },
  documents: 'src/**/*.gql',
  generates: {
    'src/graphql-operations.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        constEnums: true,
        enumsAsConst: true,
        enumsAsTypes: true,
        immutableTypes: true,
        useImplementingTypes: true,
      },
    },
  },
};
