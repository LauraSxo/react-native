import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const MyInput = ({label, textInputConfig, value, style, invalid}) => {

    let inputStyles = [styles.text];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.textMultiline);
    }

    if (invalid) {
        inputStyles.push(styles.invalidText)
    }

    return (
        <View style={[styles.body, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput value={value} style={inputStyles} {...textInputConfig} />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary700,
        marginBottom: 4,
    },
    text: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700,
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidText: {
        color: GlobalStyles.colors.error50
    },
    textMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
});

export default MyInput;
