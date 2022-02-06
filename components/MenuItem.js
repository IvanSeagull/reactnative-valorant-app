import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const MenuItem = ({ title, onclick }) => {
  return (
    <TouchableOpacity
      onPress={onclick ? () => onclick() : null}
      activeOpacity={0.8}
      style={styles.con}>
      <Text style={{ fontFamily: 'Main-font', fontSize: 24, textTransform: 'uppercase' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  con: {
    width: '100%',
    maxWidth: 300,
    height: 160,
    backgroundColor: '#fff',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#1F2326',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
