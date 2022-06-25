import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';

const GameOverScreen = (props) => {

    function goBack() {
        props.restartHandler()
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Game is over!</Text>
            <View style={styles.buttons}>
                <MainButton onPress={goBack} >Go back</MainButton>
                <View style={styles.imgBox}>
                    <Image style={styles.img} source={require('../assets/success.png')}  />
                </View>
            </View>
            <Text>Your phone needed {props.rounds} rounds to guess the number {props.userNumber}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        fontSize: 48,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    imgBox: {
        borderRadius: 200,
        width: 200,
        height: 200,
        borderWidth: 3,
        borderColor: Colors.mint,
        overflow: 'hidden',
        margin: 30,
    },
    img: {
        width: '100%',
        height: '100%',
    }
});

export default GameOverScreen;
