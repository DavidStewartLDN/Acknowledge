import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';
import GraphAchievements from '../screens/GraphAchievements';
import LogIn from '../screens/LogIn';

const StackNavigator = createStackNavigator(
  {
    LogIn: {
      screen: LogIn
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
    initialRouteName: 'LogIn',
    headerMode: 'none',
    mode: 'modal'
  }
)


export default createAppContainer(StackNavigator)