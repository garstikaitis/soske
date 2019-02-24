import * as React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
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
        <TextInput onChangeText={username => this.setState({ username })} placeholder="Username" style={styles.input}/>
        <TextInput onChangeText={password => this.setState({ password })} placeholder="Password" style={styles.input}/>
        <Button onPress={login} title="Login"/>
      </View>);
    }
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 100,
    },
});
export default LandingScreen;
//# sourceMappingURL=LoginScreen.js.map