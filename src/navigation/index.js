import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';

const StackNavigator = createStackNavigator(
  {
    ViewAchievements: {
      screen: ViewAchievements
    },
    AddAchievement: {
      screen: AddAchievement
    }
  },
  {
    initialRouteName: 'ViewAchievements',
    headerMode: 'none',
    mode: 'modal'
  }
)


export default createAppContainer(StackNavigator)