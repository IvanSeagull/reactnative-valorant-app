import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const BundlesCard = ({ bundle }) => {
  return (
    <View style={{ marginBottom: 35, width: 270, height: 170 }}>
      <View
        style={{
          width: 250,
          height: 120,
          backgroundColor: '#1f2326',
          marginLeft: 12,
          marginTop: -8,
        }}>
        <View style={{ marginLeft: -12, marginTop: 8, width: 250, height: 120 }}>
          <Image
            source={{ uri: bundle.img }}
            style={{ width: 250, height: 150, resizeMode: 'contain' }}
          />
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Main-font',
              textTransform: 'uppercase',
              marginTop: -27,
              marginLeft: 10,
            }}>
            {bundle.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BundlesCard;

const styles = StyleSheet.create({});
