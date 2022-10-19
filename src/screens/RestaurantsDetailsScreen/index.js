import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import RestaurantDetailsItem from "../../components/RestaurantsDetailsItem";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";
import styles from "./styles";
const RestaurantDetailsScreen = () => {
	const restaurant = restaurants[1];
	const { name, image, deliveryFee, rating, minDeliveryTime, maxDeliveryTime } =
		restaurant;
	return (
		<View style={styles.page}>
			<Ionicons
				name="arrow-back-circle"
				size={45}
				color="white"
				style={styles.backIcon}
			/>
			<FlatList
				ListHeaderComponent={() => <Header restaurant={restaurant} />}
				data={restaurants[0].dishes}
				renderItem={({ item }) => <RestaurantDetailsItem item={item} />}
			/>
		</View>
	);
};

export default RestaurantDetailsScreen;
