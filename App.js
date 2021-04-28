/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, Text } from 'react-native';

import HomeScreen from './src/screens/HomeScreen/index.js';
import DestinationSearch from './src/screens/DestinationSearch/index.js';
import SearchResults from './src/screens/SearchResults/index.js';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="" />
      {/* <HomeScreen /> */}
      <DestinationSearch />
      {/* <SearchResults /> */}
    </>
  );
};

export default App;
