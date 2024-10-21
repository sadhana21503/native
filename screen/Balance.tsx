import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar"
import BalanceCardSection from "../component/Balance/BalanceCardSection";
// components
import { colors } from "../component/colors";
import { Container } from "../component/shared";
import AmountSection from "../component/Balance/AmountSection";
import ButtonSection from "../component/Balance/ButtonSection";
const BalanceContainer = styled(Container)`
    background-color:${colors.graylight};
    width:100%;
    padding:25px;
    flex:1;
`;

import RootStack, { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList,"Balance">;

const Balance: FunctionComponent<Props> = ({route}) => {
    return (
        <BalanceContainer>
            <StatusBar style="dark" />
            <AmountSection balance={route?.params?.balance} />
            <BalanceCardSection  {...route?.params} />
            <ButtonSection/>
        </BalanceContainer>
    );
}
export default Balance;