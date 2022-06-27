import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, Pressable} from 'react-native';

const Card = (props) => {

    function onPress() {
        props.onPress();
    }

    return (
        <View style={[styles.body, {height: props.height}]}>
            <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                       android_ripple={{color: '#ccc'}}
                       onPress={onPress}
            >
                {props.children}
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // width: '40%',
        margin: 15,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 4,
    },
    button: {
        flex: 1,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    },
});

export default Card;
