import React from 'react';
import MapView from 'react-native-maps';
import {View, Text} from 'react-native';

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
