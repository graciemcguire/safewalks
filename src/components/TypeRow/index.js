import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';
import fonts from '../../assets/fonts/index.js'
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

function TypeRow() {
  return (
    <View>
      <Text>type row</Text>
      <Image
        style={styles.image}
        // source={require('../../assets/images/UberX.jpeg')}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          UberX
          <Ionicons name={'person'} size={25} />
          3
        </Text>
        <Text style={styles.time}>3:11PM Drop Off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. $69</Text>
      </View>
    </View>
  );
}
export default TypeRow;
