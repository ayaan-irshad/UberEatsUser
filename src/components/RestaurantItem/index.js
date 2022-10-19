import { StyleSheet, Text, View, Image, Pressable } from "react-native";

function RestaurantItem({
	item: { name, image, rating, deliveryFee, minDeliveryTime, maxDeliveryTime },
}) {
	return (
		<View style={styles.restaurantContainer}>
			<Image
				style={styles.image}
				source={{
					uri: image,
				}}
			/>
			<View style={styles.row}>
				<View>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.subtitle}>
						$ {deliveryFee} &#8226; {minDeliveryTime} - {maxDeliveryTime}
						minutes
					</Text>
				</View>
				<View style={styles.rating}>
					<Text>{rating}</Text>
				</View>
			</View>
		</View>
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
