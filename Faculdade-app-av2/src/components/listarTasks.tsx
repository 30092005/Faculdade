import { Pressable } from "react-native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function teste(){
    return(
        <Pressable onPress={ () => console.log("Clicou!")}>
            <View style={style.botao_container}>
            <Text style={style.botao_text}>Botão</Text>
            </View>
        </Pressable>

    );
}

// const style = StyleSheet.create({

// botao_container:{
// borderRadius: 10,
// backgroundColor: 'tomato',
// padding: 10
// },

// botao_text:{
// color: 'white'
// },
// });


// ---------------------------------------------------------------------------------

export interface BotaoProps {
    texto: string;
    onPress(): void;
}

export function Botao(props: BotaoProps){
    return(
        <Pressable onPress={props.onPress}>

        <View style={style.botao_container}>
            <Text style={style.botao_text}>{props.texto}</Text>
        </View>

        </Pressable>
    );
}

const style = StyleSheet.create({

botao_container:{
borderRadius: 10,
backgroundColor: 'tomato',
padding: 10
},

botao_text:{
color: 'white'
},
});