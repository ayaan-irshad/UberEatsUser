import { View, Text, Image, FlatList } from "react-native";
import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";
import styles from "./styles";
import { useOrderContext } from "../../contexts/OrderContext";
import { useEffect, useState } from "react";

const OrderDetailsHeader = () => {
	const [order] = orders;
	const {
		Restaurant: { name, image },
	} = order;

	return (
		<View>
			<View style={styles.page}>
				<Image style={styles.image} source={{ uri: image }} />
				<View style={styles.row}>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
				</View>
				<Text style={styles.menu}>Your Order</Text>
			</View>
		</View>
	);
};

const OrderDetailsScreen = () => {
	return (
		<FlatList
			data={restaurants[0].dishes}
			renderItem={({ item }) => <BasketDishItem basketDish={item} />}
			ListHeaderComponent={OrderDetailsHeader}
		/>
	);
};

// const OrderDetails = ({ id }) => {
// 	const [order, setOrder] = useState();
// 	const { getOrder } = useOrderContext();

// 	useEffect(() => {
// 	  getOrder(id).then(setOrder);
// 	}, []);

// 	if (!order) {
// 	  return <ActivityIndicator size={"large"} color="gray" />;
// 	}

// 	return (
// 	  <FlatList
// 		ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
// 		data={order.dishes}
// 		renderItem={({ item }) => <BasketDishItem basketDish={item} />}
// 	  />
// 	);

export default OrderDetailsScreen;
