import React, { FunctionComponent } from "react";
import Welcome from "./../screen/Welcome";
import Home from "./../screen/Home";
import Balance from "../screen/Balance";
import {Ionicons} from "@expo/vector-icons"
// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../component/colors";
import Greeting from "../component/Header/Greeting";
import Profile from "../component/Header/Profile";
import Avi from "../assets/avi/avatar.jpg"
import { CardProps } from "../component/Cards/types";
export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList> ();

const RootStack: FunctionComponent = () => {
    return (
			<>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: colors.graylight,
								borderBottomWidth: 0,
								shadowColor: "transparent",
								shadowOpacity: 0,
								elevation: 0,
								height: 120,
							},
							headerTintColor: colors.secondary,
							headerRightContainerStyle: {
								paddingRight: 25,
							},
							headerLeftContainerStyle: {
								paddingLeft: 10,
							},
							headerRight: () => (
								<Profile
									img={Avi}
									imgContainerStyle={{ backgroundColor: colors.tertiary }}
								/>
							),
						}}
						initialRouteName="Welcome"
					>
						<Stack.Screen
							name="Welcome"
							component={Welcome}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Home"
							component={Home}
							options={{
								headerTitle: (props) => (
									<Greeting
										mainText="Hey Coby!"
										subText="Welcome Back"
										{...props}
									/>
								),
								headerLeft: () => <></>,
							}}
						/>
                    <Stack.Screen
                        name="Balance"
                        component={Balance}
                        options={({ route }) => ({
                            headerTitle: route.params?.alias,
                            headerTitleAlign: "center",
                            headerBackImage: (props) => (
                                <Ionicons
                                    {...props}
                                    name="chevron-back"
                                    size={25}
                                    color={colors.secondary}
                                />  
                            ),
                            headerLeftContainerStyle: {
                                paddingLeft: 0,
                            }
                        })} />
					</Stack.Navigator>
				</NavigationContainer>
			</>
		);
}
export default RootStack;