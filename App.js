/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

const drawerOptions = {
  headerStyle: {
    backgroundColor: '#46b094',
  },
  headerTintColor: 'white',
  drawerActiveBackgroundColor: '#3c9378',
  drawerActiveTintColor: 'white',
  drawerStyle: {
    backgroundColor: '#46b094',
  },
  // drawerIcon: ({color}) => {
  //   return (<Icon/>)
  // }
};

const Tabs = createBottomTabNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer>
      {/*<Drawer.Navigator initialRouteName='WelcomeScreen' screenOptions={drawerOptions}*/}
      {/*    // screenOptions={}*/}
      {/*>*/}
      {/*  <Drawer.Screen name='Welcome' component={WelcomeScreen} />*/}
      {/*  <Drawer.Screen name='User' component={UserScreen} />*/}
      {/*</Drawer.Navigator>*/}
      <Tabs.Navigator>
        <Tabs.Screen name='Welcome' component={WelcomeScreen} />
        <Tabs.Screen name='User' component={UserScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
