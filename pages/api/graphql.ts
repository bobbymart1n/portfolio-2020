import { ApolloServer, gql } from "apollo-server-micro";
import { makeExecutableSchema } from "graphql-tools";
import { MongoClient } from "mongodb";

import { todoDefs, todoResolvers } from "./todos";

require("dotenv").config();

const typeDefs = gql`
  ${todoDefs}
  type Query {
    todos: [Todo]!
  }
`;

const resolvers = {
  Query: {
    todos() {
      return todoResolvers;
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

let db;

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.MONGO_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        if (!dbClient.isConnected()) await dbClient.connect();

        db = dbClient.db("next-graphql"); // DB name
      } catch (e) {
        console.log("Error while connecting with graphql context(db)", e);
      }
    }
    return { db };
  },
});

export default apolloServer.createHandler({ path: "/api/graphql" });
