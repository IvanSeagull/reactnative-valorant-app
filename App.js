import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';

const MainStack = createStackNavigator();

// Screens
import Main from './screens/Main';

// Agents
import Agents from './screens/Agents';
import AgentScreen from './screens/AgentScreen';
import SkillScreen from './screens/SkillScreen';

// Maps
import Maps from './screens/Maps';
import MapCard from './components/MapCard';

// Weapons
import Weapons from './screens/Weapons';
import WeaponsCategoryScreen from './screens/WeaponsCategoryScreen';
import Weapon from './screens/Weapon';
import SkinsScreen from './screens/SkinsScreen';

// Game modes
import GameModes from './screens/GameModes';

// Bundles
import BundlesScreen from './screens/BundlesScreen';

export default function App() {
  let [fontsLoaded, error] = useFonts({
    'Main-font': require('./assets/fonts/DrukWide-Medium.ttf'),
    'Main-font-bold': require('./assets/fonts/DrukWide-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ff4656',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Text>Loading</Text> */}
        <ActivityIndicator size={40} color={'#1F2326'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen name="Main" component={Main} />

          <MainStack.Screen name="Agents" component={Agents} />
          <MainStack.Screen name="AgentScreen" component={AgentScreen} />
          <MainStack.Screen name="SkillScreen" component={SkillScreen} />

          <MainStack.Screen name="Maps" component={Maps} />
          <MainStack.Screen name="MapCard" component={MapCard} />

          <MainStack.Screen name="Weapons" component={Weapons} />
          <MainStack.Screen name="WeaponsCategoryScreen" component={WeaponsCategoryScreen} />
          <MainStack.Screen name="Weapon" component={Weapon} />
          <MainStack.Screen name="SkinsScreen" component={SkinsScreen} />

          <MainStack.Screen name="GameModes" component={GameModes} />

          <MainStack.Screen name="BundlesScreen" component={BundlesScreen} />
        </MainStack.Navigator>

        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <Main /> */}
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
