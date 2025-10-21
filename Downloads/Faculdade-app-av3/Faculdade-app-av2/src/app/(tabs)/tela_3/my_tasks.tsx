import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Link } from 'expo-router';

export default function MyTasks(){
    return(
    <View style={style.pagina}>
        <View>

                <Text style={{position: "absolute", top: 0, left: 0, right: 0, textAlign: "center", fontSize: 20, fontWeight: "bold", color: "white", zIndex: 10,}}>
                       <Ionicons name="list" size={16} color="white" /> My Tasks
                </Text>
            <View style={style.corpo}>

          <View style={style.objetos}>
              <View style={style.objeto_1}>
                <View style={style.sub_object_1}>

                </View>

              </View>

              <View style={style.objeto_2}>
                <View style={style.sub_object_2}>

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
    backgroundColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white'
},

menu:{
    // flex: 1,
    height:"10%", width:"100%",
    backgroundColor: '#474545ff',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    gap: 30,
},
corpo:{
    // flex: 10,
    backgroundColor: 'black',
    height:"90%", width:"100%",
},

objetos:{
// flexDirection: 'row',
alignItems: 'center'

},

objeto_1:{
  backgroundColor: '#fefeffff',
  height: "35%", width: '80%',
  marginTop: 60,
  borderRadius: 10
},
objeto_2:{
  backgroundColor: '#fefeffff',
  height: "35%", width: '80%',
  marginTop: 40,
  borderRadius: 10

},
txt_menu:{
  marginTop: 15,
  color: 'white',

},
sub_object_1:{
    backgroundColor: '#fefeffff',
  height: "90%", width: '90%',
   marginTop: 10,
  borderRadius: 10,
  marginLeft: 15
},
sub_object_2:{
  backgroundColor: '#fefeffff',
  height: "90%", width: '90%',
   marginTop: 10,
  borderRadius: 10,
  marginLeft: 15
}
});