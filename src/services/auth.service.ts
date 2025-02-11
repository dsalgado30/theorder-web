import { AuthLogin, AuthRegister } from "../models/auth";
import { Role } from "../models/role";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const loginApi = async (request: AuthLogin): Promise<LoginResponse> => {
  const response = await fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  if (!response.ok) {
    throw new Error("Error en el login");
  }
  return response.json();
};

export const registerApi = async (request: AuthRegister): Promise<RegisterResponse> => {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  if (!response.ok) {
    throw new Error("Error en el registro");
  }
  return response.json();
};

export interface User {
  userId: number;
  fullName: string;
  role: Role;
  email: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  message: string;
}

export interface RegisterResponse extends LoginResponse {

}

