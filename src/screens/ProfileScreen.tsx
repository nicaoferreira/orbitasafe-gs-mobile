import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { clearSession } from "../services/storage";

export default function ProfileScreen({ navigation }: any) {
  async function logout() {
    await clearSession();

    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👨‍🚀 Perfil Operacional</Text>

      <View style={styles.card}>
        <Text style={styles.info}>
          Organização: Defesa Civil Nacional
        </Text>

        <Text style={styles.info}>
          Cargo: Analista de Monitoramento
        </Text>

        <Text style={styles.info}>
          Sistema: OrbitaSafe v1.0
        </Text>

        <Text style={styles.info}>
          Precisão da IA: 94%
        </Text>

        <Text style={styles.info}>
          Status: 🟢 Online
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={logout}
      >
        <Text style={styles.buttonText}>
          Encerrar Sessão
        </Text>
      </TouchableOpacity>
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

  title: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 22,
  },

  info: {
    fontSize: 17,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#E53935",
    padding: 16,
    borderRadius: 15,
    marginTop: 25,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});