import { useEffect, useState } from "react";
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity,Alert} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Tarefa {
  id: number;
  assunto: string;
  texto: string;
  imagem?: string | null;
}

export default function MyTasks() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    try {
      const data = await AsyncStorage.getItem("tarefas");
      setTarefas(data ? JSON.parse(data) : []);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    }
  };

  const deletarTarefa = async (id: number) => {
    try {
      const novas = tarefas.filter((t) => t.id !== id);
      await AsyncStorage.setItem("tarefas", JSON.stringify(novas));
      setTarefas(novas);
      Alert.alert("Tarefa removida com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível remover a tarefa.");
    }
  };

  const renderItem = ({ item }: { item: Tarefa }) => (
    <View style={style.card}>
      <View style={style.textos}>
        <Text style={style.titulo}>{item.assunto}</Text>
        <Text style={{ color: "white" }}>{item.texto}</Text>
      </View>

      {item.imagem && <Image source={{ uri: item.imagem }} style={style.imagem} />}

      <TouchableOpacity style={style.botaoExcluir} onPress={() => deletarTarefa(item.id)}>
        <Ionicons name="trash" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={style.pagina}>
      <Text style={style.tituloPagina}>
        <Ionicons name="list" size={18} color="white" /> My Tasks
      </Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  pagina: { flex: 1, backgroundColor: "black" },
  tituloPagina: { textAlign: "center", fontSize: 20, fontWeight: "bold", color: "white", marginVertical: 15 },
  card: { backgroundColor: "#2f2f2f", borderRadius: 12, padding: 15, marginBottom: 15, alignItems: "center" },
  textos: { alignSelf: "flex-start" },
  titulo: { color: "white", fontWeight: "bold", fontSize: 18, marginBottom: 5 },
  imagem: { width: 120, height: 120, marginTop: 10, borderRadius: 10, alignSelf: "center" },
  botaoExcluir: { backgroundColor: "red", padding: 8, borderRadius: 6, marginTop: 10 },
});
