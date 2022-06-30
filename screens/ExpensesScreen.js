import React, {useContext} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';
import {ExpenseContext} from '../store/expenseContext';

const ExpensesScreen = (props) => {
    const expensesCxt = useContext(ExpenseContext);

    return (
        <View style={styles.body}>
            <ExpensesOutput periodName={'Total'} expenses={expensesCxt.expenses} fallbackText={'No expenses! Congrats!'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
});

export default ExpensesScreen;
