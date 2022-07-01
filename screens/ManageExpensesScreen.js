import React, {useLayoutEffect, useContext} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import IconButton from '../components/ui/IconButton';
import {GlobalStyles} from '../constants/styles';
import MyButton from '../components/ui/MyButton';
import {ExpenseContext} from '../store/expenseContext';
import ExpenseForm from '../components/manageExpense/ExpenseForm';

const ManageExpensesScreen = ({route, navigation}) => {

    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;

    const expensesCtx = useContext(ExpenseContext);

    const selectedExpense = expensesCtx.expenses.find((e) => e.id === expenseId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);


    function deleteExpense() {
        navigation.goBack();
        expensesCtx.deleteExpense(expenseId);
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expense) {
        if (isEditing) {
            expensesCtx.updateExpense(expenseId, expense);
        } else {
            expensesCtx.addExpense(expense);
        }
        navigation.goBack();
    }

    return (
        <View style={styles.body}>
            <ExpenseForm cancelHandler={cancelHandler} confirmLabel={isEditing ? 'Update' : 'Add'} defaultExpense={selectedExpense}
                         confirmHandler={confirmHandler}/>
            {isEditing && (<View style={styles.deleteContainer}><IconButton icon={'trash'} color={GlobalStyles.colors.error500} size={36} onPress={deleteExpense}/></View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 24,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});

export default ManageExpensesScreen;
