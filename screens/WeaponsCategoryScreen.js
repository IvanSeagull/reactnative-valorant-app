import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';
import WeaponCard from '../components/WeaponCard';
import { useNavigation } from '@react-navigation/native';

const WeaponsCategoryScreen = ({ route }) => {
  const navigation = useNavigation();
  //   console.log(route.params.weapons);
  const [weapons, setWeapons] = React.useState(route.params.weapons);
  const [category, setCategory] = React.useState(route.params.category);

  //   console.log(route.params.weapons[0]);
  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <MainHeader title={category} />
        {/* <WeaponCard weapon={weapons[0]} /> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 30 }}
          data={weapons}
          renderItem={(weapon) => {
            //   console.log(agent.index);
            return (
              <View>
                <WeaponCard
                  onclick={() => navigation.navigate('Weapon', { weapon: weapon.item })}
                  weapon={weapon.item}
                />
                {weapon.index === weapons.length - 1 ? (
                  <View style={{ width: '100%', height: 80 }} />
                ) : null}
              </View>
            );
          }}
          keyExtractor={(weapon) => weapon.uuid}
        />
      </ImageBackground>
    </View>
  );
};

export default WeaponsCategoryScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
});
