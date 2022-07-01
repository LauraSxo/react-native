import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const Loader = (props) => {
    return (
        <View style={styles.body}>
            <ActivityIndicator size='large' color='white' />
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
    }
});

export default Loader;
