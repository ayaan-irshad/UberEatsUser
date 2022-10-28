import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../../models";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [lat, setLat] = useState("0");
	const [lng, setLng] = useState("0");

	const { sub } = useAuthContext();

	const onSave = () => {
		DataStore.save(
			new User({
				name,
				address,
				lat: parseFloat(lat),
				lat: parseFloat(lat),
				sub,
			})
		);
	};
	return (
		<SafeAreaView>
			<Text style={styles.title}>Profile</Text>
			<TextInput value={"name"} placeholder="Name" style={styles.input} />
			<TextInput value={"adress"} placeholder="Address" style={styles.input} />
			<TextInput
				value={"lat"}
				placeholder="Latitude"
				style={styles.input}
				keyboardType="numeric"
			/>
			<TextInput value={"long"} placeholder="Longitude" style={styles.input} />
			<Button onPress={onSave} title="Save" />
			<Text
				onPress={() => Auth.signOut()}
				style={{ textAlign: "center", color: "red", margin: 10 }}
			>
				Sign out
			</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
		margin: 10,
	},
	input: {
		margin: 10,
		backgroundColor: "white",
		padding: 15,
		borderRadius: 5,
	},
});

export default Profile;
