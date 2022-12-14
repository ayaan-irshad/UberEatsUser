import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Dish } from "../../models";
import { ActivityIndicator } from "react-native-paper";

const DishDetailsScreen = () => {
	const [quantity, setQuantity] = useState(1);
	const [dish, setDish] = useState(null);
	const route = useRoute();
	const navigation = useNavigation();
	const itemId = route.params?.itemId;

	useEffect(() => {
		if (itemId) {
			DataStore.query(Dish, itemId).then(setDish);
		}
	}, [itemId]);

	const onMinus = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const onPlus = () => {
		setQuantity(quantity + 1);
	};

	const getTotal = () => {
		return (dish.price * quantity).toFixed(2);
	};

	if (!dish) {
		return <ActivityIndicator size="large" color="gray" />;
	}
	return (
		<View style={styles.page}>
			<Text style={styles.name}>{dish.name}</Text>
			<Text style={styles.description}>{dish.description}</Text>
			<View style={styles.separator} />

			<View style={styles.row}>
				<AntDesign
					name="minuscircleo"
					size={60}
					color={"black"}
					onPress={onMinus}
				/>
				<Text style={styles.quantity}>{quantity}</Text>
				<AntDesign
					name="pluscircleo"
					size={60}
					color={"black"}
					onPress={onPlus}
				/>
			</View>

			<Pressable
				onPress={() => navigation.navigate("Basket")}
				style={styles.button}
			>
				<Text style={styles.buttonText}>
					Add {quantity} to basket &#8226; ${getTotal()}
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	page: { flex: 1, width: "100%", paddingVertical: 30, padding: 10 },

	name: {
		fontSize: 30,
		fontWeight: "600",
		marginVertical: 10,
	},
	description: {
		color: "gray",
	},
	separator: {
		height: 1,
		backgroundColor: "lightgrey",
		marginVertical: 10,
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 50,
	},

	quantity: {
		fontSize: 25,
		fontWeight: "bold",
		marginHorizontal: 20,
	},

	button: {
		backgroundColor: "black",
		marginTop: "auto",
		padding: 20,
		alignItems: "center",
	},

	buttonText: {
		color: "white",
		fontWeight: "600",
		fontSize: 20,
	},
});

export default DishDetailsScreen;
