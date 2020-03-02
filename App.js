import Amplify from 'aws-amplify'
import config from './aws-exports'
import React from 'react';
import { StyleSheet } from 'react-native';
import { YellowBox } from 'react-native'
import { colors } from './src/theme';
import { createAppContainer } from 'react-navigation';
import { TabNavigator } from './src/Navigation/TabNavigator';

// Amplify.configure(config)
YellowBox.ignoreWarnings([
  'Possible Unhandled Promise Rejection',
  'Remote debugger'
]);

const Content = createAppContainer(TabNavigator);

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
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
