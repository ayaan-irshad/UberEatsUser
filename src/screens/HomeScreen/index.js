import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";
export default function HomeScreen({ navigation }) {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		DataStore.query(Restaurant).then(setRestaurants);
	}, []);

	return (
		<FlatList
			data={restaurants}
			renderItem={({ item }) => (
				<RestaurantItem navigation={navigation} item={item} />
			)}
		/>
	);
}
