import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import BigText from "../components/Texts/BigText";
import SmallTest from "../components/Texts/SmallText";
import { Container, ScreenHeight, ScreenWidth } from "../components/shared";
import { colors } from "../components/colors";
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
//import image
import Bg from "../assets/Bg.jpg";
import RegulerButton from "../components/Buttons/RegulerButton";
const Welcome: FunctionComponent = () => {
	return (
		<>
			<StatusBar style="light" />
			<WelcomeContainer>
				<TopSection>
					<TopImage source={Bg} />
				</TopSection>
				<BottomSection>
					<BigText textStyles={{ width: "70%", marginBottom: 25 }}>
						Best way to track your money
					</BigText>
					<SmallTest textStyles={{ width: "70%", marginBottom: 25 }}>
						Best payment method, connects your money to your friends,
					</SmallTest>
					<RegulerButton onPress={()=>{}}>
						Get Started
					</RegulerButton>
				</BottomSection>
			</WelcomeContainer>
		</>
	);
};
export default Welcome;