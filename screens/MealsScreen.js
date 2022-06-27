import React, {useLayoutEffect} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import Card from '../components/ui/Card';
import MealTile from '../components/MealTile';

const MealsScreen = ({route, navigation}) => {
    const {categoryId} = route.params;

    const filteredMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(categoryId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((cat) => cat.id == categoryId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation]);

    function renderMeal(itemData) {
        function pressHandler() {
            navigation.navigate('Meal', {
                mealId: itemData.item.id,
            });
        }
        return <Card height={300} onPress={pressHandler}><MealTile title={itemData.item.title} imgUrl={itemData.item.imageUrl} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability} /></Card>;
    }

    return (
        <View style={styles.body}>
            <FlatList
                key={'_'}
                data={filteredMeals}
                keyExtractor={item => "_" + item.id}
                renderItem={renderMeal.bind()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 16,
    },

});

export default MealsScreen;
