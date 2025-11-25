import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Home(){

    const [totalTarefas, setTotalTarefas] = useState(0);

    useEffect(() => {
        carregarQuantidade();
    }, []);

    const carregarQuantidade = async () => {
        try {
            const data = await AsyncStorage.getItem("tarefas");
            const tarefas = data ? JSON.parse(data) : [];
            setTotalTarefas(tarefas.length);
        } catch (error) {
            console.log("Erro ao carregar quantidade:", error);
        }
    };

    return(
    <View style={style.pagina}>
        <View style={style.corpo}>

            <Text style={style.titulo}>
                <Ionicons name="home" size={20} /> Home
            </Text>

            {/* CARD 1 — IR PARA LISTA DE TAREFAS */}
            <TouchableOpacity style={style.card} onPress={() => router.push('/tela_3/my_tasks')}>
                <Text style={style.cardTitulo}>Minhas Tarefas</Text>
                <Text style={style.cardNumero}>{totalTarefas}</Text>
                <Text style={style.cardLink}>Clique para ver</Text>
            </TouchableOpacity>

            {/* CARD 2 — IR PARA CRIAR TAREFA */}
            <TouchableOpacity style={style.card} onPress={() => router.push('/tela_4/create_tasks')}>
                <Text style={style.cardTitulo}>Criar Nova Tarefa</Text>
                <Ionicons name="add-circle" size={40} color="black" />
                <Text style={style.cardLink}>Clique para criar</Text>
            </TouchableOpacity>

        </View>
    </View>
    );
}

const style = StyleSheet.create({
pagina:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
},

corpo:{
    width: "100%",
    alignItems: "center",
},

titulo:{
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40
},

card:{
    backgroundColor: "#ddd4d4ff",
    width: "80%",
    height: 160,
    borderRadius: 10,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3
},

cardTitulo:{
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
},

cardNumero:{
    fontSize: 45,
    fontWeight: "bold",
    color: "black",
},

cardLink:{
    marginTop: 5,
    fontSize: 14,
    color: "gray"
}
});
