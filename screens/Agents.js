import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import MainHeader from '../components/MainHeader';
import AgentCard from '../components/AgentCard';

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

        <View style={{ marginTop: 30 }}>
          <ScrollView horizontal style={{ paddingLeft: 20 }}>
            {/* <AgentCard />
            <AgentCard />
            <AgentCard /> */}
            {agents && agents.map((agent, index) => <AgentCard agent={agent} key={index} />)}
            <View style={{ height: 20, width: 30 }} />
          </ScrollView>
        </View>
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
