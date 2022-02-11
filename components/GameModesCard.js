import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const GameModesCard = ({ mode }) => {
  console.log(mode);
  return (
    <View style={styles.con}>
      <View style={styles.body}>
        <Image
          source={{ uri: mode.img }}
          style={{ height: 40, width: 40, resizeMode: 'contain', marginLeft: -15, marginTop: -15 }}
        />
        <Text style={[styles.text, { fontSize: 17, marginLeft: 15, marginTop: 10 }]}>
          {mode.name}
        </Text>
        <Text style={[styles.text, { fontSize: 14, marginLeft: 15, marginTop: 5 }]}>
          {mode.duration ? mode.duration : 'unknown'}
        </Text>
      </View>
    </View>
  );
};

export default GameModesCard;

const styles = StyleSheet.create({
  con: {
    width: 270,
    paddingLeft: 15,
    height: 120,
    paddingTop: 15,
    marginBottom: 20,
  },
  body: {
    width: 250,
    height: 100,
    backgroundColor: '#1f2326',
  },
  text: {
    color: '#fff',
    fontFamily: 'Main-font',
    textTransform: 'uppercase',
  },
});
