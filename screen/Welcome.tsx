import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import BigText from "../component/texts/BigText";
import SmallText from "../component/texts/SmallText";
//custom component
import { Container, ScreenHeight, ScreenWidth } from "../component/shared";
import { colors } from "../component/colors";
const WelcomeContainer = styled(Container)`
	background-color: ${colors.secondary};
	justify-content: space-between;
	height: 100%;
	width: 100%;
`;
const TopSection = styled.View`
	width: 100%;
	flex: 1;
	max-height: 55%;
`;

const TopImage = styled.Image`
	width: 100%;
	height: 100%;
	resize-mode: stretch;
`;

const BottomSection = styled.View`
	width: 100%;
	flex: 1;
	padding: 25px;
	justify-content:flex-end;
`;
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList,"Welcome">;

//import image
import background_v1 from "../assets/bgs/background_v1.jpg";
import RegularButton from "../component/Buttons/RegularButton";

const Welcome: FunctionComponent<Props> = ({navigation}) => {
	return (
		<>
			<StatusBar style="light" />
			<WelcomeContainer>
				<TopSection>
					<TopImage source={background_v1} />
				</TopSection>
				<BottomSection>
					<BigText textStyles={{ width: "70%", marginBottom: 25 }}>
						Best way to track your money
					</BigText>
					<SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
						Best payment method, connects your money to your friends,
					</SmallText>
					<RegularButton onPress={()=>{navigation.navigate("Home")}}>
						Get Started
					</RegularButton>
				</BottomSection>
			</WelcomeContainer>
		</>
	);
};
export default Welcome;
