# graphql-fields-test

A GraphQL test using [graphql-fields](https://github.com/robrichard/graphql-fields) to extract arguments from a subfield on the main node

## Getting Started

```bash
npm run dev
# or
yarn dev
```

## Description
This query must perform a single call to the endpoint still on the [main node resolver](https://github.com/thiago-nascimento-ti/graphql-fields-test/blob/50ea87985b9fae319598b47b624224f34ff9700f/src/schema/types/book/index.js#L34) passing the subfield's [limit argument](https://github.com/thiago-nascimento-ti/graphql-fields-test/blob/50ea87985b9fae319598b47b624224f34ff9700f/src/schema/types/book/index.js#L14) where it is extracted [here](https://github.com/thiago-nascimento-ti/graphql-fields-test/blob/50ea87985b9fae319598b47b624224f34ff9700f/src/schema/types/book/index.js#L26)

```graphql
query MyQuery($bookId: Int!, $genreLimit: Int) {
  getBook(id: $bookId) {
    author
    genre(limit: $genreLimit) {
      name
    }
  }
}

#Query Variables
{
  "bookId": 1,
  "genreLimit": 1
}
```

Call made to the backend
```curl
curl --location --request GET 'http://localhost:3000/books?id=1&genre._limit=1'
```
