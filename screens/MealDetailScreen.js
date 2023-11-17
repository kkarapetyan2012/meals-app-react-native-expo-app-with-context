import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetaail/SubTitle";
import List from "../components/MealDetaail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorites-context";

// function MealDetailScreen({ route, navigation }) {
//     const mealId = route.params.mealId;
//     const selectedMeal = MEALS.find(meals => meals.id === mealId);

//     function headerButtonPressHandler() {
//         console.log('pressed');
//     }

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerRight: () => {
//                 return <IconButton onPress={headerButtonPressHandler} />
//             }
//         })
//     }, [])
//     return (
//         <ScrollView style={styles.rootContainer}>
//             <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
//             <Text style={styles.title}>{selectedMeal.title}</Text>
//             <MealDetails 
//                 duration={selectedMeal.duration}
//                 complexity={selectedMeal.complexity}
//                 affordability={selectedMeal.affordability}
//                 textStyle={styles.detailText}
//             />

//             <View style={styles.listOuterContainer}>
//                 <View style={styles.listContainer}>
//                     <SubTitle>Ingredients</SubTitle>
//                     {/* {selectedMeal.ingredients.map(ingredient => 
//                         <Text>{ingredient}</Text>
//                     )} */}
//                     <List data={selectedMeal.ingredients} />

//                     <SubTitle>Steps</SubTitle>
//                     {/* {selectedMeal.steps.map(step => 
//                         <Text>{step}</Text>
//                     )} */}
//                     <List data={selectedMeal.steps} />
//                 </View>
//             </View>
            
//         </ScrollView>
//     )
// }

// export default MealDetailScreen;

// const styles = StyleSheet.create({
//     rootContainer: {
//         marginBottom: 32,
//     },
//     image: {
//         width: '100%',
//         height: 350,
//     },
//     title: {
//         fontWeight: 'bold',
//         fontSize: 24,
//         margin: 8,
//         textAlign: 'center',
//         color: 'white',
//     },
//     detailText: {
//         color: 'white',
//     },
//     subTitleContainer: {
//         marginHorizontal: 24,
//         marginVertical: 4,
//         padding: 6,
//         borderBottomColor: 'white',
//         borderBottomWidth: 2,
//     },
//     subTitle: {
//         fontWeight: 'bold',
//         fontSize: 18,
//         textAlign: 'center',
//         color: 'white',
//     },
//     listOuterContainer: {
//         alignItems: 'center',
//     },
//     listContainer: {
//         width: '80%',
//     }
// })


function MealDetailScreen({ route, navigation }) {
    const favoriteMralsCtx = useContext(FavoriteContext);

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const mealIsFavorite = favoriteMralsCtx.ids.includes(mealId);

    function changeFavoriteStatusHandler() {
        if(mealIsFavorite) {
            favoriteMralsCtx.removeFavorites(mealId)
        } else {
            favoriteMralsCtx.addFavorites(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton color="white" icon={mealIsFavorite ? 'star' : 'star-outline'} onPress={changeFavoriteStatusHandler} />
            }
        })
    }, [navigation, changeFavoriteStatusHandler])
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    {/* {selectedMeal.ingredients.map(ingredient => 
                        <Text>{ingredient}</Text>
                    )} */}
                    <List data={selectedMeal.ingredients} />

                    <SubTitle>Steps</SubTitle>
                    {/* {selectedMeal.steps.map(step => 
                        <Text>{step}</Text>
                    )} */}
                    <List data={selectedMeal.steps} />
                </View>
            </View>
            
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    subTitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    }
})