import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingScreen from '../Screens/Landing/Landing';
import { TabNavigator } from './TabNavigator';
import { Screens } from '../Screens/constants';

const RenderScreen = createAppContainer(TabNavigator);

export const AppNavigator = createStackNavigator({
    Landing: {
        screen: LandingScreen
    },
    Render: {
        screen: RenderScreen
    }
},
{
    initialRouteName: Screens.LANDING,
    headerMode: 'none'
});
