import React, {useContext} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';
import {ExpenseContext} from '../store/expenseContext';
import {getDateMinusDays} from '../utility/date';

const RecentExpensesScreen = (props) => {
    const expensesCxt = useContext(ExpenseContext);

    const recentExpenses = expensesCxt.expenses.filter((v) => {
        const today = new Date();
        const days7ago = getDateMinusDays(today, 7);
        return v.date > days7ago
    })

    return (
        <View style={styles.body}>
            <ExpensesOutput periodName={'7 days'} expenses={recentExpenses} fallbackText={'No recent expenses found'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
});

export default RecentExpensesScreen;
