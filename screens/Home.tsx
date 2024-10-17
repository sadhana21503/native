import React,{FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from 'styled-components/native';

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import CardSection from "../components/Cards/CardSection";

import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";

import TransactionSection from "../components/Transactions/TransactionSection";

const HomeContainer = styled(Container)`
background-color: ${colors.darkGray};
width:100%;
flex:1;

`;

const Home : FunctionComponent= () => {
 const cardsData=[{
  id:1,
  accountno:"3453453456",
  balance:20000.02,
  alias:"work debit",
  logo:bg1,
},
{
  id:2,
  accountno:"3453456756",
  balance:26700.02,
  alias:"personal debit",
  logo:bg2,
},
{
  id:3,
  accountno:"3453453456",
  balance:67000.02,
  alias:"school debit",
  logo:bg3,

},
];
 
const transactionData=[
  {
    id:1,
    amount:"-$100000",
    date:"10/10/2024",
    title:"Paying rent",
    subtitle:"Paying",
    art:{
      icon:"car",
      background:colors.black,
    },
  },
  {
    id:2,
    amount:"-$100670",
    date:"13/06/2024",
    title:"Travel",
    subtitle:"Los Angeles",
    art:{
      icon:"cart",
      background:colors.purple,
    },
  },
  {
    id:3,
    amount:"-$178000",
    date:"16/7/2024",
    title:"Paying rent",
    subtitle:"Paying",
    art:{
      icon:"airplane",
      background:colors.darkBlue,
    },
  },
]

 return(
<HomeContainer>
    <StatusBar style="dark"/>
    <CardSection data={cardsData}/>
    <TransactionSection data={transactionData}/>
</HomeContainer>
  );
}

export default Home

