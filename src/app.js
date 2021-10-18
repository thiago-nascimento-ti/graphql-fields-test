const express = require('express');
const GraphQLHTTP = require('express-graphql');
const { schema } = require('./config');

const app = express();
app.use(
  '/graphql',
  GraphQLHTTP({
    schema,
    pretty: true,
    graphiql: true
  }),
);

module.exports = {
    app
}