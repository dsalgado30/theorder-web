import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CompanyResponse, findCompanyApi, updateCompanyApi } from "../services/company.service";
import { UpdateCompany } from "../models/company";

export const useFindCompany = (): UseQueryResult<CompanyResponse, Error> => {
  return useQuery<CompanyResponse, Error>({
    queryKey: ["findCompany"],
    queryFn: () => findCompanyApi(),
    retry: 0,
  });
};

export const useUpdateCompany = (request: UpdateCompany|null): UseQueryResult<CompanyResponse, Error> => {
    return useQuery<CompanyResponse, Error>({
      queryKey: ["updateCompany"],
      queryFn: () => updateCompanyApi(request!),
      retry: 2,
      enabled: !!request,  // Solo habilita la consulta si request no es null
    });
  };
  
