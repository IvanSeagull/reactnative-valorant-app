import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const MainHeader = () => {
  return (
    <View style={styles.con}>
      <Image
        style={{ width: 8, height: 7, marginTop: 10 }}
        source={require('../assets/img/Polygon.png')}
      />
      <Text style={styles.test}>Valorant</Text>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  con: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 20,
  },
  test: {
    fontSize: 40,
    fontFamily: 'Main-font',
    color: '#fff',
    marginLeft: 5,
    // color: 'transparent',
    // textShadowColor: '#fff',
    // textShadowOffset: { width: 0, height: 0 },
    // textShadowRadius: 0,
  },
});
