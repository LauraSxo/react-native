import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = (props) => {

    const {color, icon, onPress} = props;
    return (
        <View style={styles.body}>
            <Pressable onPress={onPress}>
                <Icon name={icon} size={28} color={color??'white'}/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        // flex: 1,
    },
});

export default IconButton;
