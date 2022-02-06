import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import MainHeader from '../components/MainHeader';

import { getAgents } from '../api';

const Agents = () => {
  const [agents, setAgents] = React.useState([]);

  React.useEffect(() => {
    getAgents((res) => setAgents(res));
  }, []);
  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <MainHeader title="agents" />
        {agents &&
          agents.map((agent) => {
            console.log(agent.displayName);
          })}
        {/* <Text>123</Text> */}
      </ImageBackground>
    </View>
  );
};

export default Agents;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
});
