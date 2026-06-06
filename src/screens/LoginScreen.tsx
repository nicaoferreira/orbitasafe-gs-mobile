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
    const session = await getSession();

    if (session === "logged") {
      navigation.replace("Dashboard");
    }
  }

  async function login() {
    const user = await getUser();

    // Usuário padrão solicitado pelo professor
    if (
      email === "fiap@teste.com" &&
      senha === "123456"
    ) {
      await saveSession();
      navigation.replace("Dashboard");
      return;
    }

    // Usuário criado pelo cadastro
    if (
      user &&
      email === user.email &&
      senha === user.senha
    ) {
      await saveSession();
      navigation.replace("Dashboard");
      return;
    }

    alert("Usuário ou senha inválidos");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>
          🛰️
        </Text>

        <Text style={styles.title}>
          OrbitaSafe
        </Text>

        <Text style={styles.subtitle}>
          Monitoramento Inteligente
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#777"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#777"
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
          onPress={() =>
            navigation.navigate("Cadastro")
          }
        >
          <Text style={styles.register}>
            Criar Conta
          </Text>
        </TouchableOpacity>

        <View style={styles.testCard}>
          <Text style={styles.testTitle}>
            Usuário de Teste
          </Text>

          <Text style={styles.testText}>
            Email: fiap@teste.com
          </Text>

          <Text style={styles.testText}>
            Senha: 123456
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071A35",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#10294F",
    borderRadius: 25,
    padding: 25,
  },

  logo: {
    fontSize: 60,
    textAlign: "center",
  },

  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#BBB",
    textAlign: "center",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#1E88E5",
    borderRadius: 15,
    padding: 15,
    marginTop: 5,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },

  register: {
    color: "#FFF",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },

  testCard: {
    marginTop: 25,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#1E4D8F",
  },

  testTitle: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  testText: {
    color: "#BBB",
    textAlign: "center",
    fontSize: 13,
  },
});