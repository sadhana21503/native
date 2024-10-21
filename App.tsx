import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
// RootStack navigator
import RootStack from "./navigators/RootStack";
import Welcome from "./screen/Welcome";

export default function App() {
	let [fontsLoaded] = useFonts({
		"Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
		"Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
	});
	if (!fontsLoaded) {
		return <AppLoading />
	}
	return (
	<RootStack/>
	);
	
};

