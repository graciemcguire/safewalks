import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

AntDesign.loadFont();
MaterialIcons.loadFont();
Entypo.loadFont();

const HomeSearch = () => {
  return (
    <View>
      {/* { input box} */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </View>

      {/* { previous destination} */}

      <View styles={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color='#fff'/>
        </View>
        <Text style={styles.destinationText}>The Rosemont</Text>
      </View>

      {/* { home} */}
      <View styles={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={20} color='#fff'/>
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
