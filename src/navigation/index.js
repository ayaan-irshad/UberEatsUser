import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantsDetailsScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import BasketScreen from "../screens/BasketScreen";
import OrdersScreen from "../screens/OrdersScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import Profile from "../screens/ProfileScreen";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="HomeTabs" component={HomeTabs} />
		</Stack.Navigator>
	);
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
	return (
		<Tab.Navigator barStyle={{ backgroundColor: "white" }}>
			<Tab.Screen
				name="Home"
				component={HomeStackNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="home" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Orders Screen"
				component={OrdersStackNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="list" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="account" size={24} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
	return (
		<HomeStack.Navigator screenOptions={{ headerShown: false }}>
			<HomeStack.Screen name="Restaurants" component={HomeScreen} />
			<HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
			<HomeStack.Screen name="Dish" component={DishDetailsScreen} />
			<HomeStack.Screen name="Basket" component={BasketScreen} />
		</HomeStack.Navigator>
	);
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
	return (
		<OrdersStack.Navigator screenOptions={{ headerShown: false }}>
			<OrdersStack.Screen name="Orders" component={OrdersScreen} />
			<OrdersStack.Screen name="Order" component={OrderDetailsScreen} />
		</OrdersStack.Navigator>
	);
};

export default RootNavigator;
