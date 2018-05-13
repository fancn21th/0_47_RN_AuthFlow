import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/Home'
import OtherScreen from '../Containers/Other'
import AntherScreen from '../Containers/Another'
import SignInScreen from '../Containers/SignIn'

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen, Another:AntherScreen, })
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
);
