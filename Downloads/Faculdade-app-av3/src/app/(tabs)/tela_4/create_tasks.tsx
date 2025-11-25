import { useState } from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity, Image,Alert,Button} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

interface Tarefa {
  id: number;
  assunto: string;
  texto: string;
  imagem?: string | null;
}

export default function CreateTasks() {
  const [assunto, setAssunto] = useState("");
  const [texto, setTexto] = useState("");
  const [imagem, setImagem] = useState<string | null>(null);
  const router = useRouter();

  const abrirCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão negada", "Permita o uso da câmera para tirar fotos.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const salvarTarefa = async () => {
  if (!assunto.trim()) {
    Alert.alert("Erro", "O campo Assunto é obrigatório!");
    return;
  }

  const novaTarefa: Tarefa = {
    id: Date.now(),
    assunto,
    texto,
    imagem,
  };

  try {
    const tarefasSalvas = await AsyncStorage.getItem("tarefas");
    const lista = tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
    lista.push(novaTarefa);
    await AsyncStorage.setItem("tarefas", JSON.stringify(lista));

    Alert.alert("Sucesso ✅", "Tarefa criada com sucesso!", [
      {
        text: "OK",
        onPress: () => {
          setAssunto("");
          setTexto("");
          setImagem(null);

          router.push("/tela_4/create_tasks");
        },
      },
    ]);
  } catch (error) {
    console.error("Erro ao salvar tarefa:", error);
    Alert.alert("Erro", "Não foi possível salvar a tarefa.");
  }
};


  return (
    <View style={style.pagina}>
      <View style={style.corpo}>
        <Text style={style.titulo}>
          <Ionicons name="checkmark-done" size={16} color="black" /> Create Tasks
        </Text>

        <View style={style.objetos}>
          <View style={style.objeto_1}>
            <Text style={style.label}>Assunto:</Text>
            <TextInput
              style={style.dados}
              placeholder="Digite o seu Assunto do Dia..."
              value={assunto}
              onChangeText={setAssunto}
            />

            <Text style={[style.label, { marginTop: 15 }]}>Detalhes:</Text>
            <TextInput
              style={style.texto}
              placeholder="Digite aqui com detalhes..."
              value={texto}
              onChangeText={setTexto}
              multiline
              textAlignVertical="top"
            />

            <TouchableOpacity style={style.botaoCamera} onPress={abrirCamera}>
              <Ionicons name="camera" size={28} color="white" />
              <Text style={style.txtBotaoCamera}>Tirar Foto</Text>
            </TouchableOpacity>

            {imagem && <Image source={{ uri: imagem }} style={style.previewImagem} />}
          </View>

          <View style={style.botao_feito}>
            <Button title="Feito" onPress={salvarTarefa} />
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  pagina: { flex: 1, backgroundColor: "white", justifyContent: "center" },
  corpo: { backgroundColor: "white", height: "90%", width: "100%" },
  titulo: { textAlign: "center", fontSize: 20, fontWeight: "bold", color: "black", marginTop: 15 },
  objetos: { alignItems: "center" },
  objeto_1: { width: "80%", marginTop: 60 },
  label: { fontSize: 16, marginBottom: 5, fontWeight: "bold" },
  dados: { borderColor: "black", borderWidth: 1, borderRadius: 8, padding: 8 },
  texto: { borderColor: "black", borderWidth: 1, borderRadius: 8, padding: 20, marginTop: 10 },
  botaoCamera: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "center",
  },
  txtBotaoCamera: { color: "white", fontWeight: "bold", marginLeft: 8 },
  previewImagem: { width: 150, height: 150, marginTop: 15, borderRadius: 10, alignSelf: "center" },
  botao_feito: { marginTop: 30 },
});
