import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const MainHeader = ({ title }) => {
  return (
    <View style={styles.con}>
      <Image
        style={{ width: 8, height: 7, marginTop: 5 }}
        source={require('../assets/img/Polygon.png')}
      />
      <Text style={styles.text}>{title}</Text>
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
  text: {
    fontSize: 27,
    fontFamily: 'Main-font',
    textTransform: 'uppercase',
    color: '#fff',
    marginLeft: 5,
    // color: 'transparent',
    // textShadowColor: '#fff',
    // textShadowOffset: { width: 0, height: 0 },
    // textShadowRadius: 0,
  },
});
