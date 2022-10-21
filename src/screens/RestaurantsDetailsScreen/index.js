import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import RestaurantDetailsItem from "../../components/RestaurantsDetailsItem";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import Header from "./Header";
import styles from "./styles";
const RestaurantDetailsScreen = () => {
	const route = useRoute();
	const navigation = useNavigation();
	const { itemId } = route.params;
	const restaurant = restaurants[itemId - 1];
	const { name, image, deliveryFee, rating, minDeliveryTime, maxDeliveryTime } =
		restaurant;

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
				data={restaurants[itemId - 1].dishes}
				renderItem={({ item }) => (
					<RestaurantDetailsItem navigation={navigation} item={item} />
				)}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
};

export default RestaurantDetailsScreen;
