import { StyleSheet, Text, View, Image, Pressable } from "react-native";

function RestaurantDetailsItem({ item: { name, description, price, image } }) {
	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.description} numberOfLines={2}>
					{description}
				</Text>
				<Text style={styles.price}>${price}</Text>
			</View>
			{image && <Image style={styles.image} source={{ uri: image }} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderBottomColor: "lightgrey",
		borderBottomWidth: 1,
		paddingVertical: 10,
		flexDirection: "row",
		paddingLeft: 15,
	},
	name: {
		fontSize: 16,
		fontWeight: "600",
		letterSpacing: 0.5,
		marginVertical: 5,
	},

	description: {
		color: "gray",
	},

	price: {
		fontSize: 16,
		fontWeight: "500",
		marginVertical: 5,
	},
	image: { height: 90, aspectRatio: 1, marginRight: 10, borderRadius: 10 },
});

export default RestaurantDetailsItem;
