import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Colors from '../constants/Colors';

const MainButton = ({children, onPress}) => {
    function pressHandler() {
        onPress();
    }

    return (
        <View style={styles.body}>
            <Pressable style={({pressed}) => pressed ? [styles.inner, styles.pressed] : styles.inner} onPress={pressHandler}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        // flex: 1,
        borderRadius: 6,
        marginVertical: 5,
        overflow: 'hidden',
    },
    inner: {
        backgroundColor: Colors.blue,
        padding: 8,

    },
    text: {
        textAlign: 'center',
        color: '#eee',
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75
    }
});

export default MainButton;
