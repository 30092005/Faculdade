import { StatusBar } from "expo-status-bar";
import  { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Link } from 'expo-router';

export default function CreateTasks(){

const [assunto, setAssunto] = useState("");
const [texto, setTexto] = useState("");
const enviar_dados = () => {
  console.log(assunto);
  console.log(texto);
};

    return(
    <View style={style.pagina}>
      <View>

            <View style={style.corpo}>

                <Text style={{position: "absolute", top: 15, left: 0, right: 0, textAlign: "center", fontSize: 20, fontWeight: "bold", color: "black", zIndex: 10,}}>
                        <Ionicons name="checkmark-done" size={16} color="black" />Create Tasks
                </Text>


          <View style={style.objetos}>
              <View style={style.objeto_1}>
                <Text style={{fontSize:16, marginBottom: 5, fontWeight: "bold"}}>Assunto:</Text>
                  <TextInput style={style.dados} placeholder="Digite o seu Assunto do Dia..." value={assunto} onChangeText={setAssunto} multiline={false} numberOfLines={1} />
                <Text style={{fontSize:16, marginBottom: -12, marginTop:15, fontWeight: "bold"}}>Detalhes:</Text>
                  <TextInput style={style.texto} placeholder="Digite aqui com detalhes..." value={texto} onChangeText={setTexto} multiline textAlignVertical="top"/>
              </View>
              <View style={style.botao_feito}>
              <Button title="Feito" onPress={enviar_dados} />
              </View>

              <View style={style.objeto_2}>
              <View style={style.subobjeto_2}>
                {/* <Text style={{fontSize:20, marginBottom: 5}}>Assunto:</Text> */}
                <Text style={{fontSize: 20}}>{assunto}</Text>
                {/* <Text style={{fontSize:20, marginTop:15}}>Detalhes:</Text> */}
                <Text>{texto}</Text>
              </View>

              </View>
          </View>

            </View>
        </View>
    </View>
    );
}

const style = StyleSheet.create({
pagina:{
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white'
},

menu:{
    // flex: 1,
    height:"10%", width:"100%",
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    gap: 30,
},
corpo:{
    // flex: 10,
    backgroundColor: 'white',
    height:"90%", width:"100%",
},

objetos:{
// flexDirection: 'row',
alignItems: 'center'

},

objeto_1:{
  height: "20%", width: '80%',
  marginTop: 60,
  borderRadius: 10
},
objeto_2:{
  backgroundColor: 'black',
  height: "40%", width: '80%',
  marginTop: 40,
  borderRadius: 10
},
subobjeto_2:{
  backgroundColor: '#ffffffff',
  height: "95%", width: '95%',
  marginTop: 7,
  marginLeft: 8,
  borderRadius: 10

},
txt_menu:{
  marginTop: 15,
  color: 'white',

},

dados:{
  borderColor: 'black',
  // height: 38,
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 3,
  padding: 8
},

texto:{
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 3,
  padding: 20,
  marginTop: 20
},

botao_feito:{
  marginTop: 90,
  
}
});