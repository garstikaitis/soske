import * as React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    render() {
        const { username, password } = this.state;
        return (<Mutation mutation={CREATE_USER_MUTATION}>
        {createUser => {
            return (<View>
              <TextInput onChangeText={username => this.setState({ username })} placeholder="Username" style={styles.input}/>
              <TextInput onChangeText={password => this.setState({ password })} placeholder="Password" style={styles.input}/>
              <Button onPress={() => createUser({ variables: { username, password } })} title="Signup"/>
            </View>);
        }}
      </Mutation>);
    }
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 100,
    },
});
const CREATE_USER_MUTATION = gql `
  mutation CreateUserMutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
    }
  }
`;
export default SignupScreen;
//# sourceMappingURL=SignupScreen.js.map