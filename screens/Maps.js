import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';

import { getMaps } from '../api';
import MapCard from '../components/MapCard';
import { useNavigation } from '@react-navigation/native';

import BottomTab from '../components/BottomTab';

const Maps = () => {
  const navigation = useNavigation();
  const [maps, setMaps] = React.useState([]);

  React.useEffect(() => {
    getMaps((res) => shortenObject(res));
  }, []);

  const shortenObject = (res) => {
    // console.log(res);
    const newArray = [];
    res.map((item) => {
      //   if (item.fullPortrait) {
      newArray.push({
        name: item.displayName,
        minimap: item.displayIcon,
        coords: item.coordinates,
        img: item.splash,
        uuid: item.uuid,
      });
      //   }
    });
    setMaps(newArray);
  };

  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <MainHeader title="maps" />

        <View style={{ marginTop: 30 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ paddingLeft: 20 }}
            data={maps}
            renderItem={(map) => {
              //   console.log(agent.index);
              return (
                <View>
                  <MapCard
                    onclick={() => navigation.navigate('MapCard', { map: map.item })}
                    map={map}
                  />
                  {map.index === maps.length - 1 ? (
                    <View style={{ width: '100%', height: 130 }} />
                  ) : null}
                </View>
              );
            }}
            keyExtractor={(agent) => agent.uuid}
          />
        </View>
        <BottomTab />
      </ImageBackground>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
});
