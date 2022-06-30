import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({data}) => {

    function renderItem(itemData) {
        return <ExpenseItem item={itemData.item} />
    }

    return (
        <View style={styles.body}>
            <FlatList data={data} renderItem={renderItem}
            keyExtractor={(item) => item.id}/>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginTop: 16,
    },
});

export default ExpensesList;
