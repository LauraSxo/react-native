import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Pressable, TextInput} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import getFormattedDate from '../utility/date';
import {useNavigation} from '@react-navigation/native'

const ExpenseItem = ({item, onPress}) => {
    const {id, description, amount, date} = item;

    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpense', {expenseId: id});
    }

    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={expensePressHandler}>
            <View style={styles.body}>
                <View style={styles.row}>
                    <Text
                        style={[styles.textBase, styles.descr]}>{description[0].toUpperCase() + description.slice(1)}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                    {/*<Text style={styles.textBase}>{date.toISOString().slice(0,10)}</Text>*/}
                </View>
                <View style={styles.priceContainer}>
                    <Text style={[styles.textBase, styles.price]}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    body: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
    },
    pressed: {
        opacity: 0.75,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    descr: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    priceContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 70,
    },
    price: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
});

export default ExpenseItem;
