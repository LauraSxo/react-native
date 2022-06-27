/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealScreen from './screens/MealScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const stackOptions = {
    headerStyle: {
        backgroundColor: '#351401',
    },
    headerTintColor: 'white',
    contentStyle: {
        backgroundColor: '#ecd6a7',
    },
};

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar barStyle='light-content'/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Categories" screenOptions={stackOptions}>
                    <Stack.Screen name='Categories' component={CategoriesScreen} options={{title: 'Meals App'}}/>
                    <Stack.Screen name='Meals' component={MealsScreen}/>
                    <Stack.Screen name='Meal' component={MealScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        backgroundColor: '#444',
    },
});

export default App;
