import React from 'react';

import Profile from '../Profile';
import Map from '../Map';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Screens} from '../Screens/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import ScheduleScreen from '../Screens/Schedule/Schedule';
import User from '../Screens/User/User';

export const TabNavigator = createMaterialBottomTabNavigator(
    {
        Schedule: {
            screen: ScheduleScreen,
            navigationOptions: {
                tabBarLabel: Screens.SCHEDULE,
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
                    </View>
                )
            }
        },
        Profile: {
            screen: User,
            navigationOptions: {
                tabBarLabel: Screens.PROFILE,
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-contact'}/>
                    </View>
                )
            }
        },
        Location: {
            screen: Map,
            navigationOptions: {
                tabBarLabel: Screens.MAP,
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-map'}/>
                    </View>
                )
            }
        },
        CheckIn: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: Screens.CHECKIN,
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-card'}/>
                    </View>
                )
            }
        }
    },
    {
        initialRouteName: Screens.PROFILE,
        labeled: true,
        activeColor: '#ffffff',
        inactiveTintColor: '#bbb',
        barStyle: { backgroundColor: '#669277' },
        shifting: false
    }
);
