import { LoginRequest, LoginResponse } from "@/types/auth";
import api from "./api";

export const authService = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/login", credentials);
    return response.data;
  },

  // Add more auth methods as needed
  // logout: async () => { ... },
  // refreshToken: async () => { ... },
};
