import React, {useLayoutEffect, useContext} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import IconButton from '../components/ui/IconButton';
import {GlobalStyles} from '../constants/styles';
import MyButton from '../components/ui/MyButton';
import {ExpenseContext} from '../store/expenseContext';

const ManageExpensesScreen = ({route, navigation}) => {

    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;

    const expensesCtx = useContext(ExpenseContext);

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

    function confirmHandler() {
        if (isEditing) {
            expensesCtx.updateExpense();
        } else {
            expensesCtx.addExpense({description: 'descr', amount: 5.33, date: new Date()});
        }
        navigation.goBack();
    }

    return (
        <View style={styles.body}>
            <View style={styles.buttons}>
                <MyButton onPress={cancelHandler} mode={'flat'} style={styles.button} >Cancel</MyButton>
                <MyButton onPress={confirmHandler} mode={'flat'} style={styles.button} >{isEditing ? 'Update' : 'Add'}</MyButton>
            </View>
            {isEditing && (<View style={styles.deleteContainer}><IconButton icon={'trash'} color={GlobalStyles.colors.error500} size={36} onPress={deleteExpense}/></View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 24,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
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
