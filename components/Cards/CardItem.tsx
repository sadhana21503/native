import React,{FunctionComponent} from "react";
import styled from "styled-components/native";
import { ScreenWidth } from "../shared";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";
import { View } from "react-native";
 const CardBackground=styled.ImageBackground`
 height:75%;
 width: ${ScreenWidth*0.67}px;
 resize-mode: cover;
 background-color:${colors.coral};
 border-radius:25px;
 margin-right: 25px;
 overflow: hidden;
 margin-top:25px;
 `;

const CardTouchable=styled.TouchableHighlight`
 height:100%;
 border-radius:25px;
`;

const TouchableView=styled.View`
justify-content: space-between;
align-items: center;
padding:30px;
flex:1;
`;

const CardRow=styled.View`
justify-content: space-between;
align-items: center;
width:100%;
flex-direction: row;
`;
const Logo=styled.Image`
width:100%;
height:80%;
resize-mode:contain;
flex:1;
`;
import card from '../../assets/card.png';

 import { CardProps } from "./types";
  
 const CardItem : FunctionComponent<CardProps> = (props) => {
    const handlePress = () => {}

return(
   <CardBackground source={card}>
     <CardTouchable underlayColor={colors.blue} onPress={handlePress} >
         <TouchableView>
             <CardRow>
                <RegularText textStyles={{color: colors.secondary}}>
                    ******{props.accountno.slice(6,10)}
                </RegularText>
             </CardRow>
              <CardRow>
                <View style={{flex:3}}>
                    <SmallText textStyles={{marginBottom:5,color: colors.black}}>
                        Total Balance
                    </SmallText>
                    <RegularText textStyles={{fontSize:19,}}>
                        ${props.balance}
                    </RegularText>
                </View>
                <Logo source={props.logo}/>
              </CardRow>
          </TouchableView>
     </CardTouchable>
    </CardBackground>
   );
 };
 export default CardItem;