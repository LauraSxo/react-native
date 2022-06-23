import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const GoalItem = (props) => {
    // const [text] = props;

    return (
        <View style={styles.body}>
            <Pressable style={({pressed}) => pressed && styles.pressed} android_ripple={{color: 'yellow'}} onPress={props.onDelete.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'white',
    },
    pressed: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: '#66aa00',
    },
});

export default GoalItem;
