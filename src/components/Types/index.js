/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import typesData from '../../assets/data/types.js';
import styles from './styles';
import TypeRow from '../TypeRow';

export default function Types() {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map(type => (
        <TypeRow key={type.id} type={type} />
      ))}
      <Pressable onPress={confirm} style={styles.button}>
        <Text style={styles.text}>Confirm Ride</Text>
      </Pressable>
    </View>
  );
}
