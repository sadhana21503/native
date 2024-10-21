import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

// custom component
import { colors } from "../component/colors";
import { Container } from "../component/shared";
import CardSection from "../component/Cards/CardSection";
import logo1 from "../assets/card/card1.jpg";
import logo2 from "../assets/card/card2.jpg";
import portait from "./../assets/portraits/profile.jpg";
import TransactionSection from "../component/Transactions/TransactionSection";
import SendMoneySection from "../component/SendMoney/SendMoneySection";
const HomeContainer = styled(Container)`
    background-color:${colors.graylight};
    width:100%;
    flex:1;
`;
	import { RootStackParamList } from "../navigators/RootStack";
	import { StackScreenProps } from "@react-navigation/stack";
	export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
    const cardData = [
			{
				id: 1,
				accountNo: "293845230587",
				balance: 49857.934,
                alias: "Work Debit",
                logo:logo1,
			},
			{
				id: 2,
				accountNo: "2345343430587",
				balance: 497.934,
                alias: "Personal Prepaid",
                logo:logo1,
			},
			{
				id: 3,
				accountNo: "2937632323287",
				balance: 4434457.934,
                alias: "School Prepaid",
                logo:logo2,
			},
    ];
    
    const transactionData = [
			{
				id: 1,
				amount: "-$86.60",
				date: "14 sep 2021",
				title: "Taxi",
				subtitle: "Uber car",
				art: {
					background: colors.primary,
					icon: "car",
				},
			},
			{
				id: 2,
				amount: "-$86.60",
				date: "14 sep 2021",
				title: "Taxi",
				subtitle: "Uber car",
				art: {
					background: colors.primary,
					icon: "car",
				},
			},
			{
				id: 3,
				amount: "-$86.60",
				date: "14 sep 2021",
				title: "Taxi",
				subtitle: "Uber car",
				art: {
					background: colors.primary,
					icon: "car",
				},
			},
	];
	
	const SendMoneyData = [
		{
			id: 1,
			amount: "2332.45",
			name: "Coby Andy",
			background: colors.tertiary,
			img:portait,
		},
		{
			id: 2,
			amount: "2332.45",
			name: "Coby Andy",
			background: colors.tertiary,
			img:portait,
		},
		{
			id: 3,
			amount: "2332.45",
			name: "Coby Andy",
			background: colors.tertiary,
			img:portait,
		},
	];

    return (
        <>
            <HomeContainer>
                <StatusBar style="dark" />
                <CardSection data={cardData} />
				<TransactionSection data={transactionData} />
				<SendMoneySection data={SendMoneyData} />
            </HomeContainer>
        </>
    );
};
export default Home;