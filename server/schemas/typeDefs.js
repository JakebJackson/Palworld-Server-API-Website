const typeDefs = `
  type User {
    _id: ID
    username: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    updateUser(username: String, password: String): User
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;