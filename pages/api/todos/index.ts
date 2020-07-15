import { gql } from "apollo-server-micro";

export const todoDefs = gql`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
    notes: String
  }
`;

export const todoResolvers = {
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
