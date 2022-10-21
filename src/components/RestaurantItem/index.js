import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
function RestaurantItem({
	item: {
		id,
		name,
		image,
		rating,
		deliveryFee,
		minDeliveryTime,
		maxDeliveryTime,
	},
}) {
	const DEFAULT_IMG =
		"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg";
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("Restaurant", { itemId: id });
	};
	return (
		<Pressable style={styles.restaurantContainer} onPress={handlePress}>
			<Image
				style={styles.image}
				source={{
					uri: image.startsWith("http") ? image : DEFAULT_IMG,
				}}
			/>
			<View style={styles.row}>
				<View>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.subtitle}>
						$ {deliveryFee.toFixed(1)} &#8226; {minDeliveryTime} -{" "}
						{maxDeliveryTime} minutes
					</Text>
				</View>
				<View style={styles.rating}>
					<Text>{rating.toFixed(1)}</Text>
				</View>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	restaurantContainer: {
		width: "100%",
		marginVertical: 10,
		padding: 10,
	},

	image: {
		width: "100%",
		aspectRatio: 5 / 3,
		marginBottom: 5,
	},

	title: {
		fontSize: 16,
		fontWeight: "500",
		marginVertical: 5,
	},

	subtitle: {
		color: "gray",
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
	},

	rating: {
		marginLeft: "auto",
		backgroundColor: "lightgray",
		width: 30,
		height: 30,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
	},
});

export default RestaurantItem;
