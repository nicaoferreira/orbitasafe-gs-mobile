import { StyleSheet } from "react-native";

export const COLORS = {
  background: "#071A35",
  card: "#10294F",
  primary: "#1E88E5",
  secondary: "#42A5F5",
  danger: "#E53935",
  warning: "#FF9800",
  success: "#4CAF50",
  text: "#FFFFFF",
  textSecondary: "#B0BEC5",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 20,
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 16,
  },
});