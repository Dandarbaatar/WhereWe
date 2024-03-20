import { Href, Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native';

interface CardsProps {
  name: string;
  image1: ImageSourcePropType;
  image2: ImageSourcePropType;
  image3: ImageSourcePropType;
  image4: ImageSourcePropType;
  image1Text: string;
  image2Text: string;
  image3Text: string;
  image4Text: string;
  link: Href<string>;
  linkDetail: Href<string>;
}

export const Cards: React.FC<CardsProps> = (props: CardsProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Link href={props.linkDetail}>
        <View style={styles.Head}>
          <Text style={styles.HeadText}>{props.name}</Text>
          <Link href={props.link}>
            <Text style={{ color: '#000', fontSize: 20 }}>Бүгд</Text>
          </Link>
        </View>
        <View style={styles.imageViewDad}>
          <View style={styles.imageView}>
            <ImageBackground
              source={props.image1}
              resizeMode="cover"
              style={styles.image}
              imageStyle={{ borderRadius: 25 }}>
              <Text style={styles.white}>{props.image1Text}</Text>
            </ImageBackground>
            <ImageBackground
              source={props.image2}
              resizeMode="cover"
              style={styles.image}
              imageStyle={{ borderRadius: 25 }}>
              <Text style={styles.white}>{props.image2Text}</Text>
            </ImageBackground>
          </View>
          <View style={styles.imageView}>
            <ImageBackground
              source={props.image3}
              resizeMode="cover"
              style={styles.image}
              imageStyle={{ borderRadius: 25 }}>
              <Text style={styles.white}>{props.image3Text}</Text>
            </ImageBackground>
            <ImageBackground
              source={props.image4}
              resizeMode="cover"
              style={styles.image}
              imageStyle={{ borderRadius: 25 }}>
              <Text style={styles.white}>{props.image4Text}</Text>
            </ImageBackground>
          </View>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  white: {
    color: '#F00',
    fontSize: 20,
  },
  imageView: {
    alignItems: 'center',
    width: 190,
    height: 240,
    justifyContent: 'space-between',
  },
  imageViewDad: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    paddingTop: 20,
  },
  image: {
    width: 170,
    height: 110,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  HeadText: {
    color: '#FFF',
    fontSize: 23,
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
    paddingHorizontal: 15,
    marginTop: 10,
    paddingBottom: 40,
  },
});
