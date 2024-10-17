import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import {StyleProp,TextStyle} from "react-native"
import SmallTest from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";
const StyledView = styled.View`
    flex-direction:column;
    flex:1;
    justify-content:center;

`;

interface GreetingProps{
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}


const Greating: FunctionComponent<GreetingProps> = (props) => {
    return (
        <>
            <StyledView>
                <RegularText textStyles={[{
                    color: colors.secondary,
                    fontSize:22,
                },
                    props.mainTextStyles,
                ]}>
                    {props.mainText}
                </RegularText>
                <SmallTest
                    textStyles={[{
                        color:colors.secondary,
                    },
                        props.mainTextStyles,
            ]}
                >
                    {props.subText}
                </SmallTest>
            </StyledView> 
        </>
    )
}
export default Greating;