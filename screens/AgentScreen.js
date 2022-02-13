import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';
import BottomTab from '../components/BottomTab';

import { useNavigation } from '@react-navigation/native';

const AgentScreen = ({ route }) => {
  const navigation = useNavigation();
  const [agent, setAgent] = React.useState(route.params.agent);
  //   console.log(agent.role);
  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <MainHeader title={agent.name} />
        <Image
          source={{ uri: agent.img }}
          style={{ height: '45%', resizeMode: 'contain', marginLeft: '10%' }}
        />
        <View style={styles.body}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: agent.role.displayIcon }} style={{ height: 21, width: 21 }} />
            <Text style={{ fontFamily: 'Main-font', fontSize: 20, color: '#fff', marginLeft: 10 }}>
              {agent.role.displayName}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Main-font',
              fontSize: 12,
              color: '#fff',
              textAlign: 'center',
              width: '100%',
              maxWidth: 310,
            }}>
            {agent.description}
          </Text>

          <View style={styles.abilities}>
            {agent &&
              agent.abilities.map((ability, index) => {
                if (ability.slot != 'Passive')
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SkillScreen', { skill: ability })}
                      activeOpacity={0.8}
                      style={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 10,
                        paddingVertical: 12,
                        borderWidth: 2,
                      }}
                      key={index}>
                      <Image
                        source={ability && { uri: ability.displayIcon }}
                        style={{ width: 46, height: 34, tintColor: '#000', resizeMode: 'contain' }}
                      />
                    </TouchableOpacity>
                  );
              })}
          </View>
        </View>
        <BottomTab />
      </ImageBackground>
      {/* <Text></Text> */}
    </View>
  );
};

export default AgentScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
  body: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  abilities: {
    marginTop: 30,
    width: '100%',
    maxWidth: 320,
    height: 50,
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
