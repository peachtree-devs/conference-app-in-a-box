import React, {Component} from 'react';
import {ScrollView, TouchableHighlight, Linking, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import { colors, typography, dimensions } from './theme'

import BaseHeader from './BaseHeader';

const GatherSpot = {
  name: 'The Gathering Spot',
  latitude: 33.7680333,
  longitude: -84.4019171,
  address: '384 Northyards Blvd NW, Atlanta, GA 30313'
}

export default class Map extends Component {
  openMap = () => {
    Linking.openURL('https://goo.gl/maps/DNrmyCTQPDC5RkHc9')
      .catch((err) => console.error('An error occurred', err));
  }
  render() {
    return (
      <View style={styles.container}>
        <BaseHeader />
        <View style={styles.mapContainer}>
          <ScrollView>
            <View style={styles.mapView}>
              <MapView
                style={styles.mapStyle}
                initialRegion={{
                  latitude: GatherSpot.latitude,
                  longitude: GatherSpot.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <MapView.Marker
                  coordinate={{
                    latitude: GatherSpot.latitude,
                    longitude: GatherSpot.longitude
                  }}
                >
                  <View>
                    <Text style={{
                        fontSize: 24
                      }}>🚀</Text>
                  </View>
                </MapView.Marker>
              </MapView>
              <TouchableHighlight
                onPress={this.openMap}
                underlayColor='transparent'
              >
                <View style={styles.addressContainer}>
                  <Text style={[styles.address, styles.addressHeading]}>The Gathering Spot</Text>
                  <Text style={styles.address}>525 Market St #2</Text>
                  <Text style={styles.address}>San Francisco, CA 94105</Text>
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: dimensions.width - 40,
    height: 400,
    borderRadius: 5
  },
  addressContainer: {
    paddingVertical: 20
  },
  address: {
    color: colors.primaryText,
    fontSize: 18,
    marginBottom: 4,
    fontFamily: typography.primary
  },
  addressHeading: {
    fontSize: 18,
    fontFamily: typography.medium,
    marginBottom: 5,
    color: colors.highlight
  },
  container: {
    flex: 1,
    backgroundColor: colors.primaryLight
  },
  mapContainer: {
    flex: 1
  },
  mapView: {
    padding: 20
  }
});
