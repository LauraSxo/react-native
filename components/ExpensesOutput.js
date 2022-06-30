import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import {GlobalStyles} from '../constants/styles';

const ExpensesOutput = ({expenses, periodName, fallbackText}) => {
    // expenses = DUMMY_EXPENSES;
    let content = <Text style={styles.fbText}>{fallbackText}</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList data={expenses} />
    }

    return (
        <View style={styles.body}>
            <ExpensesSummary expenses={expenses} periodName={periodName}/>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
     body: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        padding: 24,
    },
    fbText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    },

});

export default ExpensesOutput;
