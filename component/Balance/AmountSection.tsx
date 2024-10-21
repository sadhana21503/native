import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";

const AmountSectionBackground = styled.View`
    flex:1;
    padding-top:5px;
    width:100%;
    align-items:center;
`;


// types
import { AmountProps } from "./types";

const AmountSection: FunctionComponent<AmountProps> = (props) => {
    return (
        <AmountSectionBackground>
            <SmallText
            textStyles={{color:colors.secondary, marginBottom:15}}
            >
                Total Balance
            </SmallText>
            <RegularText textStyles={{color:colors.secondary,fontSize:28}}>
                ${props.balance}
            </RegularText>
        </AmountSectionBackground>
    )
}

export default AmountSection;