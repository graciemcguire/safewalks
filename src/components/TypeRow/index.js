import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

function TypeRow( { type } ) {
  const getImageNames = () => {
    if ( type.type === 'UberX' ) {
      return require( `../../assets/images/UberX.jpeg` );
    }
    if ( type.type === 'Comfort' ) {
      return require( `../../assets/images/Comfort.jpeg` );
    } else {
      return require( `../../assets/images/UberXL.jpeg` );
    }
  };

  return (
    <View style={ styles.container }>
      <Image style={ styles.image } source={ getImageNames() } />
      <View style={ styles.middleContainer }>
        <Text style={ styles.type }>
          { type.type }
          { '  ' }
          <Ionicons name={ 'person' } size={ 16 } />3
        </Text>
        <Text style={ styles.time }>3:11PM Drop Off</Text>
      </View>

      <View style={ styles.rightContainer }>
        <Ionicons name={ 'pricetag' } size={ 18 } color={ '#42d742' } />
        <Text style={ styles.price }>est. ${ type.price }</Text>
      </View>
    </View>
  );
}
export default TypeRow;
