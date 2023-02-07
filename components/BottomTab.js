import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          width: '100%',
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
          backgroundColor: '#1F2326',
          zIndex: 3,

          paddingLeft: 40,
        },
        Platform.OS === 'ios'
          ? { height: 90, paddingTop: 20 }
          : { height: 50, justifyContent: 'center' },
      ]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/img/logo.png')} style={{ width: 24, height: 20 }} />
      </TouchableOpacity>
      {/* <Text>BottomTab</Text> */}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
