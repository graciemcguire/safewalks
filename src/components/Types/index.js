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
      <Pressable
        onPress={confirm}
        style={{
          width: '100%',
          padding: 10,
          margin: 10,
          backgroundColor: 'black',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Ride</Text>
      </Pressable>
    </View>
  );
}
