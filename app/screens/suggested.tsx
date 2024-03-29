import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { LongCards } from '../components/longCards';

import Colors from '@/constants/Colors';
import { STATUSBAR_HEIGHT } from '@/utils/statusbar-height';

const image1 = require('../../assets/images/zurag.jpeg');
const image2 = require('../../assets/images/zurag1.jpeg');
const image3 = require('../../assets/images/zurag2.jpeg');
const image4 = require('../../assets/images/zurag3.jpeg');

export default function Suggested(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Link href="../" style={styles.backLink}>
            <Ionicons name="arrow-back" size={30} color={Colors.light.text} />
          </Link>
          <View style={styles.headerText}>
            <Text style={styles.text}>Хайчихуу?</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image1} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image2} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image3} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image4} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image2} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image4} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image1} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image2} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image4} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image1} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.light.text,
    fontSize: 25,
    fontWeight: '500',
  },
  headerLeft: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  headerText: {
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
  },
  header: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  container: {
    paddingTop: STATUSBAR_HEIGHT,
    flex: 1,
    overflow: 'scroll',
    backgroundColor: Colors.light.background,
  },
});
