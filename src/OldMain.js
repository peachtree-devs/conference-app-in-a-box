import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Hub, Auth } from 'aws-amplify'
// import { withAuthenticator } from 'aws-amplify-react-native'
import AmplifyTheme from 'aws-amplify-react-native/src/AmplifyTheme'
import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font';

import Schedule from './Schedule'
import Profile from './Profile'
import Map from './Map'

import { colors, logo } from './theme'
import {TabNavigatorComponent} from './Navigation/TabNavigator';
//
const TabNavigator = createBottomTabNavigator({
  Schedule: {
    screen: Schedule
  },
  Profile: {
    screen: Profile
  },
  Map: {
    screen: Map,
  }
}, {
  tabBarOptions: {
    activeTintColor: colors.highlight,
    inactiveTintColor: '#fafafa',
    style: {
      backgroundColor: colors.primary
    }
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      if (routeName === 'Schedule') {
        return <FontAwesome color={tintColor} size={20} name='calendar' />
      }
      if (routeName === 'Map') {
        return <FontAwesome color={tintColor} size={20} name='map' />
      }
      return <FontAwesome color={tintColor} size={20} name='user' />
    }
  })
});

class TabNavWithProps extends React.Component {
  componentDidMount() {
    this.state = {
      fontLoaded: false
    };

    Font.loadAsync({
      'Gotham Rounded': require('./assets/fonts/GothamRnd-Light.otf'),
      'GothamRnd Medium': require('./assets/fonts/GothamRnd-Medium.otf'),
      'Gotham Bold': require('./assets/fonts/GothamRnd-Bold.otf')
    }).then(() => {
      this.setState({fontLoaded: true});

    });
  }

  static router = TabNavigator.router;
  render() {
    return(
      <TabNavigator screenProps={{...this.props}} {...this.props}  />
    )
  }
}

const App = createAppContainer(TabNavWithProps);

class AppWithAuth extends React.Component {
  state = {
    signedIn: true
  };

  async componentDidMount() {
    try {
      // await Auth.currentAuthenticatedUser()
      this.setState({ signedIn: true })
    } catch (err) { console.log('user not signed in') }
    Hub.listen('auth', (data) => {
      const { payload: { event } } = data
      if (event === 'signIn') {
        this.setState({ signedIn: true })
      }
      if (event === 'signOut' && this.state.signedIn) {
        this.setState({ signedIn: false })
      }
    })
  }
  render() {
    // const AppComponent = withAuthenticator(App, null, null, null, theme)
    //removing auth layer
    //to add back, uncomment and change 108 to AppComponent
    return (
        this.state.fontLoaded ?
      <View style={styles.appContainer}>
        {!this.state.signedIn && <Logo />}
        <App {...this.props} />
      </View>: <Text style={{"color": "red"}}> "app still loading" </Text>
    )
  }
}

const Logo = () => (
  <View style={styles.logoContainer}>
    <Image
      style={styles.logo}
      resizeMode='contain'
      source={logo}
    />
  </View>
)

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  logoContainer: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 50,
    width: 200
  }
})

export default AppWithAuth
