import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  getUser,
  saveSession,
  getSession,
} from "../services/storage";

export default function LoginScreen({
  navigation,
}: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    const session =
      await getSession();

    if (session === "logged") {
      navigation.replace(
        "Dashboard"
      );
    }
  }

  async function login() {
    const user = await getUser();

    if (!user) {
      alert(
        "Nenhum usuário cadastrado. Crie uma conta primeiro."
      );
      return;
    }

    if (
      email === user.email &&
      senha === user.senha
    ) {
      await saveSession();

      navigation.replace(
        "Dashboard"
      );
    } else {
      alert(
        "Usuário ou senha inválidos"
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        🛰️
      </Text>

      <Text style={styles.title}>
        OrbitaSafe
      </Text>

      <Text style={styles.subtitle}>
        Monitoramento Ambiental Inteligente
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#666"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#666"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={login}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() =>
          navigation.navigate(
            "Cadastro"
          )
        }
      >
        <Text style={styles.secondaryText}>
          Criar Conta
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

  logo: {
    fontSize: 60,
    textAlign: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },

  subtitle: {
    color: "#DDD",
    textAlign: "center",
    marginBottom: 35,
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

  secondaryButton: {
    marginTop: 20,
  },

  secondaryText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});