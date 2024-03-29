// import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

// import Colors from '@/constants/Colors';
interface ImageScrollProps {
  name: string;
}
const image = require('../../assets/images/zurag.jpeg');

export const ImageScroll: React.FC<ImageScrollProps> = (props: ImageScrollProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={image} />
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
