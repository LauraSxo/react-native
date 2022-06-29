import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';

const ExpensesScreen = (props) => {
    return (
        <View style={styles.body}>
            <Text>Expenses</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        // flex: 1,
    },
});

export default ExpensesScreen;
