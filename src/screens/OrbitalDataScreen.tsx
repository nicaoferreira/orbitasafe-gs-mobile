import { View, Text, StyleSheet } from "react-native";

export default function OrbitalDataScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛰️ Dados Orbitais</Text>

      <View style={styles.card}>
        <Text style={styles.metric}>Satélites conectados: 12</Text>
        <Text style={styles.metric}>Imagens processadas: 2.145</Text>
        <Text style={styles.metric}>Precisão da IA: 94%</Text>
        <Text style={styles.metric}>Alertas emitidos hoje: 87</Text>
        <Text style={styles.metric}>Atualização: Tempo Real</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071A35",
    padding: 20,
  },

  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
  },

  metric: {
    fontSize: 18,
    marginBottom: 15,
  },
});