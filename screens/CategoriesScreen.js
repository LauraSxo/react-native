import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Card from '../components/ui/Card';
import CategoryTile from '../components/CategoryTile';

const CategoriesScreen = ({navigation}) => {

    function renderCategory(itemData) {
        function pressHandler() {
            navigation.navigate('Meals', {
                categoryId: itemData.item.id
            });
        }
        return <Card height={150} onPress={pressHandler}><CategoryTile title={itemData.item.title} color={itemData.item.color} /></Card>;
    }

    return (
        <View style={styles.body}>
            {/*{CATEGORIES.map((i) => (<Card>{i.title}</Card>))}*/}
            <FlatList
                // style={styles.categoryList}
                key={'_'}
                data={CATEGORIES} numColumns={2}
                keyExtractor={item => "_" + item.id}
                renderItem={renderCategory.bind()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        // flex: 1,
    },
    categoryList: {
        // flexDirection: 'row',
        // flexWrap: 'wrap',
    }
});

export default CategoriesScreen;
