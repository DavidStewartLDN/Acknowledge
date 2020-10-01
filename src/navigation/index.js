import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';
import GraphAchievements from '../screens/GraphAchievements';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
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
    initialRouteName: 'Signup',
    headerMode: 'none',
    mode: 'modal'
  }
)


export default createAppContainer(StackNavigator)