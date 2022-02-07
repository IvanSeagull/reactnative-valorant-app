import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';
import MenuItem from '../components/MenuItem';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <MainHeader title="Valorant" />
        <View style={{ marginTop: 30, width: '100%', alignItems: 'center' }}>
          <MenuItem onclick={() => navigation.navigate('Agents')} title="Agents" />
          <MenuItem onclick={() => navigation.navigate('Maps')} title="Maps" />
          <MenuItem onclick={() => navigation.navigate('Weapons')} title="Weapons" />
        </View>
        {/* <Text>123</Text> */}
      </ImageBackground>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
});
