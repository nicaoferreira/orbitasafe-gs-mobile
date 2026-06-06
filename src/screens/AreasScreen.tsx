import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { saveAreas, getAreas } from "../services/storage";

export default function AreasScreen() {
  const [area, setArea] = useState("");
  const [areas, setAreas] = useState<string[]>([]);

  useEffect(() => {
    loadAreas();
  }, []);

  async function loadAreas() {
    const data = await getAreas();
    setAreas(data);
  }

  async function addArea() {
    if (!area.trim()) return;

    const updated = [...areas, area];

    setAreas(updated);

    await saveAreas(updated);

    setArea("");
  }

  async function removeArea(index: number) {
    const updated = areas.filter(
      (_, i) => i !== index
    );

    setAreas(updated);

    await saveAreas(updated);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        🌎 Áreas Monitoradas
      </Text>

      <TextInput
        placeholder="Nome da área"
        style={styles.input}
        value={area}
        onChangeText={setArea}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={addArea}
      >
        <Text style={styles.buttonText}>
          Adicionar Área
        </Text>
      </TouchableOpacity>

      <FlatList
        data={areas}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.areaName}>
              {item}
            </Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>
                removeArea(index)
              }
            >
              <Text style={styles.deleteText}>
                🗑️
              </Text>
            </TouchableOpacity>
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

  input: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#1E88E5",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },

  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  areaName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  deleteButton: {
    padding: 5,
  },

  deleteText: {
    fontSize: 20,
  },
});