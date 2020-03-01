import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import ResetPassoword from './pages/PasswordReset';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      ResetPassoword,
      Dashboard,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0154C6',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
