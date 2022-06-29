/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExpensesScreen from './screens/ExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import ManageExpensesScreen from './screens/ManageExpensesScreen';
import {GlobalStyles} from './constants/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const stackOptions = {
    headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
    },
    headerTintColor: 'white',
    contentStyle: {
        backgroundColor:  GlobalStyles.colors.primary50,
    },
    sceneContainerStyle: {
        backgroundColor: '#ecd6a7',
    },
    tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500
    },
    tabBarActiveTintColor: GlobalStyles.colors.accent500

};

function ExpensesOverview() {
    return (
        <Tab.Navigator screenOptions={stackOptions}>
            <Tab.Screen name='RecentExpenses' component={RecentExpensesScreen} options={{
                title: 'Recent Expenses',
                tabBarLabel: 'Recent',
                tabBarIcon: ({color, size}) => (<Icon name='hourglass' color={color} size={size} />)
            }}/>
            <Tab.Screen name='AllExpenses' component={ExpensesScreen} options={{
                title: 'All Expenses',
                tabBarLabel: 'All',
                tabBarIcon: ({color, size}) => (<Icon name='calendar' color={color} size={size} />)
            }}/>
        </Tab.Navigator>
    );
}

const App: () => Node = () => {

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar barStyle='light-content'/>
            {/*<ScrollView*/}
            {/*    contentInsetAdjustmentBehavior="automatic">*/}
            <NavigationContainer>
                <Stack.Navigator screenOptions={stackOptions}>
                    <Stack.Screen name='Overview' component={ExpensesOverview} options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen name='ManageExpense' component={ManageExpensesScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
            {/*</ScrollView>*/}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
    },
});

export default App;
