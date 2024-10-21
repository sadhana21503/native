import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ScreenWidth } from "../shared";
import RegularText from "../texts/RegularText";
import { colors } from "../colors";
import SmallText from "../texts/SmallText";
import { View } from "react-native";

const CardBackground = styled.ImageBackground`
	height: 75%;
	width: 100%;
	resize-mode: cover;
	background-color: ${colors.accent};
	border-radius: 25px;
	overflow: hidden;
	margin-top: 25px;
`;

const TouchableView = styled.View`
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	flex: 1;
`;

const CardRow = styled.View`
	justify-content: space-between;
	align-items: center;
	width: 100%;
	flex-direction: row;
`;
const Logo = styled.Image`
	width: 100%;
	height: 80%;
	resize-mode: contain;
	flex: 1;
`;
import card_bg from "../../assets/bgs/background_transparent.jpg";

import { BalanceCardProps } from "./types";

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
	return (
		<CardBackground source={card_bg}>
			<TouchableView>
				<CardRow>
					<RegularText textStyles={{ color: colors.white }}>
						******{props?.accountNo?.slice(6, 10)}
					</RegularText>
				</CardRow>
				<CardRow>
					<View style={{ flex: 3 }}>
						<SmallText textStyles={{ marginBottom: 5, color: colors.black }}>
							Total Balance
						</SmallText>
						<RegularText textStyles={{ fontSize: 19, color: colors.black }}>
							${props.balance}
						</RegularText>
					</View>
					<Logo source={props.logo} />
				</CardRow>
			</TouchableView>
		</CardBackground>
	);
};
export default BalanceCard;
