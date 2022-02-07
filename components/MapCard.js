import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';
import Maps from '../screens/Maps';

const MapCard = ({ map }) => {
  // console.log(map);
  return (
    <View style={styles.con}>
      <ImageBackground resizeMode="cover" style={styles.backImg} source={{ uri: map.item.img }}>
        {/* <Image
          source={{ uri: map.item.minimap }}
          style={{ width: 80, height: 80, resizeMode: 'contain' }}
        /> */}
        <View style={styles.body}>
          <Text style={styles.name}>{map.item.name}</Text>
          <Text style={styles.cords}>{map.item.coords}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MapCard;

const styles = StyleSheet.create({
  con: {
    // flex: 1,
    width: '100%',
    maxWidth: 320,
    height: 180,
    backgroundColor: '#fff',
    marginBottom: 30,
    borderWidth: 3,
  },
  backImg: {
    flex: 1,
  },
  body: {
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
  name: {
    fontSize: 27,
    fontFamily: 'Main-font',
    textTransform: 'uppercase',
    color: '#fff',
  },
  cords: {
    fontSize: 7,
    fontFamily: 'Main-font',
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: '#fff',
  },
});
