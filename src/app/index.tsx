import { View, Text, StyleSheet } from "react-native";

const Index = () => {
	return (
		<View style={styles.container}>
			<View>
				<View>
					<Text>Memory</Text>
					<Text>ログアウト</Text>
				</View>
			</View>
			<View>
				<View>
					<Text></Text>
					<Text></Text>
				</View>
				<View>×</View>
			</View>

			<View>
				<Text>+</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		backgroundColor: "#7dcddf",
		height: 100,
		justifyContent: "flex-end",
	},
	headerInner: {
		alignItems: "center",
	},
	headerRight: {
		position: "absolute",
		right: 16,
		bottom: 16,
		color: "rgba(255, 255, 255, 0.8)",
	},
	headerTitle: {
		marginBottom: 8,
		fontSize: 24,
		lineHeight: 32,
		fontWeight: "bold",
		color: "#fff",
	},
});

export default Index;
