import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function StartScreen({navigation}) {

  function openDrawer() {
    navigation.toggleDrawer()
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Start"</Text> screen!
      </Text>
      <Button title={"Open Drawer"} onPress={openDrawer}/>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
