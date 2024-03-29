import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

interface DetailBoxProps {
  text: string;
  image: string;
}

export const DetailBox: React.FC<DetailBoxProps> = (props: DetailBoxProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.image }} style={styles.logo} />
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
  },
  container: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80,
  },
});
