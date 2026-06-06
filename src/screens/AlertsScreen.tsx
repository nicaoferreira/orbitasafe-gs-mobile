import { View, Text, FlatList, StyleSheet } from "react-native";

const alerts = [
  {
    id: "1",
    type: "🌊 Enchente",
    location: "Vale do Paraíba",
    source: "Satélite Sentinel-2",
  },
  {
    id: "2",
    type: "🔥 Foco de calor",
    location: "Amazônia Legal",
    source: "Satélite Landsat 9",
  },
  {
    id: "3",
    type: "⛰️ Deslizamento",
    location: "Serra do Mar",
    source: "IA OrbitaSafe",
  },
];

export default function AlertsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛰️ Alertas Orbitais</Text>

      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.alertType}>{item.type}</Text>

            <Text style={styles.info}>
              📍 Local: {item.location}
            </Text>

            <Text style={styles.info}>
              📡 Fonte: {item.source}
            </Text>
          </View>
        )}
      />
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
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },

  alertType: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  info: {
    fontSize: 15,
    color: "#444",
  },
});