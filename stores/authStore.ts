import { authService } from "@/services/authService";
import { User } from "@/types/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  restoreSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.login({ email, password });

      if (response.success) {
        const { token, user } = response.data;

        // Save to AsyncStorage
        await AsyncStorage.setItem("authToken", token);
        await AsyncStorage.setItem("userData", JSON.stringify(user));
        await AsyncStorage.setItem("isLoggedIn", "true");

        // Update state
        set({ user, token, isLoading: false, error: null });
      } else {
        throw new Error(response.message || "Login failed");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An error occurred during login";
      set({ isLoading: false, error: errorMessage, user: null, token: null });
      throw error;
    }
  },

  logout: async () => {
    try {
      // Clear AsyncStorage
      await AsyncStorage.multiRemove(["authToken", "userData", "isLoggedIn"]);

      // Clear state
      set({ user: null, token: null, error: null });
    } catch (error) {
      console.error("Logout error:", error);
    }
  },

  clearError: () => {
    set({ error: null });
  },

  restoreSession: async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      const userDataString = await AsyncStorage.getItem("userData");

      if (token && userDataString) {
        const user = JSON.parse(userDataString);
        set({ user, token });
      }
    } catch (error) {
      console.error("Session restore error:", error);
      // Clear invalid data
      await AsyncStorage.multiRemove(["authToken", "userData", "isLoggedIn"]);
    }
  },
}));
