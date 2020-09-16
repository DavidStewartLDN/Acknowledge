import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ViewAchievements from '../screens/ViewAchievements';

const StackNavigator = createStackNavigator(
  {
    ViewAchievements: {
      screen: ViewAchievements
    }
  },
  {
    initialRouteName: 'ViewAchievements',
    headerMode: 'none'
  }
)


export default createAppContainer(StackNavigator)