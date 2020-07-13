import { ApolloServer, gql } from "apollo-server-micro";
import { makeExecutableSchema } from "graphql-tools";
import { MongoClient } from "mongodb";

require("dotenv").config();

const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
    notes: String
  }
  type Query {
    todos: [Todo]!
  }
`;

const resolvers = {
  Query: {
    todos(_parent, _args, _context, _info) {
      return _context.db
        .collection("todos")
        .findOne()
        .then((data) => {
          return data.todos;
        });
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

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
