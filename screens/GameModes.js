import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';

import { getGameModes } from '../api';

import GameModesCard from '../components/GameModesCard';
import BottomTab from '../components/BottomTab';

const GameModes = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getGameModes((res) => shortedData(res));
  }, []);

  const shortedData = (data) => {
    // console.log(data);
    const newArray = [];

    data.map((item) => {
      newArray.push({
        name: item.displayName,
        duration: item.duration,
        img: item.displayIcon,
      });
    });
    newArray.push({
      name: 'competitive',
      duration: newArray[0].duration,
      img: newArray[0].img,
    });
    setData(newArray);
  };

  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <MainHeader title="game modes" />
        <View style={{ marginTop: 30, width: '100%', alignItems: 'center' }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            // style={{ paddingLeft: 20 }}
            data={data}
            renderItem={(mode) => {
              //   console.log(agent.index);
              return (
                <View>
                  <GameModesCard
                    // onclick={() => navigation.navigate('MapCard', { map: map.item })}
                    mode={mode.item}
                  />
                  {mode.index === data.length - 1 ? (
                    <View style={{ width: '100%', height: 130 }} />
                  ) : null}
                </View>
              );
            }}
            keyExtractor={(mode) => mode.name}
          />
        </View>
        <BottomTab />
      </ImageBackground>
    </View>
  );
};

export default GameModes;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
});
