import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { LongCards } from '../components/longCards';
import { Search } from '../components/search';

import Colors from '@/constants/Colors';
import { STATUSBAR_HEIGHT } from '@/utils/statusbar-height';

const image = require('../../assets/images/zurag.jpeg');

export default function TabTwoScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Link href="../" style={styles.backLink}>
            <Ionicons name="arrow-back" size={30} color={Colors.light.text} />
          </Link>
          <View style={styles.headerText}>
            <Text style={styles.text}>Хайх</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Search />
        </View>
      </View>
      <ScrollView>
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image} />
        <LongCards name="Монгол нохой чарга" location="Тэрэлж" price="100,000" image={image} />
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
  headerRight: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
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
    paddingRight: '10%',
  },
  backLink: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: 26.5,
  },
  header: {
    width: '100%',
    height: 130,
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
