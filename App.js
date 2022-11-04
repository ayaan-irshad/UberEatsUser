import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import RootNavigator from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";

import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";
import BasketContextProvider from "./src/contexts/BasketContext";

import AuthContextProvider from "./src/context/AuthContext";

Amplify.configure({
	...config,
	Analytics: {
		disabled: true,
	},
});

function App() {
	return (
		<NavigationContainer>
			<AuthContextProvider>
				<BasketContextProvider>
					<RootNavigator />
				</BasketContextProvider>
			</AuthContextProvider>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

export default withAuthenticator(App);
