import { StyleSheet, Text, View, ImageBackground, FlatList, SafeAreaView } from 'react-native';
import React from 'react';

import MainHeader from '../components/MainHeader';
import BundlesCard from '../components/BundlesCard';
import BottomTab from '../components/BottomTab';

import { getBundles } from '../api';

const BundlesScreen = () => {
  const [bundles, setBundles] = React.useState([]);

  React.useEffect(() => {
    getBundles((res) => shortedData(res));
  }, []);

  const shortedData = (data) => {
    // console.log(data);
    let newArray = [];
    data.map((item) => {
      newArray.push({
        name: item.displayName,
        img: item.displayIcon,
        uuid: item.uuid,
      });
    });
    setBundles(newArray);
  };
  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <SafeAreaView>
          <MainHeader title="Bundles" />
          <View style={{ marginTop: 30, width: '100%', alignItems: 'center' }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              // style={{ paddingLeft: 20 }}
              data={bundles}
              renderItem={(bundle) => {
                //   console.log(agent.index);
                return (
                  <View>
                    <BundlesCard
                      // onclick={() => navigation.navigate('MapCard', { map: map.item })}
                      bundle={bundle.item}
                    />
                    {bundle.index === bundles.length - 1 ? (
                      <View style={{ width: '100%', height: 80 }} />
                    ) : null}
                  </View>
                );
              }}
              keyExtractor={(bundle) => bundle.uuid}
            />
          </View>
        </SafeAreaView>
        <BottomTab />
      </ImageBackground>
    </View>
  );
};

export default BundlesScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
});
