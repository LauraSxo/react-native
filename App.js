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
    View,
    FlatList,
    Button,
    Image,
    StatusBar,
} from 'react-native';

import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text>
//         {title}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
    const [goals, setGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function addGoalHandler(enteredGoal) {
        setGoals(currentGoals => [
            ...currentGoals,
            {text: enteredGoal, id: Math.random().toString()},
        ]);
    }

    function deleteGoal(id) {
        setGoals(currentGoals => currentGoals.filter(g => g.id !== id));
    }

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    return (
        <>
            <StatusBar style='auto'/>
            <View
                style={styles.bkg}
                collapsable={true}
            >
                <Image style={styles.img} source={require('./assets/106.jpeg')}/>
                <Button title='Add new goal' color='#EFABE1' onPress={startAddGoalHandler}/>
                <GoalInput addGoalHandler={addGoalHandler} visible={modalIsVisible}
                           endAddGoalHandler={endAddGoalHandler}/>
                <View style={styles.goalsContainer}>
                    <FlatList lwaysBounceVertical={false}
                              data={goals}
                              keyExtractor={(item, i) => {
                                  return item.id;
                              }}
                              renderItem={(g) => <GoalItem text={g.item.text} id={g.item.id} onDelete={deleteGoal}/>}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    bkg: {
        backgroundColor: '#00aaaa',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 30,
        paddingHorizontal: 15,
    },
    goalsContainer: {
        flex: 4,
        alignSelf: 'stretch',
    },
    img: {
        width: 200,
        height: 200,
        marginBottom: 15,
    },
});

export default App;
