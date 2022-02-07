import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const WeaponCard = ({ weapon, onclick }) => {
  //   console.log(weapon);
  return (
    <TouchableOpacity onPress={() => onclick()} style={styles.con}>
      <View style={styles.body}>
        <Image
          source={{ uri: weapon.img }}
          style={{ height: '75%', resizeMode: 'contain', marginTop: '7%' }}
          //   style={{ width: '75%', resizeMode: 'contain', marginTop: '7%' }}
        />
        <Text style={styles.name}>{weapon.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WeaponCard;

const styles = StyleSheet.create({
  con: {
    width: 260,
    height: 150,
    alignSelf: 'center',
  },
  body: {
    backgroundColor: '#1f2326',
    paddingHorizontal: 10,
    width: 260,
    height: 130,
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Main-font',
    textTransform: 'uppercase',
    color: '#fff',
    position: 'absolute',
    bottom: -13,
    left: 20,
    fontSize: 23,
    zIndex: 3,
  },
});
