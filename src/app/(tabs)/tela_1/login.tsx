import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Link, router } from 'expo-router';

export default function Login(){
      const [email, setEmail] = useState("");
      const [senha, setSenha] = useState("");

      const logarLog = () => {
        if(email == 'teste@gmail.com' && senha == "1234" ){
          console.log("------ E-mail e Senha validados com Sucesso! ---------");
          router.replace('/home')
        }else{
          console.log("----- O E-mail ou a Senha estão errados. -------");
          console.error("E-mail ou Senha estão errados.");
        }
        console.log("Email: ", email);
        console.log("Senha: ", senha);
      };



    return(
    <View style={style.pagina}>     
            <Text style={style.topo}>
              <Ionicons name="person-circle" size={70} color="black" />Login
            </Text>
        <View style={style.meio}>
                    <Text style={style.texto}>Email: </Text>
                    <TextInput style={style.barra} placeholder="Digite o seu Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
                     <Text style={style.texto}>Senha: </Text>
                    <TextInput style={style.barra} placeholder="Digite a sua Senha" value={senha} onChangeText={setSenha} secureTextEntry/>
        </View>
        <View style={style.botao}>
          <Button title="Entrar"  onPress={logarLog}/>                      
        </View>
    </View>
    );
}

const style = StyleSheet.create({
pagina:{
    backgroundColor: 'white',
  
},

meio:{
    justifyContent:'center',
    alignItems: 'center',
    marginTop: '15%'
},

topo:{
 fontSize: 80,
 margin: 'auto',
 marginTop: '25%'

},

barra:{
height: 50,
borderColor: "#ccc",
borderWidth: 1,
borderRadius: 8,
paddingHorizontal: 100,
fontSize: 16,
marginTop: '2%'
// textAlign: 'left'
},
  texto:{
    marginRight: '70%',
    marginTop: '10%',
    fontSize: 20
  },
  botao:{
    marginTop: '10%',
    borderRadius: 80,
    padding: 70,
    
  }
});