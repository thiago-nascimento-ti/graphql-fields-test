# graphql-fields-test

A GraphQL test using [graphql-fields](https://github.com/robrichard/graphql-fields) to extract arguments from a subfield on the main node

## Getting Started

```bash
npm run dev
# or
yarn dev
```

## Description

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