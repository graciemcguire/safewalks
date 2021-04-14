/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions} from 'react-native';

import HomeMap from '../../components/HomeMap'
import styles from '../../components/HomeMap/styles';
import Types from '../../components/Types'

const SearchResults = () => {
  return (
    <View style={styles.mainView}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
      <View style={{height: 400}}>
        <Types />
      </View>
    </View>
  );
};

export default SearchResults;
