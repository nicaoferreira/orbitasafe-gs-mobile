import AsyncStorage from "@react-native-async-storage/async-storage";

const AREAS_KEY = "@areas";
const USER_KEY = "@user";
const SESSION_KEY = "@session";

export const saveAreas = async (areas: string[]) => {
  try {
    await AsyncStorage.setItem(
      AREAS_KEY,
      JSON.stringify(areas)
    );
  } catch (error) {
    console.log(error);
  }
};

export const getAreas = async (): Promise<string[]> => {
  try {
    const data = await AsyncStorage.getItem(AREAS_KEY);

    if (data) {
      return JSON.parse(data);
    }

    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const saveUser = async (
  email: string,
  senha: string
) => {
  try {
    const user = {
      email,
      senha,
    };

    await AsyncStorage.setItem(
      USER_KEY,
      JSON.stringify(user)
    );
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const saveSession = async () => {
  try {
    await AsyncStorage.setItem(
      SESSION_KEY,
      "logged"
    );
  } catch (error) {
    console.log(error);
  }
};

export const getSession = async () => {
  try {
    return await AsyncStorage.getItem(
      SESSION_KEY
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const clearSession = async () => {
  try {
    await AsyncStorage.removeItem(
      SESSION_KEY
    );
  } catch (error) {
    console.log(error);
  }
};