import { Ionicons } from '@expo/vector-icons';
// import * as Location from 'expo-location';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, ImageBackground, Pressable } from 'react-native';

import Map from '../components/Map';

import Colors from '@/constants/Colors';
// import { DetailBox } from '../components/DetailBox';

const homeHero = require('../../assets/images/AltaiTavanBogd.jpeg');

export default function Detail(): JSX.Element {
  const [showMore, setShowMore] = useState(false);
  const description =
    'Lagos, Nigeria’s lagoon city, Africa’s leading NEPAD City and World’s sixth megacity is a bourgeoning global urban agglomeration which attained megacity status in 1995 when its population soared to over 10 million people, per UN-Habitat. From its global city ranking of 31st in 1985, Lagos population exploded to 13.4 million in Y2000 to become world’s sixth megacity and Africa’s foremost urban centre and hub of national, regional and global socio-economic and political activities.';
  const [lessDescription, setLessDescription] = useState<string>(description?.slice(0, 120));

  const toggleSeeMore = (): void => {
    setShowMore(!showMore);
    setLessDescription(description?.slice(0, 120));
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={homeHero}
        resizeMode="cover"
        style={styles.imgBack}
        imageStyle={{ borderRadius: 25 }}>
        <Link href="../" style={styles.backLink}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </Link>
      </ImageBackground>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerTitle}>
            <Text style={styles.text}>Монгол нохой чарга</Text>
          </View>
        </View>
        <View style={styles.headerBottom}>
          <View style={styles.headerText}>
            <Pressable onPress={toggleSeeMore}>
              <Text style={styles.headerTextText}>
                {showMore ? description : lessDescription}
                <Text
                  style={{
                    color: Colors.light.textOdd,
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  {showMore ? ' See Less' : ' ...See More'}
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.mainView}>
        {/* <DetailBox text="lol" image="../../assets/images/Logo.png" /> */}
        <Map name="Монгол нохой чарга" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerTextText: {
    color: Colors.light.text,
    fontWeight: '300',
    textAlign: 'justify',
    verticalAlign: 'middle',
    paddingTop: 3,
    height: 'auto',
  },
  headerText: {
    width: '100%',
    height: 'auto',
  },
  imgBack: {
    height: 300,
    width: '100%',
  },
  text: {
    color: Colors.light.text,
    fontSize: 25,
    fontWeight: '600',
  },
  headerTop: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  headerBottom: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
  },
  headerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    flexDirection: 'row',
  },
  backLink: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: 26.5,
    marginTop: 60,
    marginLeft: 20,
  },
  header: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    overflow: 'scroll',
    backgroundColor: Colors.light.background,
  },
});
