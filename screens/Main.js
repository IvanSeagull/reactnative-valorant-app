import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';

const Main = () => {
  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <MainHeader />
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
