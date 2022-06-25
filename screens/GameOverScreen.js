import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet, Alert, TextInput, Dimensions, useWindowDimensions} from 'react-native';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';
const ScreenWidth = Dimensions.get('screen').width;

const GameOverScreen = (props) => {

    const {width, height} = useWindowDimensions();

    function goBack() {
        props.restartHandler()
    }

    const marginTop = height < 380 ? 30: 100;

    return (
        <View style={[styles.body, {marginTop: marginTop}]}>
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
        padding: ScreenWidth < 380 ? 10 : 20,
    },
    text: {
        fontSize: 48,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    imgBox: {
        borderRadius: ScreenWidth < 380 ? 150 : 200,
        width: ScreenWidth < 380 ? 150 : 200,
        height: ScreenWidth < 380 ? 150 : 200,
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
