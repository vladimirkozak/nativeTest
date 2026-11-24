import { request } from "../../../shared/api/client";

export const catalogApi = {
    getProducts: async () => request('/products'),
}
