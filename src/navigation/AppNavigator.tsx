import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DashboardScreen from "../screens/DashboardScreen";
import AreasScreen from "../screens/AreasScreen";
import AlertsScreen from "../screens/AlertsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrbitalDataScreen from "../screens/OrbitalDataScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Cadastro"
        component={RegisterScreen}
      />

      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Stack.Screen
        name="Áreas"
        component={AreasScreen}
      />

      <Stack.Screen
        name="Alertas"
        component={AlertsScreen}
      />

      <Stack.Screen
        name="Perfil"
        component={ProfileScreen}
      />

      <Stack.Screen
        name="Dados Orbitais"
        component={OrbitalDataScreen}
      />
    </Stack.Navigator>
  );
}