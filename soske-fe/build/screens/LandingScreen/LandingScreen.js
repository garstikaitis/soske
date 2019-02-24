import * as React from 'react';
import { View, Text, Button } from 'react-native';
class LandingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    render() {
        return (<View>
        <Text>Landing Screen</Text>
        <Button title="Signup" color="#841584" onPress={() => this.props.navigation.navigate('SignupScreen')}/>
        <Button title="Login" color="#841584" onPress={() => this.props.navigation.navigate('LoginScreen')}/>
      </View>);
    }
}
export default LandingScreen;
//# sourceMappingURL=LandingScreen.js.map