import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';
import MainHeader from '../components/MainHeader';
import BottomTab from '../components/BottomTab';

const SkillScreen = ({ route }) => {
  const [skill, setSkill] = React.useState(route.params.skill);
  //   console.log(skill.displayName);
  return (
    <View style={styles.con}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        resizeMode="cover"
        style={styles.backImg}>
        <MainHeader title={skill.displayName} />
        <View style={styles.body}>
          <Image
            source={{ uri: skill.displayIcon }}
            style={{ width: 138, height: 102, resizeMode: 'contain' }}
          />
          <Text
            style={{
              fontFamily: 'Main-font',
              fontSize: 12,
              color: '#fff',
              textAlign: 'center',
              width: '100%',
              maxWidth: 310,
              marginTop: '10%',
            }}>
            {skill.description}
          </Text>
        </View>
        <BottomTab />
      </ImageBackground>
    </View>
  );
};

export default SkillScreen;

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
    marginTop: '45%',
  },
});
