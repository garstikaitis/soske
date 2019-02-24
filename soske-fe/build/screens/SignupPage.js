import * as React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import axios from 'axios';
class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.login = () => {
            const { response } = axios.post('http://localhost:4466');
        };
        this.state = {
            username: '',
            password: '',
        };
    }
    render() {
        return (<View>
        <TextInput onChangeText={username => this.setState({ username })} placeholder="Username" style={styles.input}/>
        <TextInput onChangeText={password => this.setState({ password })} placeholder="Password" style={styles.input}/>
        <Button title="Login" onPress={this.login}/>
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
//# sourceMappingURL=SignupPage.js.map