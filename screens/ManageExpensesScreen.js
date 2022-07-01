import React, {useLayoutEffect, useContext, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import IconButton from '../components/ui/IconButton';
import {GlobalStyles} from '../constants/styles';
import {ExpenseContext} from '../store/expenseContext';
import ExpenseForm from '../components/manageExpense/ExpenseForm';
import {storeExpense, updateExpense, deleteExpense} from '../utility/http';
import Loader from '../components/ui/loader';

const ManageExpensesScreen = ({route, navigation}) => {
    const [loading, setLoading] = useState(false)

    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;

    const expensesCtx = useContext(ExpenseContext);

    const selectedExpense = expensesCtx.expenses.find((e) => e.id === expenseId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);


    async function deletExpense() {
        navigation.goBack();
        setLoading(true)
        await deleteExpense(expenseId);
        expensesCtx.deleteExpense(expenseId);
        setLoading(false)
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expense) {
        setLoading(true)
        if (isEditing) {
            expensesCtx.updateExpense(expenseId, expense);
            await updateExpense(expenseId, expense);
        } else {
            const id = await storeExpense(expense);
            expensesCtx.addExpense({...expense, id: id});
        }
        setLoading(false)
        navigation.goBack();
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <View style={styles.body}>
            <ExpenseForm cancelHandler={cancelHandler} confirmLabel={isEditing ? 'Update' : 'Add'} defaultExpense={selectedExpense}
                         confirmHandler={confirmHandler}/>
            {isEditing && (<View style={styles.deleteContainer}><IconButton icon={'trash'} color={GlobalStyles.colors.error500} size={36} onPress={deletExpense}/></View>)}
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
