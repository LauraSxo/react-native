/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    SafeAreaView,
} from 'react-native';


import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';

const App: () => Node = () => {
    const [userNumber, setUserNumber] = useState();
    const [gameOver, setGameOver] = useState(true);
    const [rounds, setRounds] = useState(0);

    function pickedNumberHandler(num) {
        setUserNumber(num);
        setGameOver(false);
    }

    function setGameOverHandler(rounds) {
        setGameOver(true);
        setRounds(rounds);
    }

    function restartHandler() {
        setUserNumber(null);
        setRounds(0);
        setGameOverHandler(false);
        pickedNumberHandler('');
    }

    let screen = <StartGameScreen handler={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen number={userNumber} setGameOverHandler={setGameOverHandler} />;
    }

    if (gameOver && userNumber) {
        screen = <GameOverScreen restartHandler={restartHandler} userNumber={userNumber} rounds={rounds}/>
    }

    return (
        <SafeAreaView style={styles.main}>
            <ImageBackground source={require('./assets/background.png')} resizeMode='cover' style={styles.main}
                             imageStyle={styles.bkgImage}>
                {/*<SafeAreaView style={styles.main}>*/}
                    {screen}
                {/*</SafeAreaView>*/}
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.mint,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    bkgImage: {
        opacity: 0.15,
    },
});

export default App;
