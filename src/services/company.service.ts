import { UpdateCompany } from "../models/company";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const findCompanyApi = async (): Promise<CompanyResponse> => {
  const response = await fetch(`${BASE_URL}/company/find`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error en el login");
  }
  return response.json();
};

export const updateCompanyApi = async (request: UpdateCompany): Promise<CompanyResponse> => {
  const response = await fetch(`${BASE_URL}/company/update`, {
    method: "PUT",
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

export interface CompanyResponse  {
    id: number,
    name: string,
    photo: string,
    nit: string
}

