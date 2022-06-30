import React from 'react';
import {View, FlatList, Text, Pressable, StyleSheet, Alert, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({icon, color, size, onPress}) => {

    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
            <View style={styles.container}>
                <Icon name={icon} color={color} size={size} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        borderRadius: 24,
        padding: 6,
        marginVertical: 2,
        marginHorizontal: 8,
    },
    pressed: {
        opacity: 0.75
    }
});

export default IconButton;
