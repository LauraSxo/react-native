import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';

const StartGameScreen: () => Node = (props) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    function inputHandler(input) {
        setEnteredNumber(input);
    }

    function confirmHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
            Alert.alert('Error', 'Wrong number ' + enteredNumber, [
                {text: 'Ok', style: 'destructive', onPress: resetHandler},
            ]);
            return;
        }

        props.handler(chosenNumber);
    }

    function resetHandler() {
        setEnteredNumber('');
    }

    return (
        <>
            <Text style={styles.text}>Guess game</Text>
            <View style={styles.body}>
                <TextInput style={styles.input} maxLength={2} keyboardType='number-pad' autoCapitalize='none'
                           autoCorrect={false} value={enteredNumber} onChangeText={inputHandler}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <MainButton onPress={resetHandler}>Reset</MainButton>
                    </View>
                    <View style={styles.button}>
                        <MainButton onPress={confirmHandler}>Confirm</MainButton>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    body: {
        // flex: 1,
        backgroundColor: '#088',
        marginTop: 100,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 80,
        color: Colors.yellow,
        alignSelf: 'center',
        borderColor: Colors.yellow,
        borderWidth: 2,
        padding: 15,
    },
    input: {
        height: 60,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 60,
        textAlign: 'center',
    },
    buttons: {
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
    },
    button: {
        width: '40%',
    },
});

export default StartGameScreen;
