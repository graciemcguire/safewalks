import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import styles from './styles';

const RouteMap = () => {

  const origin = { 
    latitude: 28.45627,
    longitude: -16.263045
  }
  
  const destination = { 
    latitude: 28.451567,
    longitude: -16.275000
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
      <MapViewDirections
        origin={ origin }
        destination={ destination }
        apikey={ GOOGLE_MAPS_API_KEY }
        strokeWidth={ 5}
        strokeColor="hotpink"
      />
      <Marker
        title={ 'origin' }
        coordinate={ origin }
        pinColor='black'
      />
      <Marker
        title={ 'destination' }
        coordinate={ destination }
        pinColor='black'
      />
    </MapView>
  );
};

export default RouteMap;
