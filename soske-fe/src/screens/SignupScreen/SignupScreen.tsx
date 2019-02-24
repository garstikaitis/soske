import * as React from 'react';
import { View, TextInput, Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Mutation } from 'react-apollo';
import { CREATE_USER_MUTATION } from './query';
import { styles } from './styles';

interface IState {
  username: string;
  password: string;
}

interface IProps extends NavigationScreenProps<{}> {}
class SignupScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    const { username, password } = this.state;
    return (
      <Mutation mutation={CREATE_USER_MUTATION}>
        {createUser => {
          return (
            <View>
              <TextInput
                onChangeText={username => this.setState({ username })}
                placeholder="Username"
                style={styles.input}
              />
              <TextInput
                onChangeText={password => this.setState({ password })}
                placeholder="Password"
                style={styles.input}
              />
              <Button
                onPress={() =>
                  createUser({ variables: { username, password } })
                }
                title="Signup"
              />
            </View>
          );
        }}
      </Mutation>
    );
  }
}

export default SignupScreen;
