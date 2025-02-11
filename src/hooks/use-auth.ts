import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { loginApi, LoginResponse, registerApi, RegisterResponse } from "../services/auth.service";
import { AuthLogin, AuthRegister } from "../models/auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useLogin = (request: AuthLogin|null): UseQueryResult<LoginResponse, Error> => {
  return useQuery<LoginResponse, Error>({
    queryKey: ['login', request],
    queryFn: () => loginApi(request!),
    retry: 0,
    enabled: !!request, // Solo habilita la consulta si request no es null
  });
}

export const useRegister = (request: AuthRegister|null): UseQueryResult<RegisterResponse, Error> => {
  return useQuery<RegisterResponse, Error>({
    queryKey: ['register', request],
    queryFn: () => registerApi(request!),
    retry: 0,
    enabled: !!request, // Solo habilita la consulta si request no es null
  });
}
