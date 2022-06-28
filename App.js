/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
import FavouritesScreen from './screens/FavouritesScreen';
import FavoritesContextProvider, {FavouritesContext} from './store/context/favourite-context';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const stackOptions = {
    headerStyle: {
        backgroundColor: '#351401',
    },
    headerTintColor: 'white',
    contentStyle: {
        backgroundColor: '#ecd6a7',
    },
    sceneContainerStyle: {
        backgroundColor: '#ecd6a7',
    },
    drawerContentStyle: {
        backgroundColor: '#ecd6a7',
    },
};

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={stackOptions}>
            <Drawer.Screen name='Categories' component={CategoriesScreen}/>
            <Drawer.Screen name='Favorites' component={FavouritesScreen}/>
        </Drawer.Navigator>
    );
}

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar barStyle='light-content'/>
            {/*<FavoritesContextProvider>*/}
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Drawer" screenOptions={stackOptions}>
                        <Stack.Screen name='Drawer' component={DrawerNavigator} options={{
                            headerShown: false,
                        }}/>
                        <Stack.Screen name='Categories' component={CategoriesScreen}
                                      options={{title: 'Meals App'}}/>
                        <Stack.Screen name='Meals' component={MealsScreen}/>
                        <Stack.Screen name='Meal' component={MealScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
            {/*</FavoritesContextProvider>*/}
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
