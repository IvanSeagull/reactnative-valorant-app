import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';

const MainStack = createStackNavigator();

// Screens
import Main from './screens/Main';
import Agents from './screens/Agents';

export default function App() {
  let [fontsLoaded, error] = useFonts({
    'Main-font': require('./assets/fonts/DrukWide-Medium.ttf'),
    'Main-font-bold': require('./assets/fonts/DrukWide-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
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
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
