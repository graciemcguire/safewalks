import React from 'react';
import {View, Text} from 'react-native';

import HomeMap from '../../components/HomeMap/index.js';
import CovidMessage from '../../components/CovidMessage/index.js';
import HomeSearch from '../../components/HomeSearch/index.js';

const HomeScreen = props => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
