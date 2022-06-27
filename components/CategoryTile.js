import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';

const CategoryTile = (props) => {
    return (
        <View style={[styles.innerButton, {backgroundColor: props.color}]}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    innerButton: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default CategoryTile;
