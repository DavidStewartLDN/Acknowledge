import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Generla App screens
import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';
import GraphAchievements from '../screens/GraphAchievements';


const AppStackNavigator = createStackNavigator(
  {
    ViewAchievements: {
      screen: ViewAchievements
    },
    AddAchievement: {
      screen: AddAchievement
    },
    GraphAchievements: {
      screen: GraphAchievements
    }
  },
  {
    initialRouteName: 'ViewAchievements',
    headerMode: 'none',
    mode: 'modal'
  }
  )
  
// Login Screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile'
  
const AuthSwitchNavigator = createSwitchNavigator(
  {
      Login: {
          screen: Login
      },
      Signup: {
          screen: Signup
      },
      Profile: {
          screen: Profile
      }
  },
  {
      initialRouteName: 'Login'
  }
)

// Old export
// export default createAppContainer(StackNavigator)

// New export for login flow only
const FullStack = createSwitchNavigator(
  {
    Auth: AuthSwitchNavigator,
    App: AppStackNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
);
  

  export default createAppContainer(FullStack)