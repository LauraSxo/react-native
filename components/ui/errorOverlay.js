import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import MyButton from './MyButton';

const ErrorOverlay = ({message, onConfirm}) => {
    return (
        <View style={styles.body}>
            <Text style={[styles.text, styles.title]}>An Error occured</Text>
            <Text style={styles.text}>{message}</Text>
            <MyButton>Okay</MyButton>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text: {
        textAlign: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default ErrorOverlay;
