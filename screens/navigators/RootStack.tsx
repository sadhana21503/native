import React, { FunctionComponent } from "react";
import Welcome from "./../Welcome";
import Home from "../Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../../components/colors";
import Greating from "../../components/Header/Greating";
import Profile from "../../components/Header/Profile";
import avi from "../../assets/avi.png"
export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList> ();

const RootStack: FunctionComponent = () => {
    return (
			<>
				<NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: colors.darkGray,
                            borderBottomWidth: 0,
                            shadowColor: "transparent",
                            shadowOpacity: 0,
                            elevation: 0,
                            height:120,
                        },
                        headerTintColor: colors.secondary,
                        headerRightContainerStyle: {
                            paddingRight:25,
                        },
                        headerLeftContainerStyle: {
                            paddingLeft:10,
                        },
                        headerRight: () => (
                            <Profile
                                img={avi}
                                imgContainerStyle={{backgroundColor:colors.lightGray}}
                            />
                        )
                    }}
                initialRouteName="Home">
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
                                <Greating
                                    mainText="Hey Coby!"
                                    subText="Welcome Back"
                                    {...props}
                                />
                            ),
                            headerLeft:()=><></>,
                        }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</>
		);
}
export default RootStack;