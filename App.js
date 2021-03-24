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
import HomeMap from './src/components/HomeMap/index.js';

const App: () => React$Node = () => {
// const App = () => {
  return (
    <>
      <StatusBar barStyle="" />
      <HomeScreen />
    </>
  );
};

export default App;
