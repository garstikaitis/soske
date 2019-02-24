import * as React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

interface IState {
  username: string;
  password: string;
}

interface IProps extends NavigationScreenProps<{}> {}

class LandingScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
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
        <Button onPress={login} title="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 100,
  },
});

export default LandingScreen;
