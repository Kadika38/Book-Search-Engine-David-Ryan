import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: password) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook(input: {
        $authors: [String]!,
        $description: String,
        $bookId: String,
        $image: String,
        $link: String,
        $title: String,
    }) {
        saveBook(input: {
            authors: $authors,
            description: $description,
            bookId: $bookId,
            image: $image,
            link: $link,
            title: $title,
        }) {
            user {
                _id
                username
            }
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            user {
                _id
                username
            }
        }
    }
`;