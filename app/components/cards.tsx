import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ImageSourcePropType, TouchableOpacity, Image } from 'react-native';

import Colors from '@/constants/Colors';
interface CardsProps {
  name: string;
  image1: ImageSourcePropType;
  image2: ImageSourcePropType;
  image3: ImageSourcePropType;
  image4: ImageSourcePropType;
  name1: string;
  name2: string;
  name3: string;
  name4: string;
}

export const Cards: React.FC<CardsProps> = (props: CardsProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.Head}>
        <Text style={styles.HeadText}>{props.name}</Text>
        <TouchableOpacity onPress={() => router.push(`/screens/suggested`)}>
          <Text style={styles.textOdd}>Бүгдийг харах</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageViewDad}>
        <View style={styles.imageView}>
          <TouchableOpacity onPress={() => router.push(`/screens/detail`)} style={styles.link}>
            <Image source={props.image1} style={styles.image} />
            <View style={styles.rate}>
              <Text style={styles.rateText}>{props.name1}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push(`/screens/detail`)} style={styles.link}>
            <Image source={props.image2} style={styles.image} />
            <View style={styles.rate}>
              <Text style={styles.rateText}>{props.name2}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imageView}>
          <TouchableOpacity onPress={() => router.push(`/screens/detail`)} style={styles.link}>
            <Image source={props.image3} style={styles.image} />
            <View style={styles.rate}>
              <Text style={styles.rateText}>{props.name3}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push(`/screens/detail`)} style={styles.link}>
            <Image source={props.image4} style={styles.image} />
            <View style={styles.rate}>
              <Text style={styles.rateText}>{props.name4}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textOdd: {
    color: Colors.light.textOdd,
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'underline',
    // textDecorationStyle: 'dashed',
    // fontStyle: 'italic',
    textDecorationColor: Colors.light.textOddUnder,
  },
  link: {
    width: '48%',
    height: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    // backgroundColor: Colors.light.background,
    backgroundColor: '#699595',
    borderRadius: 15,
    borderWidth: 0.4,
  },
  rate: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  rateText: {
    color: Colors.light.white,
    fontSize: 13,
    fontWeight: '500',
  },
  imageView: {
    flexDirection: 'row',
    width: '100%',
    height: 170,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageViewDad: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '80%',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    borderRadius: 15,
  },
  HeadText: {
    color: Colors.light.text,
    fontSize: 20,
    fontWeight: '400',
  },
  Head: {
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 40,
  },
});
