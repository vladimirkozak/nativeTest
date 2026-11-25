import { request } from "../../../shared/api/client";

export const cartApi = {
  getProducts: async () => request('/cart', { auth: true }),
};