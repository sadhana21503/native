import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import BalanceCard from "./BalanceCard";
//  components
const BalanceCardSectionBackground = styled.View`
    flex:2;
    width:100%;
    align-items:center;

`;

// types
import { BalanceCardProps } from "./types";

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
    return (
        <BalanceCardSectionBackground>
            <BalanceCard {...props} />
        </BalanceCardSectionBackground>
    )
}
export default BalanceCardSection;