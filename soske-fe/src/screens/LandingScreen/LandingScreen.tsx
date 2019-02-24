import * as React from 'react';
import { View, Text, Button } from 'react-native';
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
        <Text>Landing Screen</Text>
        <Button
          title="Signup"
          color="#841584"
          onPress={() => this.props.navigation.navigate('SignupScreen')}
        />
        <Button
          title="Login"
          color="#841584"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    );
  }
}

export default LandingScreen;
