import { LinearGradient } from 'expo-linear-gradient';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Cards } from '../components/cards';

import Colors from '@/constants/Colors';

// import { STATUSBAR_HEIGHT } from '@/utils/statusbar-height';
const homeHero = require('../../assets/images/AltaiTavanBogd.jpeg');
const logo = require('../../assets/images/Logo.png');
const image1 = require('../../assets/images/zurag.jpeg');
const image2 = require('../../assets/images/zurag1.jpeg');
const image3 = require('../../assets/images/zurag2.jpeg');
const image4 = require('../../assets/images/zurag3.jpeg');

export default function TabOneScreen(): React.ReactNode {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* <Image source={homeHero} style={styles.imgBack} /> */}
        <ImageBackground
          source={homeHero}
          resizeMode="cover"
          style={styles.imgBack}
          imageStyle={{ borderRadius: 25 }}>
          <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(0,0,0,0.6)']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            locations={[0, 0.6]}
            style={{ flex: 1 }}>
            <View style={styles.header}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.headerText}>Хайчихуу?</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <Cards
          name="Таньд санал болгох"
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          name1="Монгол нохой морь чарга"
          name2="Mongoljin tour"
          name3="Их гүрэн"
          name4="Их хаадын хүрээ"
        />
        <Cards
          name="Таньд санал болгох"
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          name1="Эрдэнэ зуу"
          name2="Эрдэнэ зуу"
          name3="Эрдэнэ зуу"
          name4="Эрдэнэ зуу"
        />
      </View>
      <View style={styles.footer}>
        <View>
          <Text>Footer</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    paddingHorizontal: 20,
  },
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
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 170,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundColor: 'black',
    // marginTop: 50,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,
    // elevation: 24,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: Colors.light.background,
  },
});
