const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]!
        bookCount: Int
    }

    type Book {
        authors: [String]!
        description: String
        bookId: ID
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input saveBookInput {
        authors: [String]
        description: String
        bookId: ID
        image: String
        link: String
        title: String
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
        saveBook(input: saveBookInput!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;