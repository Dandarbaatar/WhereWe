import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { TextStroke } from '../components/TextStroke';
import { Cards } from '../components/cards';

// import { Button } from '../components';
import { STATUSBAR_HEIGHT } from '@/utils/statusbar-height';

const image1 = require('../../assets/images/AltaiTavanBogd.jpeg');
// const homeHero = require('../../assets/images/AltaiTavanBogd.jpeg');
const logo = require('../../assets/images/Logo.png');

export default function TabOneScreen(): React.ReactNode {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <TextStroke stroke={2} color="#000">
          <Text style={styles.headerText}>Хайчихуу?</Text>
        </TextStroke>
      </View>
      <View style={styles.container}>
        {/* <Image source={homeHero} style={styles.imgBack} /> */}
        {/* <ImageBackground
          source={homeHero}
          resizeMode="cover"
          style={styles.imgBack}
          imageStyle={{ borderRadius: 25 }}>
          <Text>asd</Text>
        </ImageBackground> */}
        <Cards
          name="Таньд санал болгох"
          image1Text="hello"
          image1={image1}
          image2={image1}
          image3={image1}
          image4={image1}
          image2Text="lol"
          image3Text="lol"
          image4Text="ll"
          link="/screens/suggested"
          linkDetail="/screens/detail"
        />
        <Cards
          name="Таньд санал болгох"
          image1Text="hello"
          image1={image1}
          image2={image1}
          image3={image1}
          image4={image1}
          image2Text="lol"
          image3Text="lol"
          image4Text="ll"
          link="/screens/suggested"
          linkDetail="/screens/detail"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 70,
  },
  headerText: {
    color: '#FFF',
    fontSize: 35,
    fontWeight: '500',
    marginLeft: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  imgBack: {
    height: 300,
    width: '100%',
    borderRadius: 25,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    // backgroundColor: '#909090',
    height: 80,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: '#80BCBD',
  },
});
