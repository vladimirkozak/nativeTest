import { request } from "../../../shared/api/client";

export const orderApi = {
  getOrders: async () => request('/orders', { auth: true }),
};
