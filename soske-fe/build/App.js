import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
    uri: 'http://localhost:4000',
});
export default class App extends React.Component {
    render() {
        return (<ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>);
    }
}
//# sourceMappingURL=App.js.map