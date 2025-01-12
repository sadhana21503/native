import React,{FunctionComponent} from "react";
import styled from "styled-components/native";

const CardList=styled.FlatList`
width: 100%;
flex: 1;
padding-left:25px;
padding-bottom:15px;
`;

import { CardSectionProps } from "./types";
import CardItem from "./CardItem";


const CardSection: FunctionComponent<CardSectionProps> = (props) => {
  return (
    <CardList
    data={props.data}
    horizontal={true}
    showHorizontalScrollIndicator={false}
    contentContainerStyle={{
        Padding:25,
        aligneItems:"center",
    }}

    keyExtractor={({id}:any)=>id.toString()}
    renderItem={({item}:any)=><CardItem {...item}/>}
    />
  );
};

export default CardSection
