import { StyleSheet } from "react-native";

export default StyleSheet.create({
	page: {
		flex: 1,
	},
	backIcon: {
		zIndex: 999,
		position: "absolute",
		top: 40,
		left: 10,
	},
	image: {
		width: "100%",
		aspectRatio: 5 / 3,
		borderColor: "red",
	},
	title: {
		fontSize: 33,
	},

	row: {
		padding: 15,
	},
	menu: {
		color: "gray",
		fontSize: 18,
		paddingLeft: 15,
		letterSpacing: 0.7,
	},
});
