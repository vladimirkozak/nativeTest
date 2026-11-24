import { useEffect, useState } from "react";
import { Product } from "../types";
import { catalogApi } from "../api/catalogApi";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const load = async () => {
    const data = await catalogApi.getProducts();
    setProducts(data);
  };

  useEffect(() => {
    load();
  }, []);

  return {
    products
  }
};
