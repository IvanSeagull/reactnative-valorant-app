import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const AgentCard = ({ agent }) => {
  console.log(agent.fullPortrait);
  return (
    <View style={styles.con}>
      <View style={styles.body}>
        <View style={styles.nameCon}>
          <Text style={styles.Name}>{agent.displayName}</Text>
        </View>
        <Image
          source={{ uri: agent.fullPortrait }}
          style={{ height: '100%', resizeMode: 'cover', marginLeft: 40 }}
        />
      </View>
    </View>
  );
};

export default AgentCard;

const styles = StyleSheet.create({
  con: {
    width: 240,
    height: 440,
    paddingLeft: 20,
    marginRight: 20,
  },
  body: {
    width: 220,
    height: 420,
    backgroundColor: '#1f2326',
  },
  nameCon: {
    transform: [{ rotate: '90deg' }],
    position: 'absolute',
    top: 160,
    left: -170,
    width: 350,
  },
  Name: {
    fontSize: 40,
    // textAlign: 'left',
    color: '#fff',
    fontFamily: 'Main-font',
    textTransform: 'uppercase',
  },
});
