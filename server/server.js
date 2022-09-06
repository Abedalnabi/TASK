//import server
const express = require('express');
const cors = require('cors');
const { SERVER_PORT } = require('./config/env/env');

//import database
const db = require('./config/db/db.js');
require('./config/db/models/associations/associations');

// import Graphql
const graphQLSchema = require('./graphQL/schemas');
const graphQLResolver = require('./graphQL/resolvers');
const { graphqlHTTP } = require('express-graphql');

const app = express();
app.use(express.json());
app.use(cors());

// Connect Database
db.sequelize.authenticate().then(() => {
  console.log(`Database is connected`);
  app.listen(SERVER_PORT || 4000, () => {
    console.log(`ServerApp is connected on port : ${SERVER_PORT}`);
  });
});

// Graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLResolver,
    graphiql: true,
  })
);
