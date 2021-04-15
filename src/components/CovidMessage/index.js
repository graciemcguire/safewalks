import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CovidMessage = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Travel only if necessary</Text>
      <Text style={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      <Text style={ styles.learnMore }>Learn more</Text>
    </View>
  );
};

export default CovidMessage;
