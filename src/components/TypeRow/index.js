import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles.js';

function TypeRow() {
  return (
    <View>
      <Text>type row</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/UberX.jpeg')}
      />
      <View style={styles.middleContainer} />

      <View style={styles.rightContainer} />
    </View>
  );
}
export default TypeRow;
