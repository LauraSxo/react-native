import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const ExpensesSummary = ({periodName, expenses}) => {
    const expensesSum = expenses.reduce((sum, v) => {
        return sum + v.amount;
    }, 0);

    return (
        <View style={styles.summary}>
            <Text style={styles.periodName}>{periodName}</Text>
            <Text style={styles.periodAmount}>${expensesSum.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    summary: {
        // flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary50,
        flexDirection: 'row',
        padding: 16,
        borderRadius: 8,
    },
    periodName: {
    },
    periodAmount: {

        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default ExpensesSummary;
