import { useEffect, useState } from "react";
import { Order } from "../types";
import { orderApi } from "../api/orderApi";

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const load = async () => {
    const data = await orderApi.getOrders();
    setOrders(data);
  };

  useEffect(() => {
    load();
  }, []);

  return {
    orders,
  }
};
