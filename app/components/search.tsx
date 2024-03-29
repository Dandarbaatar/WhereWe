import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
// import { Button } from './Button';

export const Search: React.FC = (): JSX.Element => {
  return (
    <View style={styles.search}>
      <TextInput placeholder="Хайх" style={styles.placeholder} />
      <Ionicons name="filter-circle-outline" size={30} color={Colors.light.text} />
      {/* <Button text="Хайх" width={70} height={40} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    width: '90%',
    height: 40,
    borderColor: Colors.light.text,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    color: Colors.light.white,
  },
  search: {
    // backgroundColor: '#324562',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
