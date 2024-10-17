import React,{FunctionComponent} from "react";
import styled from "styled-components/native";

import { colors } from "../colors";


const StyledText = styled.Text`
     font-size : 16px;
    color: ${colors.lightGray};
    text-align :left;
    font-family: Lato-Regular;
`;
 
import { TextProps } from "react-native"; 

const SmallText : FunctionComponent<TextProps>= (props) => {
  return <>
  <StyledText style={props.textStyles}>{props.children}  </StyledText>
  </>
}

export default SmallText
