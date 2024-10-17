import React,{FunctionComponent} from "react";
import styled from "styled-components/native";

import { colors } from "../colors";


const StyledText = styled.Text`
     font-size : 20px;
    color: ${colors.white};
    text-align :left;
    font-family: Lato-Bold;
`;
 
import { TextProps } from "react-native"; 

const RegularText: FunctionComponent<TextProps>= (props) => {
  return <>
  <StyledText style={props.textStyles}>{props.children}  </StyledText>
  </>
}

export default RegularText