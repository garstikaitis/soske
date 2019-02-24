import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LandingScreen, LoginScreen, SignupScreen } from '../screens';

const Navigator = createStackNavigator({
  LandingScreen: {
    screen: LandingScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  SignupScreen: {
    screen: SignupScreen,
  },
});

export default createAppContainer(Navigator);
