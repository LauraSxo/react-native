import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';

const MealTile = (props) => {
    return (
        <View style={styles.innerButton}>
            <View>
                <Image style={styles.img} source={{uri: props.imgUrl}}/>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.details}>
                <Text>{props.duration}m</Text>
                <Text>{props.complexity}</Text>
                <Text>{props.affordability}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    innerButton: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 8,
        margin: 6,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textHighlight: {
        fontWeight: 'bold',
    },
});

export default MealTile;
