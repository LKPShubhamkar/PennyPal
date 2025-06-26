import apiService from "./apiServices";
import { endpoints } from "./endpoints";

export const apiServices = {
  ExternalSSORoute: async (payload: any) => {
    return await apiService("POST", endpoints.ExternalSSORoute, payload);
  },
};
