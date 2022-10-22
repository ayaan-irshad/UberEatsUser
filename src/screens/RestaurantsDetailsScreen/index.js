import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Restaurant, Dish } from "../../models";

import { View, FlatList } from "react-native";
import RestaurantDetailsItem from "../../components/RestaurantsDetailsItem";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import Header from "./Header";
import styles from "./styles";
const RestaurantDetailsScreen = () => {
	const route = useRoute();
	const navigation = useNavigation();
	const itemId = route.params?.itemId;

	const [restaurant, setRestaurant] = useState([]);
	const [dishes, setDishes] = useState([]);

	useEffect(() => {
		if (!itemId) {
			return;
		}
		DataStore.query(Restaurant, itemId).then(setRestaurant);
		DataStore.query(Dish, (dish) => dish.restaurantID("eq", itemId)).then(
			setDishes
		);
	}, [itemId]);

	return (
		<View style={styles.page}>
			<Ionicons
				onPress={() => navigation.goBack()}
				name="arrow-back-circle"
				size={45}
				color="white"
				style={styles.backIcon}
			/>
			<FlatList
				ListHeaderComponent={() => <Header restaurant={restaurant} />}
				data={dishes}
				renderItem={({ item }) => <RestaurantDetailsItem item={item} />}
			/>
		</View>
	);
};

export default RestaurantDetailsScreen;
