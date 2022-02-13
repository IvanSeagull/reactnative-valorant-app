import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';
import BottomTab from '../components/BottomTab';

import { useNavigation } from '@react-navigation/native';

const Weapon = ({ route }) => {
  const [weapon, setWeapon] = React.useState(route.params.weapon);
  //   console.log(weapon);
  const navigation = useNavigation();
  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <ScrollView>
          <MainHeader title={weapon.name} />

          <View style={styles.body}>
            <Image
              source={{ uri: weapon.img }}
              style={{ height: 150, resizeMode: 'contain', marginTop: '0%' }}
            />
            <View style={styles.price}>
              <Image
                source={require('../assets/img/credits.png')}
                style={{ width: 12, height: 12, resizeMode: 'contain' }}
              />
              <Text style={[styles.text, { marginLeft: 10, fontSize: 14 }]}>
                {weapon.shopData.cost === 0 ? 'free' : weapon.shopData.cost}
              </Text>
            </View>
            <Text style={styles.title}>Stats:</Text>
            <View style={styles.stats}>
              <View style={styles.row}>
                <Text style={[styles.text, { width: 175 }]}>magazine size:</Text>
                <Text style={styles.text}>{weapon.stats.magazineSize}</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.text, { width: 175 }]}>reload time seconds:</Text>
                <Text style={styles.text}>{weapon.stats.reloadTimeSeconds}</Text>
              </View>

              <View style={styles.row}>
                <Text style={[styles.text, { width: 175 }]}>fire rate:</Text>
                <Text style={styles.text}>{weapon.stats.fireRate}</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.text, { width: 175 }]}>fire mode:</Text>
                <Text style={styles.text}>
                  {weapon.stats.fireMode ? weapon.stats.fireMode.split('::')[1] : 'uknown'}
                </Text>
              </View>

              <View style={styles.row}>
                <Text style={[styles.text, { width: 175 }]}>wall penetration:</Text>
                <Text style={styles.text}>{weapon.stats.wallPenetration.split('::')[1]}</Text>
              </View>

              <View style={styles.row}>
                <Text style={[styles.text, { width: 175 }]}>zoom Multiplier:</Text>
                <Text style={styles.text}>
                  {weapon.stats.adsStats ? weapon.stats.adsStats.zoomMultiplier : 'no zoom'}
                </Text>
              </View>

              <View style={styles.row}>
                <Text style={[styles.text, { width: 175 }]}>equip Time Seconds:</Text>
                <Text style={styles.text}>{weapon.stats.equipTimeSeconds}</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.text, { width: 175 }]}>first Bullet Accuracy:</Text>
                <Text style={styles.text}>{weapon.stats.firstBulletAccuracy}</Text>
              </View>
            </View>

            <Text style={styles.title}>damage ranges:</Text>
            <View style={styles.damage}>
              {weapon.stats.damageRanges.map((range, index) => (
                <View key={index} style={styles.damageRow}>
                  <View style={styles.leftRow}>
                    <Text style={styles.text}>
                      {range.rangeStartMeters} - {range.rangeEndMeters}:
                    </Text>
                  </View>
                  <View style={styles.rightRow}>
                    <Text style={styles.text}>Head - {range.headDamage.toFixed(1)}</Text>
                    <Text style={styles.text}>Body - {range.bodyDamage.toFixed(1)}</Text>
                    <Text style={styles.text}>Leg - {range.legDamage.toFixed(1)}</Text>
                  </View>
                </View>
              ))}
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('SkinsScreen', { uuid: weapon.uuid })}
              style={{
                marginTop: 20,
                alignSelf: 'center',
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                backgroundColor: 'black',
              }}>
              <Text style={[styles.text, { textTransform: 'uppercase', fontSize: 15 }]}>
                Get skins
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: 80 }} />
        </ScrollView>
        <BottomTab />
      </ImageBackground>
    </View>
  );
};

export default Weapon;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 30,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    // position: 'absolute',
    marginTop: -10,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Main-font',
    textTransform: 'lowercase',

    fontSize: 13,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    // justifyContent: 'space-between',
    marginBottom: 5,
  },
  damage: {
    // marginTop: 20,
  },
  damageRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 250,
    // justifyContent: 'space-between',
    marginBottom: 10,
  },
  leftRow: {
    width: 175,
  },
  title: {
    fontFamily: 'Main-font',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff',
    marginTop: 20,
    marginBottom: 5,
  },
});
