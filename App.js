import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantsDetailsScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import BasketScreen from "./src/screens/BasketScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
export default function App() {
	return (
		<View style={styles.container}>
			<OrdersScreen />
			{/* <BasketScreen /> */}
			{/* <DishDetailsScreen /> */}
			{/* <RestaurantDetailsScreen /> */}
			{/* <HomeScreen /> */}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
