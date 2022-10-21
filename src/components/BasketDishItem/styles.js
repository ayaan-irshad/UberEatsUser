import { StyleSheet } from "react-native";

export default StyleSheet.create({
	page: { flex: 1, width: "100%", paddingVertical: 30, padding: 10 },

	name: {
		fontSize: 30,
		fontWeight: "600",
		marginVertical: 10,
	},
	description: {
		color: "gray",
		fontWeight: "bold",
		fontSize: 19,
	},
	separator: {
		height: 1,
		backgroundColor: "lightgrey",
		marginVertical: 10,
	},

	row: {
		marginHorizontal: 20,
		alignItems: "center",
		flexDirection: "row",
		marginVertical: 15,
	},

	quantityContainer: {
		backgroundColor: "lightgray",
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 3,
		marginRight: 10,
	},

	button: {
		backgroundColor: "black",
		marginTop: "auto",
		padding: 20,
		alignItems: "center",
	},

	buttonText: {
		color: "white",
		fontWeight: 600,
		fontSize: 20,
	},
});
