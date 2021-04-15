/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Dimensions } from 'react-native';

import RouteMap from '../../components/RouteMap'
import styles from './styles';
import Types from '../../components/Types'

const SearchResults = () => {
  return (
    <View style={ styles.mainView }>
      <View style={{ height: Dimensions.get('window').height - 400 }}>
        <RouteMap />
      </View>
      <View style={{ height: 400 }}>
        <Types />
      </View>
    </View>
  );
};

export default SearchResults;
