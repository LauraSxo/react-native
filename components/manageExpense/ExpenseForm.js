import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import MyInput from './MyInput';
import MyButton from '../ui/MyButton';

const ExpenseForm = (props) => {

    const defaultExpense = props.defaultExpense;
    const [amount, setAmount] = useState({
        value: defaultExpense ? defaultExpense.amount.toString() : '',
        isValid: true,
    });
    const [date, setDate] = useState({
        value: defaultExpense ? defaultExpense.date.toISOString().slice(0,10) : '',
        isValid: true,
    });
    const [description, setDescription] = useState({
        value: defaultExpense ? defaultExpense.description : '',
        isValid: true,
    });

    function amountChangedHandler(curAmount) {
        let newAmount = {...amount, value: curAmount}
        setAmount(newAmount)
    }

    function dateChangeHandler(curDate) {
        let newDate = {...date, value: curDate}
        setDate(newDate)
    }

    function descrChangeHandler(curDescription) {
        let newDescr = {...description, value: curDescription}
        setDescription(newDescr)
    }

    function submitHandler() {
        const expense = {
            amount: +amount.value,
            date: new Date(date.value),
            description: description.value
        };

        const amountIsValid = !isNaN(expense.amount) && expense.amount > 0;
        const dateIsValid = expense.date.toString() !== 'Invalid Date';
        const descrIsValid = expense.description && expense.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descrIsValid) {
            setAmount({
                value: amount.value,
                isValid: amountIsValid
            });
            setDate({
                value: date.value,
                isValid: dateIsValid
            });
            setDescription({
                value: description.value,
                isValid: descrIsValid
            })

            return;
        }

        props.confirmHandler(expense);
    }

    const formIsInvalid = !amount.isValid || !date.isValid || description.isValid;

    return (
        <View style={styles.body}>
            <View style={styles.boxView}>
                <MyInput style={styles.input} label={'Amount'} value={amount.value} invalid={!amount.isValid}
                         textInputConfig={{keyboardType: 'decimal-pad', onChangeText: amountChangedHandler}} />
                <MyInput style={styles.input} label={'Date'} value={date.value} invalid={!date.isValid}
                         textInputConfig={{placeholder: 'YYYY-MM-DD', maxLength: 10, onChangeText: dateChangeHandler}} />
            </View>
            <MyInput label={'Description'} textInputConfig={{multiline: true, onChangeText: descrChangeHandler}}
                     value={description.value} invalid={!description.isValid} />
            {formIsInvalid && <Text>Please check your data</Text>}
            <View style={styles.buttons}>
                <MyButton onPress={props.cancelHandler} mode={'flat'} style={styles.button} >Cancel</MyButton>
                <MyButton onPress={submitHandler} mode={'flat'} style={styles.button} >{props.confirmLabel}</MyButton>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    body: {
        // flex: 1,
        marginTop: 30,
    },
    boxView: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        flex: 1
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
});

export default ExpenseForm;
