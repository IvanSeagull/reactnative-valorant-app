import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const AgentCard = ({ agent }) => {
  return (
    <View style={styles.con}>
      <View style={styles.body}>
        <View style={styles.nameCon}>
          <Text style={styles.Name}>{agent && agent.item.name}</Text>
        </View>
        <Image
          source={agent && { uri: agent.item.img }}
          style={{ height: '100%', resizeMode: 'cover', marginLeft: 40 }}
        />
      </View>
      <View style={styles.abilities}>
        {agent &&
          agent.item.abilities.map((ability, index) => {
            if (ability.slot != 'Passive')
              return (
                <Image
                  key={index}
                  source={ability && { uri: ability.displayIcon }}
                  style={{ width: 23, height: 17 }}
                />
              );
          })}
      </View>
    </View>
  );
};

export default AgentCard;

const styles = StyleSheet.create({
  con: {
    width: 260,
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
  abilities: {
    width: 220,
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 45,
    backgroundColor: '#1f2326',
    borderWidth: 2,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
