import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';
import React from 'react';
import MainHeader from '../components/MainHeader';
import AgentCard from '../components/AgentCard';

import { getAgents } from '../api';

const Agents = () => {
  const [agents, setAgents] = React.useState([]);

  React.useEffect(() => {
    getAgents((res) => shortenObject(res));
  }, []);

  const shortenObject = (res) => {
    // console.log(res);
    const newArray = [];
    res.map((item) => {
      if (item.fullPortrait) {
        newArray.push({
          name: item.displayName,
          img: item.fullPortrait,
          description: item.description,
          role: item.role,
          abilities: item.abilities,
          uuid: item.uuid,
        });
      }
    });
    setAgents(newArray);
  };

  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <MainHeader title="agents" />

        <View style={{ marginTop: 30 }}>
          <FlatList
            style={{ paddingLeft: 20 }}
            horizontal
            data={agents}
            renderItem={(agent) => {
              return <AgentCard agent={agent} />;
            }}
            keyExtractor={(agent) => agent.uuid}
          />
        </View>
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
