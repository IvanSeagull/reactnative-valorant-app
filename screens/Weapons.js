import { StyleSheet, Text, View, ImageBackground, FlatList, SafeAreaView } from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';
import WeaponsCategoryCard from '../components/WeaponsCategoryCard';
import BottomTab from '../components/BottomTab';

import { getWeapons } from '../api';
import { useNavigation } from '@react-navigation/native';

const Weapons = () => {
  const navigation = useNavigation();
  // const [weapons, setWeapons] = React.useState([]);
  const [categories, setCategories] = React.useState([
    'Pistols',
    'SMGs',
    'Rifles',
    'Sniper Rifles',
    'Shotguns',
    'Heavy Weapons',
  ]);
  const [weapons, setWeapons] = React.useState({
    Pistols: [],
    SMGs: [],
    Rifles: [],
    'Sniper Rifles': [],
    Shotguns: [],
    'Heavy Weapons': [],
  });

  // const [heavy, setHeavy] = React.useState([]);
  // const [rifles, setRifles] = React.useState([]);
  // const [shotguns, setShotguns] = React.useState([]);
  // const [pistols, setPistols] = React.useState([]);
  // const [snipers, setSnipers] = React.useState([]);
  // const [smg, setSmg] = React.useState([]);

  React.useEffect(() => {
    getWeapons((res) => shortenObject(res));
  }, []);

  const shortenObject = (res) => {
    // console.log(res);
    // const newHeavy = [];
    // const newRifles = [];
    // const newShotguns = [];
    // const newPistols = [];
    // const newSnipers = [];
    // const newSmg = [];
    const newArray = {
      Pistols: [],
      SMGs: [],
      Rifles: [],
      'Sniper Rifles': [],
      Shotguns: [],
      'Heavy Weapons': [],
    };

    res.map((item) => {
      //   if (item.fullPortrait) {
      // console.log(item.shopData && item.shopData.category);
      if (item.shopData && item.shopData.category === 'Heavy Weapons') {
        newArray['Heavy Weapons'].push({
          uuid: item.uuid,
          name: item.displayName,
          img: item.displayIcon,
          stats: item.weaponStats,
          shopData: item.shopData,
        });
      } else if (item.shopData && item.shopData.category === 'Rifles') {
        newArray['Rifles'].push({
          uuid: item.uuid,
          name: item.displayName,
          img: item.displayIcon,
          stats: item.weaponStats,
          shopData: item.shopData,
        });
      } else if (item.shopData && item.shopData.category === 'Shotguns') {
        newArray['Shotguns'].push({
          uuid: item.uuid,
          name: item.displayName,
          img: item.displayIcon,
          stats: item.weaponStats,
          shopData: item.shopData,
        });
      } else if (item.shopData && item.shopData.category === 'Pistols') {
        newArray['Pistols'].push({
          uuid: item.uuid,
          name: item.displayName,
          img: item.displayIcon,
          stats: item.weaponStats,
          shopData: item.shopData,
        });
      } else if (item.shopData && item.shopData.category === 'Sniper Rifles') {
        newArray['Sniper Rifles'].push({
          uuid: item.uuid,
          name: item.displayName,
          img: item.displayIcon,
          stats: item.weaponStats,
          shopData: item.shopData,
        });
      } else if (item.shopData && item.shopData.category === 'SMGs') {
        newArray['SMGs'].push({
          uuid: item.uuid,
          name: item.displayName,
          img: item.displayIcon,
          stats: item.weaponStats,
          shopData: item.shopData,
        });
      }
    });
    // console.log(newArray);
    setWeapons(newArray);
  };

  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <SafeAreaView>
          <MainHeader title="weapons" />
          <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={categories}
              renderItem={(item) => {
                console.log(item);
                return (
                  <View>
                    <WeaponsCategoryCard
                      onclick={() =>
                        navigation.navigate('WeaponsCategoryScreen', {
                          weapons: weapons[item.item],
                          category: item.item,
                        })
                      }
                      title={item.item}
                    />
                    {item.index === categories.length - 1 ? (
                      <View style={{ width: '100%', height: 130 }} />
                    ) : null}
                  </View>
                );
              }}
              keyExtractor={(item) => item.index}
            />
          </View>
        </SafeAreaView>
        <BottomTab />
      </ImageBackground>
    </View>
  );
};

export default Weapons;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
});
