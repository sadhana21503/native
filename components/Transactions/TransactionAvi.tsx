import React,{FunctionComponent} from 'react'
import styled from 'styled-components/native';
import { colors } from '../colors';
import { TransactionAviProps } from './types';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';


const StyledView=styled.View`
height:45px;
width:45px;
align-items:center;
border-radius:10px;
justify-content:center;
`;


const TransactionAvi:FunctionComponent<TransactionAviProps> = (props) => {
  return (
   <StyledView style={{backgroundColor: props.background}}>
    <Ionicons name={props.icon} size={25} color={colors.secondary}/>
   </StyledView>
  );
};

export default TransactionAvi
