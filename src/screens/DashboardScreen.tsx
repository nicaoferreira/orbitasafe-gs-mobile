import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { getAreas } from "../services/storage";

export default function DashboardScreen({
  navigation,
}: any) {
  const [totalAreas, setTotalAreas] =
    useState(0);

  useEffect(() => {
    loadAreas();

    const unsubscribe =
      navigation.addListener(
        "focus",
        () => {
          loadAreas();
        }
      );

    return unsubscribe;
  }, [navigation]);

  async function loadAreas() {
    const areas = await getAreas();
    setTotalAreas(areas.length);
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        🛰️ OrbitaSafe
      </Text>

      <Text style={styles.subtitle}>
        Central de Monitoramento Orbital
      </Text>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.cardNumber}>
            {totalAreas}
          </Text>

          <Text style={styles.cardLabel}>
            Áreas
          </Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.cardNumber}>
            3
          </Text>

          <Text style={styles.cardLabel}>
            Alertas
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.bigTitle}>
          Precisão da IA
        </Text>

        <Text style={styles.bigValue}>
          94%
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.bigTitle}>
          Satélites Ativos
        </Text>

        <Text style={styles.bigValue}>
          12
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.bigTitle}>
          Status do Sistema
        </Text>

        <Text style={styles.online}>
          🟢 Operacional
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Áreas")
        }
      >
        <Text style={styles.buttonText}>
          Gerenciar Áreas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            "Alertas"
          )
        }
      >
        <Text style={styles.buttonText}>
          Visualizar Alertas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            "Dados Orbitais"
          )
        }
      >
        <Text style={styles.buttonText}>
          Dados Orbitais
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            "Perfil"
          )
        }
      >
        <Text style={styles.buttonText}>
          Perfil
        </Text>
      </TouchableOpacity>
    </ScrollView>
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
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  subtitle: {
    color: "#CCC",
    textAlign: "center",
    marginBottom: 25,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  smallCard: {
    backgroundColor: "#10294F",
    width: "48%",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  cardNumber: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
  },

  cardLabel: {
    color: "#CCC",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#10294F",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  bigTitle: {
    color: "#CCC",
    fontSize: 16,
  },

  bigValue: {
    color: "#FFF",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
  },

  online: {
    color: "#4CAF50",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#1E88E5",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});