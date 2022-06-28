import React, {useLayoutEffect, useContext} from 'react';
import {View, ScrollView, Text, Pressable, StyleSheet, Alert, TextInput, Image} from 'react-native';
import {MEALS} from '../data/dummy-data';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from '../components/ui/IconButton';
// import {FavouritesContext} from '../store/context/favourite-context';
import {useDispatch, useSelector} from 'react-redux';
import {addFavourite, removeFavourite} from '../store/redux/favorites';

const MealScreen = ({route, navigation}) => {
    const {mealId} = route.params;
    const meal = MEALS.find((item) => item.id === mealId);
    const {
        title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree,
    } = meal;

    // const favMealsContext = useContext(FavouritesContext);
    // const isFavorite = favMealsContext.ids.includes(mealId);

    const dispatch = useDispatch();
    const favMealIds = useSelector((state) => state.favoriteMeals.ids);
    const isFavorite = favMealIds.includes(mealId);


    function setFavourite() {
        if (isFavorite) {
            // favMealsContext.removeFavourite(mealId);
            dispatch(removeFavourite({id: mealId}));
        } else {
            dispatch(addFavourite({id: mealId}));
            // favMealsContext.addFavourite(mealId);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: title,
            headerRight: () => (<IconButton icon='heart' color={isFavorite? 'white' : '#aaa'} onPress={setFavourite} />),
        });
    }, [navigation, setFavourite]);

    return (
        <ScrollView style={styles.body}>
            <View>
                <Image style={styles.img} source={{uri: imageUrl}}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View styles={styles.content}>
                <View style={styles.details}>
                    <Text>{duration}m</Text>
                    <Text>{complexity}</Text>
                    <Text>{affordability}</Text>
                </View>
                <View style={styles.checks}>
                    <Text>Gluten Free</Text>
                    <Text>Vegan</Text>
                    <Text>Vegetarian</Text>
                    <Text>Lactose Free</Text>
                </View>
                <View style={styles.checks}>
                    <Icon name="check-square" size={30} color={isGlutenFree ? 'black' : '#ccc'}/>
                    <Icon name="check-square" size={30} color={isVegan ? 'black' : '#ccc'}/>
                    <Icon name="check-square" size={30} color={isVegetarian ? 'black' : '#ccc'}/>
                    <Icon name="check-square" size={30} color={isLactoseFree ? 'black' : '#ccc'}/>
                </View>
                <Text style={styles.title}>Ingredients</Text>
                <View style={styles.ingredients}>{ingredients.map((v, i) => <Text key={i}>{v}</Text>)}</View>
                <Text style={styles.title}>Steps</Text>
                <View style={styles.steps}>{steps.map((v, i) => <Text key={i}>{i + 1}. {v}</Text>)}</View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 15,
        width: '90%',
    },
    img: {
        width: '100%',
        height: 250,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 16,
    },
    checks: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        marginHorizontal: 15,
    },
    ingredients: {
        flex: 1,
    },
    steps: {
        flex: 1,
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textHighlight: {
        fontWeight: 'bold',
    },
});

export default MealScreen;
