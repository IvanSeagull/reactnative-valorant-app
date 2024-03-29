import { StyleSheet, Text, View, ImageBackground, FlatList, SafeAreaView } from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';

import { getSkins } from '../api';
import SkinCard from '../components/SkinCard';
import BottomTab from '../components/BottomTab';

const SkinsScreen = ({ route }) => {
  const [uuid, setUuid] = React.useState(route.params.uuid);
  const [skins, setSkins] = React.useState([]);

  React.useEffect(() => {
    getSkins(uuid, (res) => shortenData(res));
  }, []);

  const shortenData = (res) => {
    let newArray = [];
    res.map((item) => {
      if (item.displayIcon) {
        if (item.displayName.slice(0, 8) !== 'Standard') {
          newArray.push({
            name: item.displayName,
            img: item.displayIcon,
            uuid: item.uuid,
          });
        }
      }
    });
    setSkins(newArray);
  };

  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <SafeAreaView>
          <MainHeader title={'Skins'} />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ paddingTop: 20 }}
            data={skins}
            renderItem={(skin) => {
              //   console.log(agent.index);
              return (
                <View>
                  <SkinCard skin={skin.item} />
                  {/* <MapCard
                    onclick={() => navigation.navigate('MapCard', { map: map.item })}
                    map={map}
                  /> */}
                  {skin.index === skins.length - 1 ? (
                    <View style={{ width: '100%', height: 80 }} />
                  ) : null}
                </View>
              );
            }}
            keyExtractor={(skin) => skin.uuid}
          />
        </SafeAreaView>
        <BottomTab />
      </ImageBackground>
    </View>
  );
};

export default SkinsScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
});
