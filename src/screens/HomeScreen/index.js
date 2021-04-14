import React from 'react';
import {View, Dimensions} from 'react-native';

import HomeMap from '../../components/HomeMap/index.js';
import CovidMessage from '../../components/CovidMessage/index.js';
import HomeSearch from '../../components/HomeSearch/index.js';

const HomeScreen = props => {
  return (
    <View>

      <View style={{ height: Dimensions.get('window').height - 408 }}>
       <HomeMap />
      </View>

      <CovidMessage />

      <HomeSearch />
    

    </View>
  );
};

export default HomeScreen;
