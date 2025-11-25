import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Link } from 'expo-router';
export default function Home(){
    return(
    <View style={style.pagina}>
        <View>
          
            <View style={style.corpo}>

          <View style={style.objetos}>
              <View style={style.objeto_1}>

              </View>

              <View style={style.objeto_2}>

              </View>
          </View>
                <Text style={{position: "absolute", top: 15, left: 0, right: 0, textAlign: "center", fontSize: 20, fontWeight: "bold", color: "black", zIndex: 10,}}>
                      <Ionicons name="home" size={16} color="black" /> Home
                </Text>
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
  backgroundColor: '#ddd4d4ff',
  height: "35%", width: '80%',
  marginTop: 60,
  borderRadius: 10
},
objeto_2:{
  backgroundColor: '#ddd4d4ff',
  height: "35%", width: '80%',
  marginTop: 40,
  borderRadius: 10

},
txt_menu:{
  marginTop: 15,
  color: 'white',

}
});