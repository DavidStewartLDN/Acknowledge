import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';
import GraphAchievements from '../screens/GraphAchievements';
import Login from '../screens/Login';

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
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
    initialRouteName: 'Login',
    headerMode: 'none',
    mode: 'modal'
  }
)


export default createAppContainer(StackNavigator)