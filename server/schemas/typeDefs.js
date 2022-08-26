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
        authors: [String]
        bookId: ID
        description: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
        saveBook(authors: [String], bookId: ID, description: String, image: String, link: String, title: String): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;