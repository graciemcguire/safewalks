/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text} from 'react-native';

import HomeScreen from './src/screens/HomeScreen/index.js';
import DestinationSearch from './src/screens/DestinationSearch/index.js';

console.log('api key --> ', process.env.REACT_APP_GOOGLE_API_KEY);
console.log('whatever --> ', process.env.REACT_WHATEVER);


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="" />
      {/* <HomeScreen /> */}
      <DestinationSearch />
    </>
  );
};

export default App;
