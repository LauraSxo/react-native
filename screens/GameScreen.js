import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import MainButton from '../components/MainButton';
import Title from '../components/Title';
import Colors from '../constants/Colors';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function generateRandom(min, max, exclude) {
    const num = Math.floor(Math.random() * (max - min)) + min;

    if (num === exclude) {
        return generateRandom(min, max, exclude);
    }
    return num;
}

let curMin = 1;
let curMax = 100;

const GameScreen = (props) => {
        const {number, setGameOverHandler} = props;
        const initialGuess = generateRandom(1, 100, number);
        const [curGuess, setCurGuess] = useState(initialGuess);
        const [guessedRounds, setGuessedRounds] = useState([initialGuess]);

        useEffect(() => {
            if (curGuess == number) {
                setGameOverHandler(guessedRounds.length);
            }
        }, [curGuess, number, setGameOverHandler]);

        useEffect(() => {
            curMin = 1;
            curMax = 100;
        }, []);

        function nextGuessHandler(dir) {

            if ((dir === 'lower' && curGuess < number) ||
                (dir === 'higher' && curGuess > number)) {
                Alert.alert('Don\'t lie',
                    'You know what\'s wrong here',
                    [{text: 'Sorry!', style: 'cancel'}],
                );
                return;
            }

            if (dir === 'lower' && curGuess > number) {
                curMax = curGuess;
            } else if ((dir === 'higher' && curGuess < number)) {
                curMin = curGuess + 1;
            }

            let guess = generateRandom(curMin, curMax, curGuess);
            setGuessedRounds((prev) => [...prev, guess]);
            setCurGuess(guess);
        }

        return (
            <View style={styles.body}>
                <Title>Opponent's guess:</Title>
                <Text style={styles.guess}>{curGuess}</Text>
                <View style={styles.guessWindow}>
                    <Text>Higher or lower?</Text>
                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <FontAwesomeIcon name="angle-left" size={24}/>
                            </MainButton>
                        </View>
                        <View style={styles.button}>
                            <MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
                                <FontAwesomeIcon name="angle-right" size={24}/>
                            </MainButton>
                        </View>
                    </View>
                </View>
                <View style={styles.flatContainer}>
                    {/*<Text>Log rounds:</Text>*/}
                    <FlatList style={styles.roundList} data={guessedRounds} keyExtractor={(item) => item}
                              renderItem={({item, index}) =>
                                  <View style={styles.roundItem}>
                                      <Text>#{index}</Text>
                                      <Text style={styles.round}>{item}</Text>
                                  </View>
                              }></FlatList>
                </View>
            </View>
        );
    }
;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 100,
    },
    guess: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 15,
    },
    guessWindow: {
        backgroundColor: Colors.yellow,
        borderRadius: 10,
        padding: 15,
        marginVertical: 15,
        width: '80%',
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
    },
    button: {
        width: '30%',
    },
    flatContainer: {
        flex: 1,
        width: '70%',
    },
    roundList: {
        // justifyContent: 'center',
    },
    roundItem: {
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3,
        paddingVertical: 15,

    },
    round: {
        // width: '100%',
    },
});

export default GameScreen;
