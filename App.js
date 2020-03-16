import Amplify from 'aws-amplify';
import { createAppContainer } from 'react-navigation';
import config from './aws-exports';
import React from 'react';
import { StyleSheet } from 'react-native';
import { YellowBox } from 'react-native'

import { TabNavigator } from './src/Navigation/TabNavigator';
import {AppNavigator} from './src/Navigation/RouteNavigator';

Amplify.configure(config);
YellowBox.ignoreWarnings([
  'Possible Unhandled Promise Rejection',
  'Remote debugger'
]);

const Content = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <Content style={styles.container}/>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
