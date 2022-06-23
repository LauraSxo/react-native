import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(input) {
        setEnteredGoal(input);
    }

    function addGoalHandler() {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
        props.endAddGoalHandler();
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.body}>
                <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler}
                           value={enteredGoal}/>
                <View style={styles.buttonView}>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.endAddGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
        marginBottom: 15,
        flex: 1,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 6,
    },
    buttonView: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        // justifyContent: 'space-evenly',
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
        borderRadius: 6,
    }
});

export default GoalInput;
