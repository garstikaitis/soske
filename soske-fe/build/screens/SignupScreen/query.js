import gql from 'graphql-tag';
export const CREATE_USER_MUTATION = gql `
  mutation CreateUserMutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
    }
  }
`;
//# sourceMappingURL=query.js.map