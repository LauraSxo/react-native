import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';

const RecentExpensesScreen = (props) => {
    return (
        <View style={styles.body}>
            <Text>Recent Expanses</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
});

export default RecentExpensesScreen;
