import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { saveUser } from "../services/storage";

export default function RegisterScreen({
  navigation,
}: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] =
    useState("");

  async function register() {
    if (
      !email ||
      !senha ||
      !confirmar
    ) {
      alert("Preencha todos os campos");
      return;
    }

    if (senha !== confirmar) {
      alert("As senhas não coincidem");
      return;
    }

    await saveUser(email, senha);

    alert("Conta criada com sucesso");

    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Criar Conta
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        placeholder="Confirmar Senha"
        secureTextEntry
        style={styles.input}
        value={confirmar}
        onChangeText={setConfirmar}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={register}
      >
        <Text style={styles.buttonText}>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#071A35",
  },

  title: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#1E88E5",
    padding: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});