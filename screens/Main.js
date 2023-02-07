import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';
import MenuItem from '../components/MenuItem';
import { useNavigation } from '@react-navigation/native';

import bgImg from '../api/img';
// import FastImage from 'react-native-fast-image';

const Main = () => {
  const [img, setImg] = React.useState(require('../assets/img/bg.png'));
  const navigation = useNavigation();
  return (
    <View style={styles.con}>
      <ImageBackground source={img} resizeMode="cover" style={styles.backImg}>
        <SafeAreaView style={{ flex: 1 }}>
          <MainHeader title="Valorant" />
          <ScrollView>
            <View style={{ marginTop: 30, width: '100%', alignItems: 'center' }}>
              <MenuItem onclick={() => navigation.navigate('Agents')} title="Agents" />
              <MenuItem onclick={() => navigation.navigate('Maps')} title="Maps" />
              <MenuItem onclick={() => navigation.navigate('Weapons')} title="Weapons" />
              <MenuItem onclick={() => navigation.navigate('GameModes')} title="Game modes" />
              <MenuItem onclick={() => navigation.navigate('BundlesScreen')} title="Bundles" />
            </View>
          </ScrollView>
        </SafeAreaView>
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
