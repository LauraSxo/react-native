import React, {useContext} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';

// import {FavouritesContext} from '../store/context/favourite-context';
import {MEALS} from '../data/dummy-data';
import Card from '../components/ui/Card';
import MealTile from '../components/MealTile';
import {useSelector} from 'react-redux';

const FavouritesScreen = ({navigation}) => {
    // const favContext = useContext(FavouritesContext);
    // const meals = MEALS.filter((i) => favContext.ids.includes(i.id))
    const favMealsIds = useSelector((state) => state.favoriteMeals.ids);

    const meals = MEALS.filter((i) => favMealsIds.includes(i.id))

    function renderMeal(itemData) {
        function pressHandler() {
            navigation.navigate('Meal', {
                mealId: itemData.item.id,
            });
        }
        return <Card height={300} onPress={pressHandler}><MealTile title={itemData.item.title} imgUrl={itemData.item.imageUrl} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability} /></Card>;
    }

    if (meals.length) {
        return (
            <View style={styles.body}>
                <FlatList
                    key={'_'}
                    data={meals}
                    keyExtractor={item => "_" + item.id}
                    renderItem={renderMeal}
                />
            </View>
        );
    }

    return <View style={styles.body}>
        <Text>There is no fav meals for you</Text>
    </View>;
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
});

export default FavouritesScreen;
