// import { View, Text, StyleSheet, FlatList } from "react-native";
// import restaurants from "../../../assets/data/restaurants.json";
// import BasketDishItem from "../../components/BasketDishItem";
// import { useBasketContext } from "../../contexts/BasketContext";
// import { useOrderContext } from "../../contexts/OrderContext";

// const dishes = restaurants[0].dishes;

// const BasketScreen = () => {
// 	const { restaurant, basketDishes, totalPrice } = useBasketContext();
// 	const { createOrder } = useOrderContext();

// 	const onCreateOrder = async () => {
// 		const newOrder = await createOrder();
// 		navigation.navigate("OrdersTab", {
// 			screen: "Order",
// 			params: { id: newOrder.id },
// 		});
// 	};

// 	return (
// 		<View style={styles.page}>
// 			<Text style={styles.name}>{restaurant?.name}</Text>

// 			<Text style={{ fontWeight: "600", marginTop: 20, fontSize: 19 }}>
// 				Your items
// 			</Text>

// 			<FlatList
// 				data={basketDishes}
// 				renderItem={({ item }) => <BasketDishItem basketDish={item} />}
// 			/>

// 			<View style={styles.separator} />

// 			<Pressable onPress={onCreateOrder} style={styles.button}>
// 				<Text style={styles.buttonText}>
// 					Create order &#8226; ${totalPrice.toFixed(2)}
// 				</Text>
// 			</Pressable>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	page: { flex: 1, width: "100%", paddingVertical: 30, padding: 10 },
// 	name: {
// 		fontSize: 30,
// 		fontWeight: "600",
// 		marginVertical: 10,
// 	},
// 	description: {
// 		color: "gray",
// 		fontWeight: "bold",
// 		fontSize: 19,
// 	},
// 	separator: {
// 		height: 1,
// 		backgroundColor: "lightgrey",
// 		marginVertical: 10,
// 	},
// 	row: {
// 		alignItems: "center",
// 		flexDirection: "row",
// 		marginVertical: 15,
// 	},
// 	quantityContainer: {
// 		backgroundColor: "lightgray",
// 		paddingHorizontal: 5,
// 		paddingVertical: 2,
// 		borderRadius: 3,
// 		marginRight: 10,
// 	},
// 	button: {
// 		backgroundColor: "black",
// 		marginTop: "auto",
// 		padding: 20,
// 		alignItems: "center",
// 	},
// 	buttonText: {
// 		color: "white",
// 		fontWeight: "600",
// 		fontSize: 20,
// 	},
// });

// export default BasketScreen;
