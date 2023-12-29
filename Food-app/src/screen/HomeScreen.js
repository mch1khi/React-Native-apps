import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from '../components/Header';
import Card from '../components/RestaurantCard';

const restaurants = [
    {
        id: 1,
        name: "The Green Garden",
        categories: ["Vegan", "Organic"],
        deliveryTime: "30 mins",
        distance: "2 km",
        image: require("../../assets/vegan.jpeg")
    },
    {
        id: 2,
        name: "Ocean's Catch",
        categories: ["Seafood", "Grill"],
        deliveryTime: "45 mins",
        distance: "5 km",
        image: require("../../assets/fish.jpeg")
    },
    {
        id: 3,
        name: "Spicy Fusion",
        categories: ["Indian", "Thai"],
        deliveryTime: "35 mins",
        distance: "3 km",
        image: require("../../assets/spicy.jpeg")
    },
    {
        id: 4,
        name: "Italian Bistro",
        categories: ["Italian", "Pasta"],
        deliveryTime: "40 mins",
        distance: "4 km",
        image: require("../../assets/italian.webp")
    },
    {
        id: 5,
        name: "Resale Burgers",
        categories: ["Kitty's best food"],
        deliveryTime: "5 mins",
        distance: "0.1 km",
        image: require("../../assets/dummy-1.jpeg")
    },
    {
        id: 6,
        name: "Sushi World",
        categories: ["Japanese", "Sushi"],
        deliveryTime: "50 mins",
        distance: "6 km",
        image: require("../../assets/sushi.jpeg")
    },
    {
        id: 7,
        name: "Sweet Tooth",
        categories: ["Desserts", "Bakery"],
        deliveryTime: "20 mins",
        distance: "2.5 km",
        image: require("../../assets/download.jpeg")
    }
];


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header label="Food Center" />
            {/* <Card /> */}
            <StatusBar barStyle="dark-content" />

            <FlatList
                data={restaurants}
                renderItem={({ item }) => {
                    return <Card info={item} />
                }}
                keyExtractor={(restaurants) => restaurants.id.toString()}
                showsVerticalScrollIndicator={false} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default HomeScreen;