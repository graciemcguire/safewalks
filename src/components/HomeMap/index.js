/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {View, Text} from 'react-native';
import styles from './styles';

const HomeMap = () => {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: '#a0abff',
        justiyContent: 'center',
        alignItems: 'center',
      }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default HomeMap;
