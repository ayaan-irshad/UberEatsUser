import { View, Text, Image } from "react-native";
import styles from "./styles";

const Header = ({ restaurant: { name, image, rating } }) => {
	return (
		<View style={styles.page}>
			<Image style={styles.image} source={{ uri: image }} />
			<View style={styles.row}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>$ &#8226; {rating}</Text>
			</View>
			<Text style={styles.menu}>Menu</Text>
		</View>
	);
};

export default Header;
