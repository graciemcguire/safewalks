import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Image, FlatList } from 'react-native';
import styles from './styles';
import cars from '../../assets/data/cars';

const HomeMap = () => {

  const getImageNames = type => {
    if ( type === 'UberX' ) {
      return require('../../assets/images/top-UberX.png');
    }
    if ( type === 'Comfort' ) {
      return require( '../../assets/images/top-Comfort.png' );
    } else {
      return require( '../../assets/images/top-UberXL.png' );
    }
  };

  const renderCars = car => {
    return cars.map((car) => (
      <Marker 
        key={ car.id }
        coordinate={{ latitude: car.latitude, longitude: car.longitude }}
      >
        <Image 
          source={ getImageNames(car.type) } 
          style={{
            ...styles.marker,
            transform: [{
              rotate: `${ car.heading }deg`
            }]
          }}
        />
      </Marker>
    ))
  }

  return (
    <MapView
      provider={ PROVIDER_GOOGLE }
      style={ styles.map }
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0121,
        longitudeDelta: 0.0211,
      }}>
        { renderCars() }
    </MapView>
  );
};

export default HomeMap;
