import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Schedule from '../Schedule';
import Profile from '../Profile';
import Map from '../Map';
import {colors} from '../theme';
import {FontAwesome} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

export const TabNavigator = createMaterialBottomTabNavigator(
    {
        Schedule: Schedule,
        Profile: Profile,
        Location: Map
    },
    {
        initialRouteName: 'Schedule',
        activeTintColor: '#f4511e',
        inactiveTintColor: '#bbb',
        barStyle: {backgroundColor: '#FFDAB9'},
    }
);
