import { EvilIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

const asd: ImageSourcePropType = require('../../assets/images/AltaiTavanBogd.jpeg');

interface LongCardsProps {
  name?: string;
  location?: string;
  price?: string;
}

export const LongCards: React.FC<LongCardsProps> = (props: LongCardsProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.dad}>
        <Image source={asd} style={styles.image} />
        <View style={styles.son}>
          <Text style={styles.name}>{props.name}</Text>
          <View style={styles.location}>
            <View style={styles.center}>
              <EvilIcons name="location" size={20} color="#000" />
            </View>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '400',
                color: '#000',
              }}>
              {props.location}
            </Text>
          </View>
          <Text style={styles.price}>{props.price}₮</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  price: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
  },
  location: {
    alignItems: 'center',
    width: '100%',
    height: 20,
    flexDirection: 'row',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  son: {
    width: '58%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 100,
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#000',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  dad: {
    width: '100%',
    height: 130,
    backgroundColor: '#D5F0C1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 150,
    // borderColor: '#000',
    // borderWidth: 2,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
