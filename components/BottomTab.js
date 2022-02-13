import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#1F2326',
        zIndex: 3,
        justifyContent: 'center',
        paddingLeft: 40,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/img/logo.png')} style={{ width: 24, height: 20 }} />
      </TouchableOpacity>
      {/* <Text>BottomTab</Text> */}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
