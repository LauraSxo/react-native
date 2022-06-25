import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';

const Title = ({children}) => {
    return (
            <Text style={styles.body}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    body: {
        fontWeight: 'bold',
        fontSize: 28,
    },
});

export default Title;
