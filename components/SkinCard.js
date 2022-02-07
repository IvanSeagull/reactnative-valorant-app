import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const SkinCard = ({ skin }) => {
  return (
    <View style={styles.con}>
      <View style={styles.body}>
        <Image
          source={{ uri: skin.img }}
          style={{ height: '75%', resizeMode: 'contain', marginTop: '7%' }}
          //   style={{ width: '75%', resizeMode: 'contain', marginTop: '7%' }}
        />
        <Text style={styles.name}>{skin.name}</Text>
      </View>
    </View>
  );
};

export default SkinCard;

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
    bottom: -6,
    left: 15,
    fontSize: 12,
    zIndex: 3,
  },
});
