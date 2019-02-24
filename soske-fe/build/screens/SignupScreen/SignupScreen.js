import * as React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Mutation } from 'react-apollo';
import { CREATE_USER_MUTATION } from './query';
import { styles } from './styles';
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
export default SignupScreen;
//# sourceMappingURL=SignupScreen.js.map