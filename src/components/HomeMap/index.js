import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Image, FlatList } from 'react-native';
import styles from './styles';
import cars from '../../assets/data/cars';

const HomeMap = () => {
  const getImageNames = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    } else {
      return require('../../assets/images/top-UberXL.png');
    }
  };

  return (
    <MapView
      provider={ PROVIDER_GOOGLE }
      style={ styles.map }
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <FlatList
        data={ cars }
        renderItem={({ item }) => (
          <Marker
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}>
            <Image source={ getImageNames(item.type) } style={ styles.marker } />
          </Marker>
        )}
      />
    </MapView>
  );
};

export default HomeMap;
